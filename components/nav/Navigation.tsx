"use client";

import { HomeIcon, PlusIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Text } from "@radix-ui/themes";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/dashboard",
  },
  {
    label: "Aggiungi Spot",
    icon: PlusIcon,
    href: "/",
  },
];

export default function DashboardNavigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className="nav-box">
      <NavigationMenu.List className="flex flex-col gap-2">
        {links.map((link, i) => {
          const isActive = pathname === link.href;

          return (
            <NavigationMenu.Item key={i}>
              <NavigationMenu.Link
                href={link.href}
                className={`nav-link group ${isActive ? "nav-link-active" : ""}`}
              >
                <link.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                <Text className="font-medium">{link.label}</Text>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
