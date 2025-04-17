import styles from "../styles/chat-window.module.css";
import { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Alice", text: "Hey there!" },
    { id: 2, user: "Bob", text: "Hi! Welcome to the forum chat 👋" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), user: "You", text: input }]);
    setInput("");
  };

  return (
    <div className={`${styles.chatContainer} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.chatHeader}
        onClick={() => setIsOpen(prev => !prev)}>
        <span className={`${styles.toggleWindow} ${isOpen ? styles.open : styles.closed}`}>Forum Chat</span>
      </div>

      {isOpen && (
        <>

        </>
      )}

      <div className={styles.chatMessages}>
        {messages.map(msg => (
          <div key={msg.id} className={styles.message}>
            <strong>{msg.user}:</strong> <span>{msg.text}</span>
          </div>
        ))}
      </div>

      <div className={styles.chatInputArea}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;