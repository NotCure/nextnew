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
    const { message, appointmentDateTime, userId } = data;
    const agentId = await getRandomAgentId();

    const results = await query({
      query:
        "INSERT INTO tblAfspraak (DateTime, Message, AgentID, BurgerID) VALUES (?, ?, ?, ?)",
      values: [appointmentDateTime, message, agentId, userId],
    });

    return new Response(
      JSON.stringify({ success: true, appointmentId: results.insertId }),
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
