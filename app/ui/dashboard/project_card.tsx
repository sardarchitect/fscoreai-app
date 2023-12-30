import Link from "next/link";

export default function ProjectCard({data}) {
    return(
        <Link href={`/dashboard/projects/${data.id}`}>
        <div className=" bg-blue-400 py-2 rounded w-40 h-30 justify-center p-4 hover:bg-blue-600 hover:cursor-pointer">
             <div className="text-white">{data.name}</div>
        </div>
        </Link>
    )
}