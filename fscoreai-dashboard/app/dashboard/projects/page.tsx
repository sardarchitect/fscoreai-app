import { fetchProjects } from "@/app/lib/data"

export default async function Page() {
    const allProjects = await fetchProjects();
    console.log(allProjects);
    
    return(
        <div>
            Projects
        </div>
    )
}