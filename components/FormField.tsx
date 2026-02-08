"use client";
import { FormFieldProps } from "@/lib/types/components.types";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { Controller } from "react-hook-form";

export default function FormField({
  control,
  name,
  label,
  placeholder,
  type = "text",
  icon: Icon,
  isPassword = false,
}: FormFieldProps) {
  const [inputType, setInputType] = useState(type);

  const togglePassword = () =>
    setInputType((prev) => (prev === "password" ? "text" : "password"));

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Box>
          <Box className="mb-3">
            <Flex justify="between" align="center">
              <label>{label}</label>
              {fieldState.error && (
                <Text size="2" color="pink">
                  {fieldState.error.message}
                </Text>
              )}
            </Flex>
          </Box>

          <TextField.Root type={inputType} placeholder={placeholder} {...field}>
            {Icon && (
              <TextField.Slot>
                <Icon width={16} height={16} />
              </TextField.Slot>
            )}
            {isPassword && (
              <TextField.Slot>
                <Button
                  variant="ghost"
                  type="button"
                  onClick={togglePassword}
                  aria-label="Toggle password visibility"
                >
                  {inputType === "password" ? (
                    <EyeClosedIcon />
                  ) : (
                    <EyeOpenIcon />
                  )}
                </Button>
              </TextField.Slot>
            )}
          </TextField.Root>
        </Box>
      )}
    />
  );
}
