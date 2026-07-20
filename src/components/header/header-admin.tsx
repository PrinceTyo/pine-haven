import AdminBreadcrumb from "../admin-breadcrumb";
import { SidebarTrigger } from "../ui/sidebar";

export default function HeaderAdmin() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b bg-white px-6">
      <SidebarTrigger />

      <AdminBreadcrumb />
    </header>
  );
}
