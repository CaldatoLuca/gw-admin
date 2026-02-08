"use client";
import { Form } from "radix-ui";
import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { FormFieldProps } from "@/lib/types/components.types";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { InputType } from "@/lib/types/utility.types";

export default function FormField({
  name,
  label,
  placeholder,
  type,
  icon: Icon,
  required = false,
  isPassword = false,
}: FormFieldProps) {
  const [inputType, setInputType] = useState(type);

  const togglePassword = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <Form.Field name={name}>
      <Box className="mb-3">
        <Flex justify={"between"} align={"center"}>
          <Form.Label>{label}</Form.Label>
          {required && (
            <Form.Message asChild match="valueMissing">
              <Text size={"2"} color="pink">
                {label} mancante
              </Text>
            </Form.Message>
          )}
          <Form.Message match="typeMismatch" asChild>
            <Text size={"2"} color="pink">
              Inserisci una {label} valida
            </Text>
          </Form.Message>
        </Flex>
      </Box>

      <Form.Control asChild>
        <TextField.Root
          type={inputType}
          placeholder={placeholder}
          required={required}
        >
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
                {inputType === "password" ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </Button>
            </TextField.Slot>
          )}
        </TextField.Root>
      </Form.Control>
    </Form.Field>
  );
}
