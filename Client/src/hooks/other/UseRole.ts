import { jwtDecode } from "jwt-decode";
import { ReadValueByKey } from "../../helpers/local_storage";
import type { JwtTokenClaims } from "../../types/auth/JwtTokenClaims";

export function useRole(): "user" | "admin" | null {
  const token = ReadValueByKey("authToken");
  if (!token) return null;

  try {
    const { role } = jwtDecode<JwtTokenClaims>(token);
    return role === "admin" ? "admin" : "user";
  } catch {
    return null;
  }
}
