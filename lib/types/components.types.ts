import { ComponentType } from "react";
import type { InputType } from "./utility.types";

export interface FormFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type?: InputType;
  icon?: ComponentType<{ width?: number; height?: number }>;
  required?: boolean;
  isPassword?: boolean;
}
