
export default function Card({ user, lastMessage, time, unreadCount }) {
    return (
        <>
            <div className="flex items-center p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out">
                {/* Profile Image */}
                <img
                    src={user.profilePic}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                />

                {/* Message Content */}
                <div className="flex-1 ml-4">
                    <div className="flex justify-between items-center">
                        {/* User Name */}
                        <h2 className="text-lg font-semibold text-gray-800 truncate max-w-[135px]">
                            {user.name}
                        </h2>

                        {/* Time */}
                        <span className="text-sm text-gray-500">{time}</span>
                    </div>

                    {/* Last Message */}
                    <p className="text-sm text-gray-600 truncate max-w-[200px]">
                        {lastMessage}
                    </p>
                </div>

                {/* Unread Message Count */}
                {unreadCount > 0 && (
                    <span className="ml-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {unreadCount}
                    </span>
                )}
            </div>
        </>
    )
}
