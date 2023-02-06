
import Head from "next/head";
import { useState } from "react";
import Form from "@/components/Form";



export default function Workout(){

  return (
    <>
      <Head>
        <title>FIT IA - Dieta personalizada individual</title>
        <meta
          name="description"
          content="Selecciona todos los campos para poder recibir una dieta personalizada individual"
        />
      </Head>
      <main className="container mx-auto">
        <h1 className=" font-black text-transparent lg:text-8xl text-center bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mt-10 uppercase text-5xl">
          Personaliza tu Dieta
        </h1>
        <p className="text-center text-gray-600 mt-10 text-xl underline">
          Rellene todos los campos para poder acceder a una dieta personalizada individual
        </p>

        <section className="px-20 max-w-xl mx-auto mt-20">
          <Form/>
        </section>
        
      </main>
    </>
  );
}




