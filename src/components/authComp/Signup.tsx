import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/ConfigFirebase"
interface SignupFormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignupFormData>();

    const onSubmit = (data: SignupFormData) => {


        createUserWithEmailAndPassword(auth, data.email, data.password).then((usercred): any => {
            const user = usercred.user;
            console.log("User signed up:", user);
            // You can redirect or perform other actions after successful signup
        }).catch((error) => {
            console.error("Error signing up:", error);

        })






    };

    const password = watch("password");

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#0f172a]">
            <div className="border-2 border-gray-600 shadow-2xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-center text-gray-400 mb-6 text-2xl">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    {/* Username */}


                    {/* Email */}
                    <div className="mb-4">
                        <label className="text-gray-500 text-[19px] block mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            className="custom-input w-full"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="text-gray-500 text-[19px] block mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className="custom-input w-full"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>



                    {/* Submit Button */}
                    <button
                        type="submit"
                        className=" py-2 px-4 bg-[#111827] text-white font-medium text-sm rounded-md border border-gray-600 shadow-sm hover:border-blue-500 hover:bg-[#1f2937] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>
                    <div className="text-center text-gray-400 mt-4">
                        Don't have an account?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                    </div>


                </form>
            </div>
        </div>
    );
}
