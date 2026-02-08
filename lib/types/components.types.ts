import z from "zod";
import { InputType } from "./utility.types";

export const loginSchema = z.object({
  email: z.string().min(1, "Email mancante").email("Email non valida"),
  password: z.string().min(1, "Password mancante"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export interface FormFieldProps {
  control: any;
  name: keyof LoginFormValues;
  label: string;
  placeholder?: string;
  type?: InputType;
  icon?: React.ComponentType<any>;
  isPassword?: boolean;
}
