import { fetchTasksByProjectId } from "@/app/lib/data"
import ProjectCard from "@/app/ui/dashboard/project_card";
import TaskRow from "@/app/ui/dashboard/task_row";

export default async function Page({params}: {params: {id: string}}) {
    const project_id = params.id
    
    const tasks = await fetchTasksByProjectId(project_id);

    return(
        <div>
            <h2 className="font-bold mb-10">{project_id}</h2>
            
            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">ID</th>
                        <th className="px-4 py-5 font-medium sm:pl-6">Task Name</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map((task)=>(
                        <tr key={task.id}>
                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">{task.id}</td>
                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">{task.name}</td>
                        </tr>
                    ))}    
                </tbody>
                
            </table>
        </div>
    )
}