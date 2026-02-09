import z from "zod";
import { InputType } from "./utility.types";

export const loginSchema = z.object({
  email: z
    .email("Formato email non valido")
    .min(1, "Email richiesta")
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(1, "Password richiesta")
    .min(8, "Inserisci almento 8 caratteri")
    .max(30, "Massimo 30 caratteri"),
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
