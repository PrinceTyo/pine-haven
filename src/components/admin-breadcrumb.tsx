"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const LABELS: Record<string, string> = {
  room: "Rooms",
  reservations: "Reservations",
  contact: "Contacts",
  edit: "Edit",
  create: "Create",
  detail: "Detail",
};

export default function AdminBreadcrumb() {
  const pathname = usePathname();

  const rawSegments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== "admin");

  const segments: string[] = [];

  for (const segment of rawSegments) {
    // Jika segment sebelumnya adalah edit/detail,
    // berarti ini adalah id -> abaikan
    if (
      segments[segments.length - 1] === "edit" ||
      segments[segments.length - 1] === "detail"
    ) {
      break;
    }

    segments.push(segment);
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = "/admin/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <div key={href} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{LABELS[segment] ?? segment}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{LABELS[segment] ?? segment}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
