import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import Message from "./Message.js";

function App() {
  const [chats, setChats] = useState(["Hi", "Hello"]);
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {}, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setChats([...chats, name, input]);
  };
  return (
    <div>
      <h1 className="pt-2">Chat Room 🚀</h1>
      <div className="d-block w-100">
        <form>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mb-2"
            placeholder="Enter Name"
          />
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="mb-2"
            placeholder="Enter Message"
          />
          <Button
            disabled={!input}
            onClick={sendMessage}
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </form>
      </div>
      <div>
        <ul>
          {chats.map((chat) => (
            <Message text={chat} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
