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
            <form action="" onSubmit={handleSubmit(onsubmit)} className="w-full rounded-lg flex flex-col p-4 shadow-amber-500 shadow-xl/30" style={{background:"linear-gradient(159deg,rgba(71, 68, 39, 1) 0%, rgba(224, 187, 63, 1) 100%)"}}>
                <div className="flex flex-col py-2">
                    <label htmlFor="name" className="font-bold">Name:</label>
                    <input className="p-2 bg-white rounded-lg placeholder:text-black mt-2" type="text" {...register('name')} id="name" placeholder="Insert your full name" />
                </div>
                <div className="flex flex-col py-2">
                    <label htmlFor="name" className="font-bold">Lastname:</label>
                    <input className="p-2 bg-white rounded-lg placeholder:text-black mt-2" type="text" {...register('lastname')} id="lastname" placeholder="Insert your full lastname" />
                </div>
                <div className="flex flex-col py-2">
                    <label htmlFor="age" className="font-bold">Age:</label>
                    <input className="p-2 bg-white rounded-lg placeholder:text-black mt-2" type="number" {...register('age')}  id="age" placeholder="Insert your age" />
                </div>
                <div className="flex flex-col py-2">
                    <label htmlFor="email" className="font-bold">Email:</label>
                    <input className="p-2 bg-white rounded-lg placeholder:text-black mt-2" type="email" {...register('email')}  id="email" placeholder="Insert your email address" />
                </div>
                <div className="flex flex-col py-2">
                    <label htmlFor="comment" className="font-bold">Comment:</label>
                    <textarea
                        {...register('comment')}
                        id="comment"
                        placeholder="Insert your comment"
                        rows={4}
                        className="w-full bg-white rounded-lg placeholder:text-black p-2 mt-2"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="py-1.5 px-9 my-1 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-colors duration-200 cursor-pointer shadow-md"
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
