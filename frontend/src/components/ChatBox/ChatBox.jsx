import ChatHeader from "../ChatHeader/ChatHeader"
import Input from "../MessageInput/Input";
import Chats from "../MessagesBox/Chats";

export default function ChatBox() {
    const user = {
        name: 'John Doe',
        profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
        isOnline: true, // Change to false for offline status
    };
    const currentUser = 'John Doe'; // Current logged-in user
    const messages = [
        { type: 'text', content: 'Hey, how are you?', sender: 'John Doe', time: '10:30 AM' },
        { type: 'text', content: 'I am good! How about you?', sender: 'Jane Smith', time: '10:32 AM' },
        { type: 'image', content: 'https://via.placeholder.com/300', sender: 'John Doe', time: '10:33 AM' },
        { type: 'video', content: 'https://www.w3schools.com/html/mov_bbb.mp4', sender: 'Jane Smith', time: '10:35 AM' },
        { type: 'document', content: '/path/to/document.pdf', sender: 'John Doe', time: '10:36 AM' },
        { type: 'text', content: 'What are you up to?', sender: 'Jane Smith', time: '10:37 AM' },
    ];
    return (
        <>
            <div className="h-[85vh] overflow-hidden bg-gray-100 flex-col w-3/4  hidden lg:flex justify-center items-center rounded-2xl">
                <ChatHeader user={user} />
                {/* Main Chat Area */}

                <Chats messages={messages} currentUser={currentUser} />
                <Input />
            </div>
        </>
    )
}
