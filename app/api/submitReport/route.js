// app/api/submitReport.js
import mysql from "mysql2/promise";

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

export async function POST(request) {
  try {
    const data = await request.json();
    const { Datetime, Location, Email, Description } = data;
    const AgentID = await getRandomAgentId();

    const insertResults = await query({
      query:
        "INSERT INTO tblReport (Datetime, Location, Email, Description, Status, AgentID) VALUES (?, ?, ?, ?, ?, ?)",
      values: [Datetime, Location, Email, Description, "1", AgentID], // Assuming default status '1'
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Reported Successfully",
        reportId: insertResults.insertId,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
