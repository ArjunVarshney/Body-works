"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: "/categories",
      label: "Categories",
      active: pathname === "/categories",
    },
    {
      href: `/docs`,
      label: "Docs",
      active: pathname === `/docs`,
    },
  ];
  return (
    <nav className={cn("flex items-center space-x-2 lg:space-x-4", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors p-2 rounded-lg hover:text-primary hover:bg-neutral-100 dark:hover:bg-gray-900",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
