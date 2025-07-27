import { useForm, useFieldArray } from "react-hook-form";
import { MdOutlineDelete } from "react-icons/md";

export default function CreateProfile() {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            bio: "",
            links: {
                resume: "",
                email: "",
                blogs: "",
                linkedin: "",
                leetcode: "",
                x: "",
                github: "", // GitHub added here
            },
            skills: [{ value: "" }], // skills as array of objects
            experience: [],
            projects: [],
        },
    });

    const {
        fields: skillFields,
        append: appendSkill,
        remove: removeSkill,
    } = useFieldArray({ control, name: "skills" });

    const {
        fields: expFields,
        append: appendExp,
        remove: removeExp,
    } = useFieldArray({ control, name: "experience" });

    const {
        fields: projFields,
        append: appendProj,
        remove: removeProj,
    } = useFieldArray({ control, name: "projects" });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-900 text-gray-100 p-6 space-y-8 min-h-screen max-w-2xl mx-auto rounded-lg shadow-lg"
        >
            <h2 className="text-xl hover:underline transition-all duration-300 font-extrabold mb-4 text-center text-gray-500">
                Update or Create Profile
            </h2>

            {/* Name & Bio */}
            <div className="bg-gray-800 p-6 rounded-lg shadow space-y-4">
                <input
                    {...register("name")}
                    placeholder="Full Name"
                    className="custom-input w-full"
                    required
                />
                <textarea
                    {...register("bio")}
                    placeholder="Short Bio"
                    rows={3}
                    className="custom-input w-full"
                    required
                />
            </div>

            {/* Important Links */}
            <div className="bg-gray-800 p-6 rounded-lg shadow space-y-3">
                <h3 className="font-semibold text-lg text-gray-500 mb-1">
                    Important Links (Optional)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "resume",
                        "email",
                        "blogs",
                        "linkedin",
                        "leetcode",
                        "x",
                        "github",
                    ].map((link) => (
                        <input
                            key={link}
                            {...register(`links.${link}`)}
                            placeholder={link.charAt(0).toUpperCase() + link.slice(1)}
                            className="custom-input"
                        // optional by default, no required attribute
                        />
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-500">Skills</h3>
                {skillFields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2 mb-2">
                        <input
                            {...register(`skills.${index}.value`)}
                            placeholder={`Skill ${index + 1}`}
                            className="custom-input flex-1"
                            required
                            defaultValue={field.value}
                        />
                        <button
                            type="button"
                            onClick={() => removeSkill(index)}
                            className="inline-flex items-center justify-center px-4 py-2 rounded font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition bg-red-600 hover:bg-red-700 focus:ring-red-500"
                            aria-label="Remove"
                        >
                            <MdOutlineDelete className="text-lg" />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => appendSkill({ value: "" })}
                    className="py-2 px-4 bg-[#111827] text-white font-medium text-sm rounded-md border border-gray-600 shadow-sm hover:border-blue-500 hover:bg-[#1f2937] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Skill
                </button>
            </div>

            {/* Work Experience */}
            <div className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-500">Experience</h3>
                {expFields.map((field, index) => (
                    <div
                        key={field.id}
                        className="border border-gray-700 p-3 my-3 rounded space-y-2 bg-gray-900"
                    >
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                {...register(`experience.${index}.start`)}
                                placeholder="Start Date"
                                required
                                className="custom-input"
                                defaultValue={field.start}
                            />
                            <input
                                {...register(`experience.${index}.end`)}
                                placeholder="End Date"
                                required
                                className="custom-input"
                                defaultValue={field.end}
                            />
                        </div>
                        <input
                            {...register(`experience.${index}.role`)}
                            placeholder="Role & Company"
                            required
                            className="custom-input w-full"
                            defaultValue={field.role}
                        />
                        <textarea
                            {...register(`experience.${index}.details`)}
                            placeholder="Details"
                            rows={2}
                            className="custom-input w-full"
                            defaultValue={field.details}
                        />
                        <input
                            {...register(`experience.${index}.github`)}
                            placeholder="GitHub Repo (Optional)"
                            className="custom-input w-full"
                            defaultValue={field.github}
                        />
                        <input
                            {...register(`experience.${index}.live`)}
                            placeholder="Live URL (Optional)"
                            className="custom-input w-full"
                            defaultValue={field.live}
                        />
                        <button
                            type="button"
                            onClick={() => removeExp(index)}
                            className="inline-flex items-center justify-center px-4 py-2 rounded font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition bg-red-600 hover:bg-red-700 focus:ring-red-500"
                        >
                            <MdOutlineDelete className="text-lg" />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => appendExp({})}
                    className="py-2 px-4 bg-[#111827] text-white font-medium text-sm rounded-md border border-gray-600 shadow-sm hover:border-blue-500 hover:bg-[#1f2937] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Experience
                </button>
            </div>

            {/* Projects */}
            <div className="bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2 text-gray-500">Projects</h3>
                {projFields.map((field, index) => (
                    <div
                        key={field.id}
                        className="border border-gray-700 p-3 my-3 rounded bg-gray-900 space-y-2"
                    >
                        <input
                            {...register(`projects.${index}.role`)}
                            placeholder="Title & Tech Stack"
                            required
                            className="custom-input w-full"
                            defaultValue={field.role}
                        />
                        <textarea
                            {...register(`projects.${index}.details`)}
                            placeholder="Project Details"
                            rows={2}
                            required
                            className="custom-input w-full"
                            defaultValue={field.details}
                        />
                        <input
                            {...register(`projects.${index}.github`)}
                            placeholder="GitHub Repo"
                            className="custom-input w-full"
                            defaultValue={field.github}
                        />
                        <input
                            {...register(`projects.${index}.live`)}
                            placeholder="Live URL"
                            className="custom-input w-full"
                            defaultValue={field.live}
                        />
                        <button
                            type="button"
                            onClick={() => removeProj(index)}
                            className="inline-flex items-center justify-center px-4 py-2 rounded font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition bg-red-600 hover:bg-red-700 focus:ring-red-500"
                        >
                            <MdOutlineDelete className="text-lg" />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => appendProj({})}
                    className="py-2 px-4 bg-[#111827] text-white font-medium text-sm rounded-md border border-gray-600 shadow-sm hover:border-blue-500 hover:bg-[#1f2937] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Project
                </button>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="py-2 px-4 bg-[#111827] text-white font-medium text-sm rounded-md border border-gray-600 shadow-sm hover:border-blue-500 hover:bg-[#1f2937] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit Profile
                </button>
            </div>

            {/* Tailwind custom input styles */}

        </form>
    );
}
