import { query } from "@/app/_db/db";

export async function DELETE(request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop(); // Extract the ID from the URL

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  try {
    await query({
      query: "DELETE FROM tblBurgers WHERE BurgerID = ?",
      values: [id],
    });

    return new Response(null, { status: 204 }); // No content to send back, but signifies successful deletion
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
