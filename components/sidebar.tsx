"use client";

import Link from "next/link";
import {
  Code,
  MessageSquare,
  Terminal,
  FileText,
  File,
  Image,
  Link as LinkIcon,
  Star,
  FolderOpen,
  Settings,
  ChevronDown,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { itemTypes, collections, currentUser } from "@/src/lib/mock-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  MessageSquare,
  Terminal,
  FileText,
  File,
  Image,
  Link: LinkIcon,
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

interface SidebarProps {
  collapsed: boolean;
}

export function Sidebar({ collapsed }: SidebarProps) {
  const favoriteCollections = collections.filter((c) => c.isFavorite);
  const allCollections = collections.filter((c) => !c.isFavorite);

  if (collapsed) {
    return null;
  }

  return (
    <aside className="flex w-64 flex-col border-r border-border bg-background">
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-1 p-3">
          {/* Types Section */}
          <div className="mb-1">
            <span className="px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Types
            </span>
          </div>
          {itemTypes.map((type) => {
            const Icon = iconMap[type.icon];
            return (
              <Link
                key={type.id}
                href={`/items/${type.name.toLowerCase()}`}
                className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <span className="flex items-center gap-2">
                  {Icon && (
                    <Icon className="h-4 w-4" />
                  )}
                  {type.name}
                </span>
                <span className="text-xs text-muted-foreground/70">
                  {type.count}
                </span>
              </Link>
            );
          })}

          <Separator className="my-2" />

          {/* Collections Section */}
          <div className="mb-1 flex items-center justify-between">
            <span className="px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Collections
            </span>
            <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
              <ChevronDown className="h-3 w-3" />
            </Button>
          </div>

          {/* Favorites */}
          <div className="mb-1">
            <span className="px-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
              Favorites
            </span>
          </div>
          {favoriteCollections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.id}`}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
              {collection.name}
            </Link>
          ))}

          {/* All Collections */}
          <div className="mb-1 mt-2">
            <span className="px-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
              All Collections
            </span>
          </div>
          {allCollections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.id}`}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <FolderOpen className="h-3.5 w-3.5" />
              {collection.name}
              <span className="ml-auto text-xs text-muted-foreground/70">
                {collection.itemCount}
              </span>
            </Link>
          ))}
        </div>
      </ScrollArea>

      {/* User Area */}
      <div className="border-t border-border p-3">
        <div className="flex items-center gap-2">
          <Avatar size="sm">
            <AvatarFallback>{getInitials(currentUser.name)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium">{currentUser.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {currentUser.email}
            </p>
          </div>
          <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </aside>
  );
}
