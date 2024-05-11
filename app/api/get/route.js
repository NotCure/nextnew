import { query } from "@/app/_db/db";

export default async function handler(req, res) {
  console.log("Request method:", req.method); // Good for debugging
  if (req.method === "GET") {
    try {
      const products = await query({
        query: "SELECT * FROM ebrahim_DBlegiogloria",
        values: []
      });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}