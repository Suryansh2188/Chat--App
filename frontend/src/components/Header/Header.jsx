import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function Header() {
    const navigate = useNavigate();
    const logout = async () => {
        try {
            await axios.post('http://localhost:5000/logout')
            localStorage.removeItem('user')
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <header>
                <div className='w-full bg-slate-600 flex justify-between items-center p-2 rounded-2xl'>
                    <div className='flex items-center gap-2 '>
                        <img src='/profile.png' className='w-14 h-14 rounded-full' alt="" />
                        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500'>Suryansh Soni</h1>
                    </div>
                    <button
                        className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300 transition-all duration-300 ease-in-out"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            </header>
        </>
    )
}
