"use client";

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";


const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Projects', href: '/dashboard/projects' },
]
export default function NavLinks() {
    const pathname = usePathname()
    return (
        <>
            {
                links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx('flex h-[48px] items-center justify-center hover:bg-sky-100 hover:text-blue-600',
                            {'bg-sky-100 text-blue-600': pathname === link.href,},
                            )}>

                            <p>{link.name}</p>
                        </Link>
                    )
                })
            }
        </>

    )
}
