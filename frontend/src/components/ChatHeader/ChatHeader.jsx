import { FiMoreVertical } from 'react-icons/fi'; // Importing three-dot menu icon

export default function ChatHeader({ user }) {
    return (
        <>
            <div className="w-full  flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200">
                {/* User Info */}
                <div className="flex items-center space-x-4">
                    {/* Profile Photo */}
                    <img
                        src={user.profilePic}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />

                    {/* User Name and Status */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 truncate max-w-[200px]">
                            {user.name}
                        </h2>
                        <span
                            className={`text-sm flex items-center ${user.isOnline ? 'text-green-500' : 'text-gray-400'
                                }`}
                        >
                            <span
                                className={`w-2.5 h-2.5 rounded-full mr-2 ${user.isOnline ? 'bg-green-500' : 'bg-gray-400'
                                    }`}
                            ></span>
                            {user.isOnline ? 'Online' : 'Offline'}
                        </span>
                    </div>
                </div>

                {/* Three-Dot Menu Button */}
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <FiMoreVertical size={24} />
                </button>
            </div>
        </>
    )
}
