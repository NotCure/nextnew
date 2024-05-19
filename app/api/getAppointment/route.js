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

export async function GET(request) {
  try {
    const appointments = await query({
      query: `
        SELECT 
          a.AfspraakID, 
          a.DateTime, 
          a.Message, 
          b.Naam AS BurgerName, 
          b.Voornaam AS BurgerVoornaam, 
          ag.Name AS AgentName, 
          ag.Surname AS AgentSurname
        FROM tblAfspraak a
        JOIN tblBurgers b ON a.BurgerID = b.BurgerID
        JOIN tblAgenten ag ON a.AgentID = ag.AgentID
      `,
      values: [],
    });

    return new Response(JSON.stringify(appointments), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
