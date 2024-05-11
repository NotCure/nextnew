import mysql from 'mysql2/promise';

export async function query({query, values = []}){
  // Hard-coded database connection details
  const dbconnection = await mysql.createConnection({
    host: '185.220.172.5',
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
    throw error; // It's usually better to throw the original error for debugging purposes
  }
}
