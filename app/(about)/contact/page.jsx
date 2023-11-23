import ContactForm from '@/components/elements/contactForm';
import Character from "@/public/images/character.png";
import siteMetadata from '@/utils/siteMetaData';
import Image from 'next/image';

export const metadata = {
  title: "Contact",
  description: `Contact me through the form on this page or send me an email to ${siteMetadata.email}`,
};

const contactPage = () => {
  return (
    <article>
      <section className="flex flex-col items-center justify-center border-b-2 md:flex-row border-dark">
        <div
          className="items-center justify-center w-full md:w-2/5 md:h-[60vh] h-[40vh] border-r-2
 border-dark"
        >
          <Image
            src={Character}
            alt='Character happy'
            className="object-contain h-full"
          />
        </div>
        <div className="items-center justify-center w-full px-5 py-10 lg:px-16 md:w-3/5">
          <h2 className="mb-4 text-4xl font-semibold text-center sm:text-5xl text-dark lg:text-5xl">
          Let's Connect!
          </h2>
          <ContactForm />
        </div>
      </section>
    </article>
  )
}

export default contactPage
