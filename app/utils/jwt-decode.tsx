import { jwtDecode } from "jwt-decode";
import { User } from "@/app/interface/user"; 

export const decodeToken = (token: string): User => {
    return jwtDecode<User>(token);
}