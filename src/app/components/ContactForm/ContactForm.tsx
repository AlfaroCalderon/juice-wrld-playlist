'use client'
import Image from "next/image"
import { useForm } from "react-hook-form";
export const ContactForm = () => {

    type Input = {
        name:string,
        lastname:string,
        age:number,
        email:string,
        comment:string
    }

    const {register, handleSubmit, watch, formState: {errors}} = useForm<Input>();

    const onsubmit = (data:Input) => {
        console.log(data);
    }

  return (
    <section className="mx-auto mt-10 mb-10 text-white w-full flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-2/3">
        <div className="flex flex-col justify-center items-center p-2 ">
            <form action="" onSubmit={handleSubmit(onsubmit)} className="w-full rounded-lg flex flex-col p-4 shadow-amber-500 shadow-xl/30" style={{background:"linear-gradient(168deg,rgba(0, 0, 0, 1) 1%, rgba(66, 51, 6, 1) 99%)"}}>
            <div className="flex flex-col py-2">
                <label htmlFor="name" className="font-bold">Name:</label>
                <input className="p-2 bg-white rounded-lg text-black placeholder:text-gray-400 mt-2" type="text" {...register('name', { required: 'Please insert your full name', minLength: { value: 2, message: 'The name should have at least 2 characters' }, maxLength: { value: 60, message: 'The name should be less than 60 characters' }})} id="name" placeholder="Insert your full name" />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="lastname" className="font-bold">Lastname:</label>
                <input className="p-2 bg-white rounded-lg text-black placeholder:text-gray-400 mt-2" type="text" {...register('lastname', { required: 'Please insert your full lastname', minLength: { value: 2, message: 'The lastname should have at least 2 characters' }, maxLength: { value: 60, message: 'The lastname should be less than 60 characters' }})} id="lastname" placeholder="Insert your full lastname"/>
                {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname.message}</span>}
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="age" className="font-bold">Age:</label>
                <input className="p-2 bg-white rounded-lg text-black placeholder:text-gray-400 mt-2" type="number" {...register('age', { required: 'Please insert your age', min: { value: 1, message: 'Age must be at least 1' }, max: { value: 100, message: 'Age must be at most 100' }, valueAsNumber: true })} id="age" placeholder="Insert your age"/>
                {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="email" className="font-bold">Email:</label>
                <input className="p-2 bg-white rounded-lg text-black placeholder:text-gray-400 mt-2" type="email" {...register('email', { required: 'Please insert your email address', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' }})} id="email" placeholder="Insert your email address" />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="comment" className="font-bold">Comment:</label>
                <textarea {...register('comment', {required: false,})} id="comment" placeholder="Insert your comment" rows={4} className="w-full bg-white rounded-lg text-black placeholder:text-gray-400 p-2 mt-2"/>
                {errors.comment && <span className="text-red-500 text-sm">{errors.comment.message}</span>}
            </div>
                <div className="flex justify-center">
                    <button
                        className="py-1.5 px-9 my-1 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-colors duration-200 cursor-pointer shadow-md hover:animate-pulse"
                        type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
        <div>
            <div className="flex flex-col justify-center items-center p-4">
                <h1 className="text-2xl font-bold mb-4">We Value Your Feedback</h1>
                <p className="text-lg">
                    Share your thoughts and comments with us! Your feedback helps us improve and bring you the best Juice WRLD experience. By submitting your comment, you'll also receive updates about new releases and exclusive news related to Juice WRLD.
                </p>
            </div>
            <div className="flex justify-center items-center">
            <Image className=" rounded-2xl shadow-amber-500 shadow-xl/30 " src='https://res.cloudinary.com/dxuntrrfo/image/upload/v1753472704/44752aad40a100c2e68c8674ba0c8f33_sccrww.avif' alt="Juice WRLD" width={370} height={370} priority/>
            </div>
        </div>
    </div>
    </section>
  )
}
