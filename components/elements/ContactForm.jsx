"use client"

import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  // console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inline-block text-lg font-semibold">
        <span>Hello! My name is </span>
        <input type="text" placeholder="name" {...register("name", {required: true, min: 5, maxLength: 30})} className='p-0 mx-2 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-center placeholder:text-lg border-gray focus:border-gray' />
        <span>and I want to discuss a potential project. You can email me at </span>
        <input type="text" placeholder="email" {...register("email", {required: true})} className='p-0 mx-2 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-center placeholder:text-lg border-gray focus:border-gray' />
        <span>or reach out to me on </span>
        <input type="tel" placeholder="phone" {...register("phone", {})} className='p-0 mx-2 mt-4 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-center placeholder:text-lg border-gray focus:border-gray' />
        <p>Here are some details about my project: </p>
        <textarea {...register("message", {required: true, max: 5, min: 5, maxLength: 50})} className='w-full p-0 mx-0 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-lg border-gray focus:border-gray' />
      </div>

      <input type="submit" className="inline-block px-6 py-2 mt-8 text-lg font-medium capitalize border-2 border-solid rounded cursor-pointer sm:text-xl sm:py-3 sm:px-8 border-dark" />
    </form>
  )
}

export default ContactForm;
