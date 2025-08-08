import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import addData from "../../utility/CustomFetchData/CustomFetchData";
import { ClipLoader } from "react-spinners";


interface SignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<SignupFormData>();

    const [error, setError] = useState<string | null>(null);

    const passwordValue = watch("password");
    const [loader, setLoader] = useState<boolean>(false);
    const navigate = useNavigate()
    const onSubmit = async (data: SignupFormData) => {
        setError("");
        setLoader(true);
        try {
            const body = {
                name: data.name,
                email: data.email,
                password: data.password,
            };

            const response = await addData({
                apiurl: `${import.meta.env.VITE_API_URL}api/auth/register`,
                body,
            });

            if (response) {

                localStorage.setItem("token", response.token)
                navigate("/")
            }
            reset()

        } catch (error) {
            setError("An error occurred during signup");
        } finally {
            setLoader(false)
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#0f172a]">
            <div className="border-2 border-gray-600 shadow-2xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-center text-gray-400 mb-6 text-2xl">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="mb-4">
                        <label className="text-gray-500 text-[19px] block mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", {
                                required: "Name is required",
                            })}
                            className="custom-input w-full"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

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

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label className="text-gray-500 text-[19px] block mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            {...register("confirmPassword", {
                                required: "Confirm password is required",
                                validate: (value) =>
                                    value === passwordValue || "Passwords do not match",
                            })}
                            className="custom-input w-full"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Firebase signup error */}
                    {error && (
                        <p className="text-red-500 text-center mb-4">{error}</p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="py-2 px-4 bg-[#111827] text-white font-medium text-sm rounded-md border border-gray-600 shadow-sm hover:border-blue-500 hover:bg-[#1f2937] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1"
                        disabled={loader}
                    >
                        {loader && <ClipLoader size={20} color="gray" />}   Sign Up
                    </button>

                    <div className="text-center text-gray-400 mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
