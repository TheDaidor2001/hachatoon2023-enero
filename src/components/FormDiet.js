import { getWorkout } from "@/services/workout";
import { useState } from "react";
import SuccessAlert from "./SuccessAlert";
import { motion } from "framer-motion";

export default function Form() {
  const [sex, setSex] = useState("");
  const [edad, setEdad] = useState("");
  const [workout, setWorkout] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);
  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sex === "") {
      return setError({
        type: "sex",
        msg: "El sexo es obligatorio",
      });
    }
    if (edad === "" || edad < 0) {
      return setError({
        type: "edad",
        msg: "La edad es obligatorio y no puede ser menor a 0",
      });
    }
    if (objetivo === "") {
      return setError({
        type: "objetivo",
        msg: "El objetivo es obligatorio",
      });
    }
    if (workout === "") {
      return setError({
        type: "workout",
        msg: "El tipo de entrenamiento es obligatorio",
      });
    }
    setPlan(null);
    setError({});
    setLoading(true);
    try {
      setSuccess(true);
      const data = await getWorkout(sex, edad, objetivo, workout);
      setPlan(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setSuccess(false);
    }
  };

  return (
    <>
      {success && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <SuccessAlert
            title={"Petición exitosa"}
            type={"Petición exitosa."}
            content={"Espere unos segundos para su resultado"}
          />
        </motion.div>
      )}
      {plan === null ? (
        <form
          noValidate
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex justify-between gap-5 mb-6">
            <div className="w-full">
              <label
                htmlFor="sex"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Sexo
              </label>
              <select
                id="sex"
                className={`${
                  error.type === "sex" ? "border-2 border-red-500" : ""
                } shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">-- Elige una Opción --</option>
                <option value="men">Hombre</option>
                <option value="women">Mujer</option>
                <option value="men">No se</option>
              </select>
              {error.type === "sex" && (
                <p className="text-red-500 text-sm">{error.msg}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="old"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Edad
              </label>
              <input
                id="old"
                type="text"
                placeholder="ej: 18"
                className={`${
                  error.type === "edad" ? "border-2 border-red-500" : ""
                } shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                value={edad}
                onChange={(e) => setEdad(+e.target.value)}
              />
              {error.type === "edad" && (
                <p className="text-red-500 text-sm">{error.msg}</p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="objetivo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Objetivo
            </label>
            <select
              id="objetivo"
              className={`${
                error.type === "objetivo" ? "border-2 border-red-500" : ""
              } shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
            >
              <option value="">-- Elige una Opción --</option>
              <option value="loose weight">Perder peso</option>
              <option value="gain muscles">Ganar masa muscular</option>
            </select>
            {error.type === "objetivo" && (
              <p className="text-red-500 text-sm">{error.msg}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="objetivo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Entrenamiento
            </label>
            <select
              id="objetivo"
              className={`${
                error.type === "workout" ? "border-2 border-red-500" : ""
              } shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              value={workout}
              onChange={(e) => setWorkout(e.target.value)}
            >
              <option value="">-- Elige una Opción --</option>
              <option value="gym">Gym</option>
              <option value="home">En casa</option>
            </select>
            {error.type === "workout" && (
              <p className="text-red-500 text-sm">{error.msg}</p>
            )}
          </div>
          {loading ? (
            <button
              disabled
              type="button"
              className=" pointer-events-none rounded-lg w-full px-3 py-2 text-lg font-medium text-center text-white ext-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </button>
          ) : (
            <button
              className=" rounded-lg w-full px-3 py-2 text-lg font-medium text-center text-white ext-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300"
              type="submit"
            >
              Recibir plan
            </button>
          )}
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h3 className="text-3xl font-bold uppercase mb-10 ">
            Tu rutina personalizada es:
          </h3>
          <button
            onClick={() => setPlan(null)}
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 w-56 sm:w-96"
          >
            Volver
          </button>
          <div className="whitespace-pre-wrap text-md">{plan}</div>
        </motion.div>
      )}
    </>
  );
}
