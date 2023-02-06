import Image from "next/image";


export default function Testimonial({img, title, text, name, job}) {
  return (
    <figure className="flex flex-col items-center justify-center m-8 text-center bg-white p-8 rounded-lg  ">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
      <h3 className="text-2xl font-semibold text-black ">
        {title}
      </h3>
      <p className="my-4 font-light text-gray-600  italic">
        {`"${text}"`}
      </p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
      <Image
        className="rounded-full w-9 h-9 object-cover"
        src={img}
        alt="profile picture"
        width={50}
        height={50}
      />
      <div className="space-y-0.5 font-medium dark:text-white text-left">
        <div>{name}</div>
        <div className="text-sm font-light text-gray-500 dark:text-gray-400">
          {job}
        </div>
      </div>
    </figcaption>
  </figure>
  )
}
