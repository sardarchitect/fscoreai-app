import { fetchProjects } from "@/app/lib/data"
import ProjectCard from "@/app/ui/dashboard/project_card";
import Link from "next/link";

export default async function Page() {
    const allProjects = await fetchProjects();
    
    return(
        <div>
            <h2 className="font-bold mb-10">Projects</h2>
            <Link href="/dashboard/projects/create" className="bg-blue-400 rounded p-3 text-white">+Create Project</Link>
            <div className="flex gap-3 mt-10">
                {allProjects.map((project)=>(<ProjectCard key={project.id} data={project}/>))}
            </div>
        </div>
    )
}