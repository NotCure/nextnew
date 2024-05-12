// pages/api/report.js
import mysql from "mysql2/promise";

// Setup a connection to the database
async function query({ query, values = [] }) {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [results] = await connection.execute(query, values);
    return results;
  } finally {
    connection.end();
  }
}

// Handling POST request
export async function POST(req) {
  try {
    const { email, address, datetime, description } = await req.json();
    const results = await query({
      query: 'INSERT INTO tblReport (Datetime, Location, Email, Description, Status, AgentID) VALUES (?, ?, ?, ?, ?, ?)',
      values: [datetime, address, email, description, "1", 1]  // Adjust 'Status' and 'AgentID' if necessary
    });

    return {
      statusCode: 201,
      body: JSON.stringify({ success: true, id: results.insertId })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}

// Default handler for the route
export default async function handler(req, res) {
  if (req.method === "POST") {
    const result = await POST(req);
    res.status(result.statusCode).json(JSON.parse(result.body));
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
