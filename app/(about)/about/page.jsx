import Image from "next/image";
import Character from "@/public/images/character.png";
import { techStack } from "@/utils";
import Link from "next/link";

const AboutPage = () => {
  return (
    <article>
      <section className="flex flex-col items-center justify-center border-b-2 md:flex-row border-dark">
        <div
          className="items-center justify-center w-full md:w-1/2 md:h-[60vh] h-[40vh] border-r-2
 border-dark"
        >
          <Image
            src={Character}
            alt='Welcoming character'
            className="object-contain h-full"
          />
        </div>
        <div className="items-center justify-center w-full px-5 py-10 lg:px-16 md:w-1/2">
          <h2 className="mb-4 text-4xl font-semibold text-center sm:text-5xl text-dark lg:text-5xl">
            Dream Big, Work Hard, Achieve More!
          </h2>
          <p className="font-medium capitalize font-inter text-dark">
            This Mantra Drives My Work As A Passionate Freelancer. I Blend
            Innovative Technology With Timeless Design For Captivating Digital
            Experiences. Inspired By Nature And Literature, I'm A Perpetual
            Learner Embracing Challenges. With Each Project, I Aim To Leave A
            Lasting Impact—One Pixel At A Time.
          </p>
        </div>
      </section>
      
      <section className="max-w-5xl mx-5 mt-20 md:mx-10 lg:mx-auto">
        <p className="mb-8 text-2xl font-semibold text-accent sm:text-4xl">
          I'm comfortable in...
        </p>
        <ul className="flex flex-wrap justify-center gap-6 text-dark">
          {techStack.map((tech) => (
            <li
              className="px-8 py-4 text-2xl font-semibold capitalize transition-all duration-200 ease-in-out border-2 border-solid rounded border-dark hover:scale-105"
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
      
      <section className="px-5 pt-8 mt-16 font-semibold border-t-2 border-solid border-dark md:px-10">
        <div className="max-w-5xl mx-auto text-2xl text-center text-dark">
          {"Have a project in mind? Reach out to me 📞 from "}
          <Link href="/contact" className="underline cursor-pointer">
            here
          </Link>
          {" and let's make it happen."}
        </div>
      </section>
    </article>
  );
};

export default AboutPage;
