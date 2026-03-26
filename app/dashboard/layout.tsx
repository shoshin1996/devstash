import { Search, Plus, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      {/* Top Bar */}
      <header className="flex h-14 items-center justify-between border-b border-border px-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <PanelLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm">
              S
            </div>
            DevStash
          </div>
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search items..."
              className="pl-9 bg-muted/50 border-border"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Plus className="mr-1 h-4 w-4" />
            New Collection
          </Button>
          <Button>
            <Plus className="mr-1 h-4 w-4" />
            New Item
          </Button>
        </div>
      </header>

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Placeholder */}
        <aside className="w-64 border-r border-border p-6">
          <h2 className="text-lg font-semibold text-muted-foreground">Sidebar</h2>
        </aside>

        {/* Main Content Placeholder */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
