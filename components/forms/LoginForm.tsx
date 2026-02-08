"use client";
import { Form } from "radix-ui";
import FormField from "../FormField";
import { Box, Flex } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";

export default function LoginForm() {
  return (
    <Box>
      <Form.Root>
        <Flex direction={"column"} gap={"4"}>
          <FormField
            name="email"
            label="Email"
            placeholder="email"
            type="email"
            icon={EnvelopeClosedIcon}
            required={true}
          />

          <FormField
            name="password"
            label="Password"
            placeholder="password"
            type="password"
            icon={LockClosedIcon}
            required={true}
            isPassword={true}
          />

          <Form.Submit asChild>
            <Button>Accedi</Button>
          </Form.Submit>
        </Flex>
      </Form.Root>
    </Box>
  );
}
