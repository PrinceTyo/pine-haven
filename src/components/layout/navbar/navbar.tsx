import { auth } from "@/auth";
import Navlink from "./nav-link";

export default async function Navbar() {
  const session = await auth();

  return <Navlink session={session} />;
}
