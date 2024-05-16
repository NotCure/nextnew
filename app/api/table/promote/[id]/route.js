import { query } from "@/app/_db/db";

export async function POST(request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop(); // Extract the ID from the URL

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  try {
    const burger = await query({
      query:
        "SELECT Naam, Voornaam, Email, Password FROM tblBurgers WHERE BurgerID = ?",
      values: [id],
    });

    if (burger.length === 0) {
      return new Response(JSON.stringify({ error: "Burger not found" }), {
        status: 404,
      });
    }

    const { Naam, Voornaam, Email, Password } = burger[0];

    await query({
      query:
        "INSERT INTO tblAgenten (Name, Surname, Birthday, Rank, Email, Password) VALUES (?, ?, ?, ?, ?, ?)",
      values: [Naam, Voornaam, "N/A", "4", Email, Password],
    });

    return new Response(JSON.stringify({ message: "Promotion successful" }), {
      status: 201,
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
