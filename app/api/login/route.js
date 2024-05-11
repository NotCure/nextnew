// app/api/login.js
import mysql from 'mysql2/promise';

async function query({ query, values = [] }) {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
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

    const results = await query({
      query: 'SELECT * FROM tblBurgers WHERE Email = ? AND Password = ?',
      values: [email, password]
    });

    if (results.length > 0) {
      return new Response(JSON.stringify({ success: true, user: results[0] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ success: false, error: "Invalid credentials" }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
