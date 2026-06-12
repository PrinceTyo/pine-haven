export default function TestPage() {
  return <pre>{process.env.DATABASE_URL || "DATABASE_URL TIDAK TERBACA"}</pre>;
}
