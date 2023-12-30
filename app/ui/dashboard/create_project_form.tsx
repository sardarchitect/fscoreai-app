"use client";

import { createProject } from "@/app/lib/actions";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function CreateProjectForm() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createProject, initialState);
    console.log(state);

    return (
        <div className="bg-slate-400 h-screen flex" >
            <h2>Create Project</h2>

            <form action={dispatch} className="mt-10">
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">Project Name</label>
                    <input placeholder="Enter project name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <Link href="/dashboard/projects">Cancel</Link>
                <button type="submit" className="w-full bg-blue-500 rounded text-white py-2 px-4 hover:bg-blue-600">Add Project</button>
                <div aria-live="polite" aria-atomic="true">
                    {state.message ? (
                        <p className="mt-2 text-sm text-red-500">{state.message}</p>
                    ) : null}
                </div>
            </form>

        </div>

    )

}