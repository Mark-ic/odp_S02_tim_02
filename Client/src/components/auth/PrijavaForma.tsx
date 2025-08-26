import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthRequestValidators } from "../../api_services/validators/auth/AuthValidator";
import type { AuthFormProps } from "../../types/props/auth_form_props/AuthFormProps";
import { useAuth } from "../../hooks/auth/useAuthHook";

export function PrijavaForma({ authApi }: AuthFormProps) {
  const [korisnickoIme, setKorisnickoIme] = useState("");
  const [lozinka, setLozinka] = useState("");
  const [greska, setGreska] = useState("");
  const { login } = useAuth();

  const podnesiFormu = async (e: React.FormEvent) => {
    e.preventDefault();

    const validacija = AuthRequestValidators(korisnickoIme, lozinka);
    if (!validacija.succsess) {
      setGreska(validacija.message ?? "Neispravni podaci");
      return;
    }

    const odgovor = await authApi.login(korisnickoIme, lozinka);
    if (odgovor.success && odgovor.data) {
      login(odgovor.data);
    } else {
      setGreska(odgovor.message);
      setKorisnickoIme("");
      setLozinka("");
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-md border border-orange-300 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-4">
        Prijava
      </h1>
      <form onSubmit={podnesiFormu} className="w-full space-y-4">
        <input
          type="text"
          placeholder="Korisničko ime"
          value={korisnickoIme}
          onChange={(e) => setKorisnickoIme(e.target.value)}
          className="w-full bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Lozinka"
          value={lozinka}
          onChange={(e) => setLozinka(e.target.value)}
          className="w-full bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {greska && (
          <p className="text-md text-center text-red-700/80 font-medium">{greska}</p>
        )}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold transition"
        >
          Prijavi se
        </button>
      </form>
      <p className="text-center text-sm mt-4 text-gray-600">
        Nemate nalog?{" "}
        <Link to="/register" className="text-orange-500 hover:underline">
          Registrujte se
        </Link>
      </p>
    </div>
  );
}
