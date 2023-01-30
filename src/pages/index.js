import Head from "next/head";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import Image from "next/image";
import CardChoose from "@/components/CardChoose";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

import workout from "../../public/gym-medal-necklace-svgrepo-com.svg";
import diet from "../../public/diet-calendar-svgrepo-com.svg";
import food from "../../public/food.png";
import woman from "../../public/woman.png"
import t1 from "../../public/t1.jpg"
import t2 from "../../public/t2.jpg"
import t3 from "../../public/t3.jpg"
import t4 from "../../public/t4.jpg"
import t5 from "../../public/t5.jpg"
import t6 from "../../public/t6.jpg"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

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
        <section className="w-full h-screen bg-[url('/inicio.png')] bg-cover bg-center flex justify-center items-center">
          <div className="container mx-auto px-7 lg:px-40">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl capitalize font-black text-white sm:pt-10 xl:text-[150px] 2xl:text-[200px]">
              Mejora tu vida ahora
            </h1>
            <p className="mt-10 text-3xl font-bold text-white">
              ¿Quieres{" "}
              <span className="text-pink-600 underline">
                {" "}
                dar un cambio a tu vida
              </span>{" "}
              y no sabes como?
            </p>
            <button
              onClick={() => router.push("/choose-plan")}
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-center mr-2 mb-2 mt-20 w-56 sm:w-96"
            >
              Empezar
            </button>
          </div>
        </section>
        <section className="container h-auto mx-auto my-20 flex flex-col md:flex-row justify-around px-10 md:p-0">
          <CardChoose
            title={"Entrenamiento personalizado"}
            content={`¿Te gustaria poder tener una rutina de ejercicio personalizada? Pues este es tu plan. Consigue tu plan personalizado en tan solo 5 o 10 minutos`}
            img={workout}
            slogan={"¿Estás listo?"}
          />
          <CardChoose
            title={"Dieta personalizada individual"}
            content={`Si quieres perder peso o deseas tambien ganar más masa muscular este es tu plan. Con el podrás obtener un plan de alimentación acorde a tus circustancias y tus deseos.`}
            img={diet}
            slogan={"¿A qué esperas?"}
          />
        </section>
        <section className=" container mx-auto  ">
          <div className="flex flex-col-reverse lg:flex-row justify-around items-center">
            <div className="border-4 border-pink-700 p-7 m-5 max-w-2xl max-h-auto ">
              <h2 className="text-4xl lg:text-6xl uppercase font-light">
                ¿Estás listo <br />
                <span className="font-black">para el cambio</span>?
              </h2>
              <p className="mt-5 font-semibold text-sm lg:text-lg text-gray-700">
                El cambio físico es una de las mejores inversiones que puedes
                hacer en ti mismo. Empieza hoy, haz un pequeño paso cada día y
                verás los resultados a largo plazo. Tú puedes hacerlo, ¡sé el
                dueño de tu cuerpo y tu salud!
              </p>
            </div>
            <Image
              className="hidden lg:flex lg:w-1/3"
              src={food}
              alt="Imagen de comida y dieta"
              width={500}
              height={400}
            />
          </div>
        </section>
        <section className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 flex mb-10">
          <div className="container justify-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            <Testimonial 
              title={"Buenas rutinas y dietas"}
              text={"Si no tienes idea de nutricion o ejercicios esta será una buena alternativa para ti"}
              name={"Alicia Ramirez"}
              job={"Nutricionista"}
              img={t1}
            />
            <Testimonial 
              title={"Excelente herramienta"}
              text={"Me ha servido mucho a la hora de poder asignar dietas dependiendo de la persona"}
              name={"Ana Castillo"}
              job={"Nutricionista"}
              img={t2}
            />
            <Testimonial 
              title={"Me ha encantado"}
              text={"Desde que conozco esta herramienta me a ayudado mucho para enseñar a otros diferentes ejercicios"}
              name={"Juan Pérez"}
              job={"Monitor de gimnasio"}
              img={t3}
            />
            <Testimonial 
              title={"Útil para principiantes"}
              text={"Si todavia no tienes mucha idea de nutricion o de ejercicios esta es tu herramienta"}
              name={"Alfonso Castro"}
              job={"Culturista"}
              img={t4}
            />
            <Testimonial 
              title={"Buenos resultados"}
              text={"Si deseas ver resultados sin necesidad de un entrenador personal debes utilizar esta app"}
              name={"Álvaro Alonso"}
              job={"Deportista"}
              img={t5}
            />
            <Testimonial 
              title={"Muy sencilla de utlizar"}
              text={"Es muy facil de utlizar y te da tanto rutinas de deporte como una buena dieta equilibrada. Es muy completa"}
              name={"Marta Lopez"}
              job={"Deportista"}
              img={t6}
            />
          </div>
        </section>
        <section className=" container mx-auto p-5">
          <div className="flex flex-col-reverse lg:flex-row justify-between">
          <Image
              className="hidden lg:flex lg:w-2/4"
              src={woman}
              alt="Imagen de comida y dieta"
              width={500}
              height={400}
            />
            <div className="p-8 max-w-2xl max-h-auto xl:mt-24">
              <h2 className="text-4xl lg:text-6xl uppercase font-black">¡No pierdas más tiempo y empieza ya!</h2>
              <p className="mt-5 font-semibold text-sm lg:text-lg text-gray-700">
                Cada segundo cuenta, asi que empieza ahora ese cambio que tanto tiempo llevas deseando hacer.
              </p>
              <button
              onClick={() => router.push("/choose-plan")}
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-center mr-2 mb-2 mt-10 w-56 sm:w-96"
            >
              Empezar
            </button>
            </div>
            
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
