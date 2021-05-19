import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import Message from "./Message.js";

function App() {
  const [chats, setChats] = useState(["Hi", "Hello"]);
  const [input, setInput] = useState("");

  return (
    <div>
      <h1 className="pt-2">Chat Room 🚀</h1>
      <div className="d-block w-100">
        <form>
          <input className="mb-2" placeholder="Enter Name" />
          <input className="mb-2" placeholder="Enter Message" />
          <Button variant="contained" color="primary">
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
