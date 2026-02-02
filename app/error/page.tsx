"use client";
import { api } from "@/lib/axios";
import { ApiResponse } from "@/lib/types/api.types";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function ErrorPage() {
  useEffect(() => {
    api.post<ApiResponse>("/auth/logout");
  }, []);

  return (
    <>
      <div>erro</div>
    </>
  );
}
