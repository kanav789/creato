import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface FieldType {
    username: string;
    password: string;
}

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldType>();

    const onSubmit = (data: FieldType) => {
        console.log("Submitted:", data);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#0f172a]">
            <div className="border-2 border-gray-600 shadow-2xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-center text-gray-400 mb-6 text-2xl">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    {/* Username Field */}
                    <div className="mb-4">
                        <label className="text-gray-500 text-[19px] block mb-1">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            {...register("username", { required: "Username is required" })}
                            className="custom-input w-full"
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label className="text-gray-500 text-[19px] block mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
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
                        Login
                    </button>

                    <div className="text-center text-gray-400 mt-4">
                        Already have an account?{" "}
                        <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
