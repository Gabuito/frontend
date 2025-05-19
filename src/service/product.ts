export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function getProducts() {
  // Simulate a delay
  await delay(20000);
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
