import { HomeIcon, PlusIcon } from "@radix-ui/react-icons";
import { NavigationMenu } from "radix-ui";

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
  return (
    <NavigationMenu.Root className="nav-box">
      <NavigationMenu.List className="flex flex-col gap-2">
        {links.map((link, i) => (
          <NavigationMenu.Item key={i}>
            <NavigationMenu.Link href={link.href} className="nav-link group">
              <link.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span className="font-medium">{link.label}</span>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
