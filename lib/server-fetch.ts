import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function serverFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      cookie: cookieStore.toString(),
      ...options.headers,
    },
    cache: "no-store",
  });

  if (res.status == 401) {
    redirect("/login");
  }

  if (!res.ok) {
    redirect("/error");
  }

  return res.json();
}
