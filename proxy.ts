import { NextRequest, NextResponse } from "next/server";
import { serverFetch } from "./lib/server-fetch";
import { LoginResponse } from "./lib/types/api.types";

export async function proxy(req: NextRequest) {
  const refreshToken = req.cookies.get("refreshToken");

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const { user } = await serverFetch<LoginResponse>("/users/me");

  if (user.role != "ADMIN") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
