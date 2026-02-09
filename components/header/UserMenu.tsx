"use client";

import { Flex, Text, Button, Spinner } from "@radix-ui/themes";
import { HoverCard } from "@radix-ui/themes";
import { Half2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/lib/axios";
import { showToast } from "nextjs-toast-notify";

export function UserMenu({ username }: { username: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await api.post("/auth/logout");
      router.push("/login");
      router.refresh();
    } catch (error) {
      showToast.error(`Errore generico del server`, {
        duration: 4000,
        progress: false,
        position: "top-right",
        transition: "slideInUp",
        icon: "",
        sound: true,
      });
      setIsLoading(false);
    }
  };

  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Flex align={"center"} gap={"4"} className=" cursor-pointer">
          <Text>{username}</Text>
          <Half2Icon />
        </Flex>
      </HoverCard.Trigger>
      <HoverCard.Content maxWidth="180px" className="text-end">
        <Button variant="ghost" onClick={handleLogout} disabled={isLoading}>
          {isLoading ? <Spinner /> : "Esci"}
        </Button>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
