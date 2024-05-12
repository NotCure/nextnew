import mysql from "mysql2/promise";

async function query({ query, values = [] }) {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    const [results] = await connection.execute(query, values);
    return results;
  } finally {
    await connection.end();
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { email, password } = data;

    // Check if credentials are in tblAgenten
    const agentResults = await query({
      query: "SELECT * FROM tblAgenten WHERE Email = ? AND Password = ?",
      values: [email, password],
    });

    if (agentResults.length > 0) {
      // User is an agent/admin
      return new Response(
        JSON.stringify({
          success: true,
          isAdmin: true,
          user: { ...agentResults[0], isAdmin: true },
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const burgerResults = await query({
      query: "SELECT * FROM tblBurgers WHERE Email = ? AND Password = ?",
      values: [email, password],
    });

    if (burgerResults.length > 0) {
      return new Response(
        JSON.stringify({
          success: true,
          isAdmin: false,
          user: burgerResults[0],
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid credentials" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
