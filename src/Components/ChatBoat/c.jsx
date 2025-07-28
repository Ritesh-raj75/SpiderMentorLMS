import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import "./LMSChatBot.css";
import chatLogo from "../../assets/chatuilogo.png";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const LMSChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  // Chatbot Send Function
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ role: "user", parts: [{ text: input }] }],
      });

      const reply = response.text || "❌ No response from Gemini.";
      setMessages((prev) => [...prev, { role: "model", content: reply }]);
    } catch (error) {
      console.error("Gemini API Error:", error.message || error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content:
            "❌ Gemini API error. Please check your API key or model name.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Newsletter Subscribe Function
  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    try {
      await addDoc(collection(db, "newsletter_subscribers"), {
        email: email,
        timestamp: serverTimestamp(), // ✅ Server-generated timestamp
      });
      alert("✅ Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Firestore error:", error);
      alert("❌ Failed to subscribe. Try again later.");
    }
  };

  return (
    <div className="chat-container">
      {/* Chatbot Header */}
      <div className="chat-header">
        <span className="logo">Spider-Mentor Talks</span>
        <div
          style={{
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#a97cf0",
          }}
        >
          <img
            src={chatLogo}
            alt="SpiderMentor Chat"
            style={{
              height: "45px",
              width: "auto",
              objectFit: "contain",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={chat-bubble ${msg.role}}>
            {msg.role === "user" ? (
              <div className="chat-user">
                <div className="chat-text">{msg.content}</div>
                <img
                  src="https://i.pravatar.cc/40?u=user"
                  alt="User"
                  className="avatar"
                />
              </div>
            ) : (
              <div className="chat-model">
                <img
                  src="https://i.pravatar.cc/40?u=bot"
                  alt="Bot"
                  className="avatar"
                />
                <div className="chat-text model">{msg.content}</div>
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="chat-bubble model">
            <div className="chat-model">
              <img
                src="https://i.pravatar.cc/40?u=bot"
                alt="Bot"
                className="avatar"
              />
              <div className="chat-text model">Typing...</div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} disabled={loading}>
          ➤
        </button>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h3>📬 Subscribe to our Newsletter</h3>
        <p>
          Get weekly updates, tips, and learning materials delivered to your
          inbox.
        </p>
        <div className="newsletter-input">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="subscribe-btn" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default LMSChatBot;