

const Chats = ({ messages, currentUser }) => {
    return (
        <div className="h-[75vh] p-4 overflow-y-auto scrollbar-hide space-y-4 w-full">
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`flex ${msg.sender === currentUser ? 'justify-end' : 'justify-start'
                        }`}
                >
                    <div
                        className={`max-w-[75%] p-3 rounded-lg shadow-md ${msg.sender === currentUser
                            ? 'bg-blue-500 text-white rounded-br-none'
                            : 'bg-gray-200 text-gray-800 rounded-bl-none'
                            }`}
                    >
                        {/* Render content based on message type */}
                        {msg.type === 'text' && <p className="text-sm">{msg.content}</p>}

                        {msg.type === 'image' && (
                            <img
                                src={msg.content}
                                alt="Shared media"
                                className="w-full h-auto rounded-lg mt-2"
                            />
                        )}

                        {msg.type === 'video' && (
                            <video controls className="w-full rounded-lg mt-2">
                                <source src={msg.content} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}

                        {msg.type === 'document' && (
                            <a
                                href={msg.content}
                                download
                                className="text-sm text-blue-300 underline mt-2 block"
                            >
                                Download Document
                            </a>
                        )}
                        <p className="text-sm">{msg.text}</p>
                        <span className={`text-xs $ block mt-1 text-right`}>
                            {msg.time}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;
