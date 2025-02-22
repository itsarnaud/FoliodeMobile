import { User } from "@/app/interface/user";
import { decodeToken } from "./jwt-decode";
import { useAuth } from "../context/AuthContext";

export function useUserData(): User | null {
  const { authState } = useAuth();
  
  if (!authState?.token) {
    return null;
  }

  return decodeToken(authState.token);
}