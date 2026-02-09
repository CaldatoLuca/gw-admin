"use client";
import { api } from "@/lib/axios";
import { LoginResponse } from "@/lib/types/api.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Spinner } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "../FormField";
import { LoginFormValues, loginSchema } from "@/lib/types/components.types";
import { showToast } from "nextjs-toast-notify";

export default function LoginForm() {
  const { handleSubmit, control } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    setIsLoading(true);
    try {
      const res = await api.post<LoginResponse>("/auth/login", values);

      if (res.data.success) {
        if (res.data.user.role === "ADMIN") {
          showToast.success(
            `Bentornato in GoldenView ${res.data.user.username}`,
            {
              duration: 4000,
              progress: false,
              position: "top-center",
              transition: "slideInUp",
              icon: "",
              sound: true,
            },
          );
          router.push("/dashboard");
        } else {
          showToast.warning(`Non hai i permessi per accedere`, {
            duration: 4000,
            progress: false,
            position: "top-right",
            transition: "slideInUp",
            icon: "",
            sound: true,
          });
        }
      }
    } catch (err) {
      showToast.error(`Errore generico del server`, {
        duration: 4000,
        progress: false,
        position: "top-right",
        transition: "slideInUp",
        icon: "",
        sound: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="4">
          <FormField
            control={control}
            name="email"
            label="Email"
            placeholder="email"
            type="email"
            icon={EnvelopeClosedIcon}
          />

          <FormField
            control={control}
            name="password"
            label="Password"
            placeholder="password"
            type="password"
            icon={LockClosedIcon}
            isPassword
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Accedi"}
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
