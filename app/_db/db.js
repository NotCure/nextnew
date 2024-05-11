// _db/query.js
import mysql from 'mysql2/promise';

async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: '185.220.172.5',  // Assuming you're hardcoding these for now
    database: 'ebrahim_DBlegiogloria',
    user: 'ebrahim',
    password: 'Rednour123'
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    console.error("Database query error:", error.message);
    throw error;  // It's good practice to rethrow to let calling function handle it
  }
}

export default query;
