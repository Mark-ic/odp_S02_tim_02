import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthRequestValidators } from "../../api_services/validators/auth/AuthValidator";
import type { AuthFormProps } from "../../types/props/auth_form_props/AuthFormProps";
import { useAuth } from "../../hooks/auth/useAuthHook";

export function RegistracijaForma({ authApi }: AuthFormProps) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = AuthRequestValidators(username, password, phone, role);
    if (!validation.succsess) {
      setError(validation.message ?? "Neispravni podaci");
      return;
    }

    const response = await authApi.register(username, phone, role, password);

    if (response.success && response.data) {
      login(response.data);
    } else {
      setError(response.message);
      setUsername("");
      setPassword("");
      setPhone("");
    }
  };

  return (
    <div className="bg-white/30 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-md border border-orange-300 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-4">
        Registracija
      </h1>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input
          type="text"
          placeholder="Korisničko ime"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {error && (
          <p className="text-md text-center text-red-700/80 font-medium">{error}</p>
        )}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold transition"
        >
          Registruj se
        </button>
      </form>
      <p className="text-center text-sm mt-4 text-gray-600">
        Već imate nalog?{" "}
        <Link to="/login" className="text-orange-500 hover:underline">
          Prijavite se
        </Link>
      </p>
    </div>
  );
}
