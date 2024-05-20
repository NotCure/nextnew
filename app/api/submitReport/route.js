import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    return results;
  } finally {
    await dbconnection.end();
  }
}

async function getRandomAgentId() {
  const agentResults = await query({
    query: "SELECT AgentID FROM tblAgenten ORDER BY RAND() LIMIT 1",
  });
  return agentResults[0].AgentID;
}

export async function POST(req) {
  const body = await req.json();
  const { message, name, email, address, latitude, longitude } = body;

  if (!message || !name || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const agentId = await getRandomAgentId();
    const dateTime = new Date().toISOString();
    const status = "1"; // Assuming '1' is the default status

    const result = await query({
      query: `
        INSERT INTO tblReport 
        (Datetime, Location, Email, Description, Latitude, Longitude, Status, AgentID) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      values: [
        dateTime,
        address,
        email,
        message,
        latitude,
        longitude,
        status,
        agentId,
      ],
    });

    return NextResponse.json(
      { success: true, reportId: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
