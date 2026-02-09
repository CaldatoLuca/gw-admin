import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Box } from "@radix-ui/themes";

export const metadata: Metadata = {
  description: "Admin dashboard",
};

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen flex justify-center items-center">
      {children}
    </main>
  );
}
