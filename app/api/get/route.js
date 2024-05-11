import { query } from "@/app/_db/db";

export async function handler(req, res) {
  if (req.method === "GET") { // Corrected 'methode' to 'method'
    try {
      const products = await query({
        query: "SELECT * FROM ebrahim_DBlegiogloria", // Corrected SQL query syntax
        values: [],
      });
      res.status(200).json(products); // Changed the response to send the fetched products
    } catch (error) {
      res.status(500).json({ error: error.message }); // Handling potential errors from the query
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" }); // Handling cases where the method is not GET
  }
}
