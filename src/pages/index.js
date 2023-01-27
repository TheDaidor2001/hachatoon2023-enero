import Head from "next/head";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>FIT IA</title>
        <meta
          name="description"
          content="Aplicacición para poder saber que alimentos debes comer en tu dia a dia para poner lograr tu spbjetivos o para elegir una buna rutina de entrenamiento"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-full h-screen bg-[url('/inicio.jpg')] bg-cover bg-center">
          <div className="container mx-auto px-5 pt-10">
            <h1 className="text-7xl sm:text-9xl lg:text-9xl capitalize font-black text-white sm:pt-10">
              Mejora tu vida ahora
            </h1>
            <p className="mt-10 text-3xl font-bold text-black">
              ¿Quieres{" "}
              <span className="text-pink-600 underline">
                {" "}
                dar un cambio a tu vida
              </span>{" "}
              y no sabes como?
            </p>
            <button
              onClick={() => router.push('/choose-plan')}
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-center mr-2 mb-2 mt-20 w-56 sm:w-96"
            >
              Empezar
            </button>
          </div>
        </div>

        <div className="flex gap-10 justify-center w-full "></div>
      </main>
    </>
  );
}
