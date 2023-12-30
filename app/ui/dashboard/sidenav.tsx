import NavLinks from './nav-links';


export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-slate-200 p-3">
      {/* Logo */}
      <h1 className='font-bold text-xl p-5 self-center'>Fscore AI</h1>

      {/* Links */}
      <div className='relative flex flex-col mt-10'>
        <NavLinks/>
      </div>
    </div>
  );
}