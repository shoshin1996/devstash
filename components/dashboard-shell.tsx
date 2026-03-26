"use client";

import { useState } from "react";
import { Search, Plus, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import { useMediaQuery } from "@/lib/use-media-query";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  function toggleSidebar() {
    if (isMobile) {
      setMobileOpen((prev) => !prev);
    } else {
      setSidebarOpen((prev) => !prev);
    }
  }

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      {/* Top Bar */}
      <header className="flex h-14 items-center justify-between border-b border-border px-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
            onClick={toggleSidebar}
          >
            <PanelLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm">
              S
            </div>
            <span className="hidden sm:inline">DevStash</span>
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
          <Button variant="outline" className="hidden sm:inline-flex">
            <Plus className="mr-1 h-4 w-4" />
            New Collection
          </Button>
          <Button>
            <Plus className="mr-1 h-4 w-4" />
            <span className="hidden sm:inline">New Item</span>
          </Button>
        </div>
      </header>

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        {!isMobile && <Sidebar collapsed={!sidebarOpen} />}

        {/* Mobile Drawer */}
        {isMobile && (
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="left" className="w-64 p-0" showCloseButton={false}>
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <Sidebar collapsed={false} />
            </SheetContent>
          </Sheet>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
