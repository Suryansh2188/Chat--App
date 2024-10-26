import Card from "../Card/Card";
import Search from '../Search/Search'
export default function ChatList() {
    const chatList = [
        {
            id: 1,
            user: {
                name: 'John Doe',
                profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
            },
            lastMessage: 'Hey, how are you doing today? It’s been a long time...',
            time: '10:30 AM',
            unreadCount: 2,
        },
        {
            id: 2,
            user: {
                name: 'Jane Smith',
                profilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            lastMessage: 'Sure, I’ll send the document by EOD.',
            time: '9:45 AM',
            unreadCount: 0,
        },
        {
            id: 3,
            user: {
                name: 'Michael Johnson',
                profilePic: 'https://randomuser.me/api/portraits/men/35.jpg',
            },
            lastMessage: 'Are we still on for the meeting?',
            time: 'Yesterday',
            unreadCount: 1,
        },
        {
            id: 4,
            user: {
                name: 'Emily Davis',
                profilePic: 'https://randomuser.me/api/portraits/women/65.jpg',
            },
            lastMessage: 'Can you review my code?',
            time: '8:15 PM',
            unreadCount: 0,
        },
        {
            id: 5,
            user: {
                name: 'Chris Evans',
                profilePic: 'https://randomuser.me/api/portraits/men/22.jpg',
            },
            lastMessage: 'Got it! Thanks.',
            time: '12:00 PM',
            unreadCount: 3,
        },
        {
            id: 6,
            user: {
                name: 'Sophia Miller',
                profilePic: 'https://randomuser.me/api/portraits/women/28.jpg',
            },
            lastMessage: 'Let’s catch up this weekend!',
            time: 'Saturday',
            unreadCount: 5,
        },
        {
            id: 7,
            user: {
                name: 'Daniel Wilson',
                profilePic: 'https://randomuser.me/api/portraits/men/18.jpg',
            },
            lastMessage: 'Did you receive my email?',
            time: '3:20 PM',
            unreadCount: 0,
        },
        {
            id: 8,
            user: {
                name: 'Olivia Brown',
                profilePic: 'https://randomuser.me/api/portraits/women/40.jpg',
            },
            lastMessage: 'Happy Birthday! 🎉',
            time: 'Friday',
            unreadCount: 1,
        },
        {
            id: 9,
            user: {
                name: 'David Lee',
                profilePic: 'https://randomuser.me/api/portraits/men/56.jpg',
            },
            lastMessage: 'See you at the gym later?',
            time: '1:00 PM',
            unreadCount: 2,
        },
        {
            id: 10,
            user: {
                name: 'Emma Garcia',
                profilePic: 'https://randomuser.me/api/portraits/women/55.jpg',
            },
            lastMessage: 'Great! Let’s proceed.',
            time: '2 days ago',
            unreadCount: 0,
        },
        {
            id: 11,
            user: {
                name: 'Liam Martinez',
                profilePic: 'https://randomuser.me/api/portraits/men/50.jpg',
            },
            lastMessage: 'Can we reschedule the meeting?',
            time: '5:30 AM',
            unreadCount: 4,
        },
        {
            id: 12,
            user: {
                name: 'Ava Thompson',
                profilePic: 'https://randomuser.me/api/portraits/women/60.jpg',
            },
            lastMessage: 'I’ll bring the snacks. 🍪',
            time: '10 minutes ago',
            unreadCount: 0,
        }
    ];


    return (
        <>
            <div className="h-[85vh] bg-gray-50 p-3 rounded-2xl overflow-y-hidden">
                <h1 className="text-2xl font-bold mb-4">Chats</h1>
                <Search />
                <div className="space-y-4 mt-3">
                    {chatList.map((chat) => (
                        <Card
                            key={chat.id}
                            user={chat.user}
                            lastMessage={chat.lastMessage}
                            time={chat.time}
                            unreadCount={chat.unreadCount}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
