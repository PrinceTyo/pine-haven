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
    href: "contact",
    icon: Mail,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="rounded-lg!">
      <SidebarHeader>
        <AppTitle />
      </SidebarHeader>
      <SidebarContent>
        <div className="px-3 py-4">
          <SidebarMenu className="space-y-2">
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
                    className="h-11 rounded-xl"
                  >
                    <Link href={item.href} className="flex items-center gap-3">
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
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
