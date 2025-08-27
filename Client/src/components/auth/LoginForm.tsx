import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthRequestValidators } from "../../api_services/validators/auth/AuthValidator";
import type { AuthFormProps } from "../../types/props/auth_form_props/AuthFormProps";
import { useAuth } from "../../hooks/auth/useAuthHook";
import { jwtDecode } from "jwt-decode";
import type { JwtTokenClaims } from "../../types/auth/JwtTokenClaims";

export function LoginForm({ authApi }: AuthFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", { username, password });

    const validation = AuthRequestValidators(username, password);
    console.log("Validator result:", validation);
    if (!validation.succsess) {
      setError(validation.message ?? "Invalid data");
      return;
    }

    const response = await authApi.login(username, password);
    console.log("Login response:", response);
    console.log("success: ",response.success);
    console.log("data:" , response.data);
    if (response.success && response.data) {
      login(response.data);
      const claims = jwtDecode<JwtTokenClaims>(response.data);
      console.log("Decoded claims role:", claims.role);
      if (claims && claims.role) 
      {
        navigate(`/${claims.role}-dashboard`);
        console.log("Decoded role:", claims.role);
      }
    } else {
      setError(response.message);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-md border border-orange-300 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-4">
        Login
      </h1>
      <form onSubmit={submitForm} className="w-full space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {error && (
          <p className="text-md text-center text-red-700/80 font-medium">{error}</p>
        )}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold transition"
        >
          Log in
        </button>
      </form>
      <p className="text-center text-sm mt-4 text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-orange-500 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
