import Link from "next/link";

export default function Footer() {

    const today = new Date()
  return (
    <footer className="p-4 rounded-t-lg shadow md:p-6 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600">
      <div className="text-sm text-white text-center">
        {today.getFullYear()}{" "}
        <Link href="https://flowbite.com/" className="hover:underline">
          FIT IA
        </Link>
        . Todos los derechos reservados.
        <p>Hecho con ❤️ y moviendo las 🤚</p>
      </div>
    </footer>
  );
}
