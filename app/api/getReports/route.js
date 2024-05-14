// app/api/getReportsWithAgents.js
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

export async function GET() {
  try {
    const results = await query({
      query: `
        SELECT r.ReportID, r.Datetime, r.Location, r.Email, r.Description, r.Latitude, r.Longitude, a.Name AS AgentName
        FROM tblReport r
        JOIN tblAgenten a ON r.AgentID = a.AgentID
      `,
    });

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
