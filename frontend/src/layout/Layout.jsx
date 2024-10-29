import ChatBox from "../components/ChatBox/ChatBox"
import ChatList from "../components/ChatList/ChatList"
import Header from "../components/Header/Header"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Layout() {
    const { currentUser } = useContext(AuthContext);
    const params = useParams();
    console.log(params.username);

    // useEffect(() => {
    //     if (currentUser.username !== params.username) return alert("Not")
    // }, [currentUser, params.username])
    if (currentUser) {
        if ((currentUser.username !== params.username)) {
            return <Navigate to={`/${currentUser.username}`} />
        }
    }



    return (
        !currentUser ? <Navigate to='/' /> : <div className="w-full bg-slate-800 p-1 min-h-screen">
            <Header />
            <div className="w-full lg:flex justify-center items-center gap-1 mt-1">
                {/* <div className="lg:w-1/4 w-full bg-green-600 lg:h-[34.3rem] flex justify-center items-center rounded-2xl">
                <h1 className="text-7xl">Chat List</h1>
            </div> */}
                <ChatList />
                <ChatBox />
            </div>
        </div>
    );
}
