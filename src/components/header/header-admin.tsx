import { SidebarTrigger } from "../ui/sidebar";

export default function HeaderAdmin() {
  return (
    <header>
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white px-6">
        <div className="flex items-center gap-3">
          <SidebarTrigger />

          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
      </header>
    </header>
  );
}
