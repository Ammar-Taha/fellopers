export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  const { default: dbConnect } = await import("@/lib/mongoose");
  await dbConnect();
}
