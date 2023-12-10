"use client";

import Character from "@/public/images/character.png";
import siteMetadata from "@/utils/siteMetaData";
import Image from "next/image";
import { useForm } from "react-hook-form";

export const metadata = {
  title: "Contact",
  description: `Contact me through the form on this page or send me an email to ${siteMetadata.email}`,
};

const contactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <article>
      <section className="flex flex-col items-center justify-center border-b-2 md:flex-row border-dark dark:border-light">
        <div
          className="items-center justify-center w-full md:w-2/5 md:h-[60vh] h-[40vh] md:border-r-2
 border-dark dark:border-light"
        >
          <Image
            src={Character}
            alt="Character happy"
            className="object-contain h-full"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="items-center justify-center w-full px-5 py-10 lg:px-16 md:w-3/5">
          <h2 className="mb-4 text-4xl font-semibold text-center sm:text-5xl text-dark dark:text-light lg:text-6xl">
            Let's Connect!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inline-block text-base sm:text-lg font-medium md:font-semibold text-dark dark:text-light">
              <span>Hello! My name is </span>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true, min: 5, maxLength: 30 })}
                className="p-0 mx-2 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-center placeholder:text-lg border-dark/50 dark:border-light/50 focus:border-gray"
              />
              <span>
                and I want to discuss a potential project. You can email me at{" "}
              </span>
              <input
                type="text"
                placeholder="email"
                {...register("email", { required: true })}
                className="p-0 mx-2 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-center placeholder:text-lg border-gray focus:border-gray"
              />
              <span>or reach out to me on </span>
              <input
                type="tel"
                placeholder="phone"
                {...register("phone", {})}
                className="p-0 mx-2 mt-4 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-center placeholder:text-lg border-gray focus:border-gray"
              />
              <p>Here are some details about my project: </p>
              <textarea
                {...register("message", {
                  required: true,
                  max: 5,
                  min: 5,
                  maxLength: 50,
                })}
                className="w-full p-0 mx-0 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-lg border-gray focus:border-gray"
              />
            </div>

            <input
              type="submit"
              className="inline-block px-6 py-2 mt-8 text-lg font-medium capitalize border-2 border-solid rounded cursor-pointer sm:text-xl sm:py-3 sm:px-8 border-dark dark:border-light dark:text-light"
            />
          </form>
        </div>
      </section>
    </article>
  );
};

export default contactPage;
