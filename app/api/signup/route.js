// app/api/signup.js
import mysql from 'mysql2/promise';

async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    return results;
  } finally {
    await dbconnection.end();
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { naam, voornaam, gsmnummer, adres, geslacht, email, password } = data;
    
    const results = await query({
      query: 'INSERT INTO tblBurgers (Naam, Voornaam, Gsmnummer, Adres, Geslacht, Email, Password) VALUES (?, ?, ?, ?, ?, ?, ?)',
      values: [naam, voornaam, gsmnummer, adres, geslacht, email, password]
    });

    return new Response(JSON.stringify({ success: true, id: results.insertId }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
