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

export async function POST(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { message, appointmentDateTime, userId } = req.body;
    const agentId = await getRandomAgentId();

    const result = await query({
      query: "INSERT INTO tblAfspraak (DateTime, Message, AgentID, BurgerID) VALUES (?, ?, ?, ?)",
      values: [appointmentDateTime, message, agentId, userId],
    });

    res.status(201).json({ success: true, appointmentId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
