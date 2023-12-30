import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-slate-500 flex h-screen items-center justify-center">
      <div className="bg-white rounded p-8 shadow-md w-96">
        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>

        <form action="#">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
          </div>

          <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
          </div>

          <button className="w-full bg-blue-500 rounded text-white py-2 px-4 hover:bg-blue-600" type="submit">Login</button>

        </form>
        <p className="text-center mt-4">Don't have an account? <Link href="/dashboard">Sign Up</Link></p>
      </div>
    </div>
  )
}
