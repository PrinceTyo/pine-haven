import { auth } from "@/auth";
import { SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import "@/styles/globals.css";
import AppSidebar from "@/components/layout/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import HeaderAdmin from "@/components/header/header-admin";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }

  if (session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar session={session} />

        <div className="flex flex-1 flex-col">
          <HeaderAdmin />

          <main className="flex-1 p-6">{children}</main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
