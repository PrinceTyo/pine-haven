import { auth } from "@/auth";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import "@/styles/globals.css";
import AppSidebar from "@/components/layout/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

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

        <main className="flex-1">
          <SidebarTrigger />

          <div className="p-6">{children}</div>
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
}
