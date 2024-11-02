import { useState } from "react";

function Home() {
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessageHistory([...messageHistory, { sender: "user", text: message }]);
      setMessage("");

      // Add logic to handle the chatbot's response
      const botResponse = "I don't have a specific response to that message.";
      setMessageHistory([
        ...messageHistory,
        { sender: "user", text: message },
        { sender: "chatbot", text: botResponse },
      ]);
    }
  };

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col">
      <header className="bg-gray-800 p-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />
            <span className="text-lg font-bold">Chatbot</span>
          </div>
        </nav>
      </header>

      <main className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messageHistory.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`bg-gray-800 p-2 rounded-lg max-w-sm ${
                  message.sender === "user" ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 p-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 text-white p-2 rounded-lg mr-2"
            value={message}
            onChange={handleMessageChange}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Home;
