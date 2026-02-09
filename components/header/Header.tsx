import { Flex, Heading } from "@radix-ui/themes";
import { serverFetch } from "@/lib/server-fetch";
import { LoginResponse } from "@/lib/types/api.types";
import { UserMenu } from "./UserMenu";
import Link from "next/link";

export default async function DashboardHeader() {
  const { user } = await serverFetch<LoginResponse>("/users/me");

  return (
    <header className="header-box">
      <Flex justify="between" align="center">
        <Link href={"/dashboard"}>
          <Heading size={"3"} color="iris">
            GoldenView Admin
          </Heading>
        </Link>
        <UserMenu username={user.username} />
      </Flex>
    </header>
  );
}
