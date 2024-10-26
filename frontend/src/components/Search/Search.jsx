import { useState } from "react";
import { Search } from "react-feather"; // Install react-feather if not installed

function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Query:", searchQuery);
        // Add your search logic here
    };

    return (
        <div className=" flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl text-center">
                

                {/* Search Component */}
                <form onSubmit={handleSearch} className="relative flex-grow max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 lg:py-2 text-gray-700 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-300"
                    />
                    <button
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
                    >
                        <Search className="w-6 h-6" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchPage;
