import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Box, Flex } from "@radix-ui/themes";
import DashboardHeader from "@/components/header/Header";
import DashboardNavigation from "@/components/nav/Navigation";

export const metadata: Metadata = {
  description: "Admin dashboard",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Flex direction="column" height={"100vh"} gap={"4"} className="p-3">
      <Box asChild className="header-box">
        <DashboardHeader />
      </Box>

      <Flex className="overflow-hidden flex-1" gap={"4"}>
        <Box asChild className="nav-box">
          <DashboardNavigation />
        </Box>

        <Box asChild className="main-box">
          <main>{children}</main>
        </Box>
      </Flex>
    </Flex>
  );
}
