"use client";

import { LayoutDashboard, BedDouble, CalendarDays, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AppTitle } from "./app-title";
import { NavUser } from "./nav-user";
import { Session } from "next-auth";
import { Separator } from "@/components/ui/separator";

const navItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Reservations",
    href: "/admin/reservations",
    icon: CalendarDays,
  },
  {
    title: "Rooms",
    href: "/admin/room",
    icon: BedDouble,
  },
  {
    title: "Contacts",
    href: "/admin/contact",
    icon: Mail,
  },
];

export default function AppSidebar({ session }: { session: Session | null }) {
  const pathname = usePathname();

  return (
    <Sidebar className="rounded-lg!">
      <SidebarHeader className="bg-white">
        <AppTitle />
        <Separator />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <div className="px-3 py-4">
          <SidebarMenu className="space-y-3">
            {navItems.map((item) => {
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className="h-11 rounded-sm transition-all duration-200
                              hover:bg-gray-100
                              data-[active=true]:bg-red-500!
                              data-[active=true]:text-white!"
                  >
                    <Link href={item.href} className="flex items-center gap-4">
                      <item.icon className="size-5" />
                      <span className="font-medium text-md">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <NavUser session={session} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
