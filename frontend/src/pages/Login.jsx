import { useState } from 'react'
import img from '../assets/9649925_7495.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        // console.log(email, password)

        try {
            const res = await axios.post('http://localhost:5000/login', { email, password });
            localStorage.setItem('user', JSON.stringify(res.data));
            // updateUser(res.data);
            navigate('/' + res.data.username);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
        // Handle login logic here
        console.log('Login submitted', { email, password })
    }

    return (
        <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-8">
                        <div className="text-left mb-8">
                            <span className="text-teal-500 text-2xl font-bold">L</span>
                            <span className="text-navy-900 text-2xl font-bold">andino</span>
                        </div>
                        <h2 className="text-2xl font-bold text-navy-900 mb-6">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Petter@gmail.com"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-teal-500 focus:bg-white focus:outline-none"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    name='password'
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-teal-500 focus:bg-white focus:outline-none"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-end justify-end mb-4">
                                {/* <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox text-teal-500"
                                        checked={rememberPassword}
                                        onChange={(e) => setRememberPassword(e.target.checked)}
                                    />
                                    <span className="ml-2 text-sm text-gray-600">Remember Password</span>
                                </label> */}
                                <Link to='/register' className="text-sm text-teal-500 hover:underline">Create Account</Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-teal-400 text-white rounded-lg px-4 py-3 font-bold hover:bg-navy-800 focus:outline-none focus:shadow-outline"
                                disabled={isLoading}
                            >
                                Login
                            </button>
                        </form>
                        {/* <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or Login with</span>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4 space-x-4">
                                <a href="#" className="text-gray-400 hover:text-teal-500"><FaTwitter size={24} /></a>
                                <a href="#" className="text-gray-400 hover:text-teal-500"><FaFacebook size={24} /></a>
                                <a href="#" className="text-gray-400 hover:text-teal-500"><FaGoogle size={24} /></a>
                            </div>
                        </div> */}
                    </div>
                    <div className="md:w-1/2 hidden md:block">
                        <img
                            src={img}
                            alt="Login illustration"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}