import LoginForm from "@/components/forms/LoginForm";
import { Card, Heading, Separator } from "@radix-ui/themes";
import { Form } from "radix-ui";

export default function LoginPage() {
  return (
    <Card>
      <Heading>Accedi a GoldenView Admin</Heading>
      <Separator my={"3"} size={"4"} />
      <LoginForm />
    </Card>
  );
}
