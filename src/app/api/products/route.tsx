export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return new Response(JSON.stringify({ error: "Missing parameters" }), {
      status: 400,
    });
  }

  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
    );
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch data" + error }),
      {
        status: 500,
      }
    );
  }
}
