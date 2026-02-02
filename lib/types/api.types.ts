import { User } from "./schemas.types";

export interface ApiResponse {
  success: boolean;
}

export interface ApiError {
  message: string;
  status: number;
}

export interface LoginResponse extends ApiResponse {
  error?: ApiError;
  user: User;
}
