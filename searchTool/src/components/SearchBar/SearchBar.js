import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [text, setText] = useState([]);

  const handleFilter = (event) => {
    const searchText = event.target.value
      .toLowerCase()
      .normalize("NFKD")
      .split(" "); // Split search text by spaces into an array, allowing or individual words to be processed independently during filtering.

    setText(searchText.join(" ")); // Join search text with spaces for display.

    const newFilter = data.filter((value) => {
      const normalizedTitle = value.title.toLowerCase().normalize("NFKD");

      // Check if each word in the search text is included in the title.
      return searchText.every((word) => normalizedTitle.includes(word));
    });

    //Only display filtered data if search field isn't empty.
    if (event.target.value === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  // Clear search field.
  const clearInput = () => {
    setFilteredData([]);
    setText("");
  };

  return (
    <div className="text-white text-right fixed top-0 right-0 mr-4">
      <div className="flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={handleFilter}
          className="px-3 py-2 bg-yellow-50 text-black rounded-l-md focus:outline-none"
        />
        <div className="p-2 bg-gray-900 rounded-r-md focus:outline-none hover:cursor-pointer w-12">
          {filteredData.length === 0 ? (
            <SearchIcon className="text-white" />
          ) : (
            <CloseIcon onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div
          className="bg-yellow-50 text-amber-950 text-center w-64 max-h-52 overflow-y-scroll"
          style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
        >
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <a
                key={key}
                href={value.link}
                target="blank"
                className="block px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
              >
                <p className="">{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
