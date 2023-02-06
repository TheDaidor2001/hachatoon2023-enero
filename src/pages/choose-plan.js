import Image from "next/image";
import Link from "next/link";
import workout from "../../public/gym-medal-necklace-svgrepo-com.svg";
import diet from "../../public/diet-calendar-svgrepo-com.svg";
import CardChoose from "@/components/CardChoose";
import Head from "next/head";
import Footer from "@/components/Footer";
const texto = `Aquí podras obtener un plan alimenticio para toda una semana.
Podrás elegir cual es el objetivo que deseas alcanzar y
personalizarlo. Esto es orientativo así que puedes tomarlo como
una referencia para poder hacer una dieta tu mismo.`;

export default function ChoosePlan() {
  return (
    <>
      <Head>
        <title>FIT IA - Elige un plan</title>
        <meta
          name="description"
          content="Elige un plan de entrenamiento o una dieta personalizada"
        />
      </Head>
      <main className="container mx-auto">
        <h1 className=" font-black text-transparent lg:text-8xl text-center bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mt-10 uppercase text-7xl">Elige tu plan</h1>
        <p className="text-center text-gray-600 mt-10 text-xl underline">Puedes elegir entre entrenamiento personalizado o una dieta personalizada</p>
        <section className="flex flex-col lg:flex-row gap-20 justify-center mt-10 p-10 mb-10">
          <CardChoose
            title={"Entrenamiento personalizado"}
            content={`Aquí podrás obtener un plan de entrenamiento para toda la semana
            dependiendo de los dias que puedas y desees entrenar. Puedes
            personalizarlo dependiendo de tus carácterísticas y objetivos que
            desees alcanzar.`}
            img={workout}
            slogan={'¿Estás listo?'}
            show={true}
            url="/plan/workout"
          />

          <CardChoose
            title={"Dieta personalizada individual"}
            content={`Aquí podras obtener un plan alimenticio para toda una semana.
              Podrás elegir cual es el objetivo que deseas alcanzar y
              personalizarlo. Esto es orientativo así que puedes tomarlo como
              una referencia para poder hacer una dieta tu mismo.`}
            img={diet}
            slogan={'¿A qué esperas?'}  
            show={true}     
            url="/plan/diet"       
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
