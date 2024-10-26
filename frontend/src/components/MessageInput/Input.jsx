import { GrAttachment } from "react-icons/gr";
import { IoSendSharp } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import EmojiPicker from 'emoji-picker-react';
import { useRef, useState } from "react";

// src/components/InputBox.jsx
const Input = () => {
    const ref = useRef(null);
    const [input, setInput] = useState('')
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [filePicker, setFilePicker] = useState(false);


    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }

    const [previewSrc, setPreviewSrc] = useState(null);

    const handleInputType = () => {
        ref.current.click();
    }

    const handleEmojiPicker = (emoji) => {
        setInput((input) => input + emoji.emoji)
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Only process image files
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewSrc(reader.result);
                };
                reader.readAsDataURL(file);
                setFilePicker(!filePicker);
            } else {
                alert('Please select an image file.');
            }
        }
    };


    return (
        <>
            {/* <div className="p-4 flex-1 items-center border-t">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 " onClick={() => handleInputType()}>
                        <GrAttachment className="w-4 h-4 text-black cursor-pointer" />
                    </div>
                    <input type="file" ref={ref} className="hidden" name="" id="" onChange={handleFileChange} />
                    <input type='text' id="default-search" value={input} className="block w-full p-2 ps-10 text-sm text-black rounded-lg focus:outline-none bg-[#dedef2] placeholder-black" placeholder="Message" onChange={(e) => setInput(e.target.value)} required />
                    {showEmojiPicker && (<div className="absolute end-8 bottom-7">
                        <EmojiPicker onEmojiClick={handleEmojiPicker} />
                    </div>)}
                    {filePicker && (<div className="absolute border rounded-lg bg-slate-400 w-96 h-96 start-8 bottom-2.5">
                        <img src={previewSrc} alt="Selected file" className="w-full h-80 object-cover rounded-lg" />
                        <IoSendSharp className="w-8 h-8 text-black absolute end-2.5 bottom-7 cursor-pointer" onClick={() => setFilePicker(!filePicker)} />
                    </div>)}
                    <MdOutlineEmojiEmotions className="w-4 h-4 text-black absolute end-8 bottom-2.5 cursor-pointer" onClick={toggleEmojiPicker} />
                    <IoSendSharp className="w-4 h-4 text-black absolute end-2.5 bottom-2.5" />
                </div>
            </div> */}
            <div className="bg-white border-t p-4 flex items-center w-full">
                <GrAttachment onClick={() => handleInputType()} className="w-5 h-5 text-gray-500 mr-4" />
                <input type="file" ref={ref} className="hidden" name="" id="" onChange={handleFileChange} />
                {filePicker && (<div className="absolute border rounded-lg bg-slate-400 w-96 h-96 start-8 bottom-2.5">
                    <img src={previewSrc} alt="Selected file" className="w-full h-80 object-cover rounded-lg" />
                    <IoSendSharp className="w-8 h-8 text-black absolute end-2.5 bottom-7 cursor-pointer" onClick={() => setFilePicker(!filePicker)} />
                </div>)}

                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Your message" className="flex-1 bg-gray-300 rounded-full px-4 py-2 focus:outline-none" />
                {showEmojiPicker && (<div className="absolute end-11 bottom-16">
                    <EmojiPicker onEmojiClick={handleEmojiPicker} />
                </div>)}
                <MdOutlineEmojiEmotions onClick={toggleEmojiPicker} className="w-5 h-5 text-gray-500 ml-4 mr-2" />
                <IoSendSharp className="w-5 h-5 text-indigo-500" />
            </div>
        </>
    );
};

export default Input;
