import { query } from "@/app/_db/db";

export async function GET(request) {
  try {
    const products = await query({
      query: "SELECT * FROM tblReport",
      values: [],
    });
    // Return a response object directly
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}