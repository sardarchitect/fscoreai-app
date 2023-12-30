import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <div className="w-64">
                <SideNav />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}