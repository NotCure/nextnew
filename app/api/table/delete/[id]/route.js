import { query } from "@/app/_db/db";

export async function DELETE(request, res) {
  const { id } = request.query;

  try {
    await query({
      query: "DELETE FROM tblBurgers WHERE BurgerID = ?",
      values: [id],
    });

    res.status(204).end();  // No content to send back, but signifies successful deletion
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
