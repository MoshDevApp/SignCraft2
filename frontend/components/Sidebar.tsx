"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/lib/auth";

/**
 * Sidebar navigation
 * - Grouped sections
 * - Active link highlight
 * - Logout pinned at bottom
 */
export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `block px-3 py-2 rounded text-sm ${
      pathname === path
        ? "bg-gray-100 font-medium"
        : "text-gray-600 hover:bg-gray-50"
    }`;

  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col">
      {/* Logo / App name */}
      <div className="px-6 py-5 border-b">
        <h1 className="text-xl font-semibold">SignCraft</h1>
        <p className="text-xs text-gray-500">Digital Signage CMS</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-6 overflow-y-auto">
        {/* General */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
            General
          </p>
          <Link href="/dashboard" className={linkClass("/dashboard")}>
            Dashboard
          </Link>
          <Link
            href="/dashboard/screens"
            className={linkClass("/dashboard/screens")}
          >
            Screens
          </Link>
        </div>

        {/* Content */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
            Content
          </p>
          <Link
            href="/dashboard/media"
            className={linkClass("/dashboard/media")}
          >
            Media Library
          </Link>
          <Link
            href="/dashboard/design"
            className={linkClass("/dashboard/design")}
          >
            Design Studio
          </Link>
        </div>

        {/* AI */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
            AI Tools
          </p>
          <Link
            href="/dashboard/ai"
            className={linkClass("/dashboard/ai")}
          >
            AI Assistant
          </Link>
        </div>
      </nav>

      {/* Logout */}
      <div className="border-t p-4">
        <button
          onClick={logout}
          className="w-full text-left text-sm text-red-500 hover:bg-red-50 px-3 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
