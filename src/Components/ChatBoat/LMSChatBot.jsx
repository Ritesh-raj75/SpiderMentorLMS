import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LMSChatBoat.css";
import chatLogo from "../../assets/chatuilogo.jpg";
import bgImage from "../../assets/section-2.jpg";

const apiKey = "AIzaSyDROwVdZsyQcLvqNERB-U89lXQ7M8KwnBQ";
const ai = new GoogleGenerativeAI(apiKey);

const LMSChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setLoading(true);

    try {
      const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: "model", content: text }]);
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

  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "40px",
      }}
    >
      <div
        className="chat-container p-3 shadow-lg rounded"
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        {/* Header */}
        <div className="chat-header d-flex align-items-center justify-content-between bg-danger text-white p-3 rounded-top">
          <span className="fw-bold fs-5">Spider-Mentor Talks</span>
          <img
            src={chatLogo}
            alt="SpiderMentor Chat"
            style={{ height: "40px" }}
          />
        </div>

        {/* Messages */}
        <div
          className="chat-messages my-3 px-2"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              data-aos={msg.role === "user" ? "fade-left" : "fade-right"}
              className={`chat-bubble mb-3 ${msg.role}`}
            >
              {msg.role === "user" ? (
                <div className="d-flex justify-content-end align-items-center">
                  <div className="me-2 p-2 bg-light rounded shadow-sm">
                    {msg.content}
                  </div>
                  <img
                    src="https://i.pravatar.cc/40?u=user"
                    alt="User"
                    className="rounded-circle"
                    width={36}
                  />
                </div>
              ) : (
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    src="https://i.pravatar.cc/40?u=bot"
                    alt="Bot"
                    className="rounded-circle me-2"
                    width={36}
                  />
                  <div className="p-2 bg-secondary text-white rounded shadow-sm">
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div
              className="d-flex align-items-center"
              data-aos="fade-right"
              data-aos-offset="0"
            >
              <img
                src="https://i.pravatar.cc/40?u=bot"
                alt="Bot"
                className="rounded-circle me-2"
                width={36}
              />
              <div className="p-2 bg-secondary text-white rounded shadow-sm">
                Typing...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="chat-input d-flex gap-2 align-items-center my-3">
          <input
            type="text"
            className="form-control small-chat-input"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={loading}
          />
          <button
            onClick={handleSend}
            className="btn btn-primary" style={{marginBottom:"60px"}}
            disabled={loading || !input.trim()}
          >
            ➤
          </button>
        </div>
      </div>
    </section>
  );
};

export default LMSChatBot;
