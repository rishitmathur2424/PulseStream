import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: string;
  color: string;
}

const userColors = [
  "text-purple-400",
  "text-blue-400",
  "text-pink-400",
  "text-green-400",
  "text-yellow-400",
  "text-cyan-400",
];

const simulatedMessages = [
  "This is amazing! 🔥",
  "Best stream ever!",
  "Can't believe this is happening live",
  "The production quality is insane",
  "Who else is excited?!",
  "This beats any other event I've seen",
  "Incredible performance! 👏",
  "The energy is unreal",
  "Watching from Tokyo! 🇯🇵",
  "This is why I love live streams",
  "Absolutely brilliant",
  "Mind = blown 🤯",
  "Need more events like this",
  "The future of entertainment",
  "Anyone else getting chills?",
];

export function LiveChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate incoming messages
  useEffect(() => {
    const addSimulatedMessage = () => {
      const randomMessage =
        simulatedMessages[Math.floor(Math.random() * simulatedMessages.length)];
      const randomColor =
        userColors[Math.floor(Math.random() * userColors.length)];
      const randomUser = `User${Math.floor(Math.random() * 9999)}`;

      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        username: randomUser,
        message: randomMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        color: randomColor,
      };

      setMessages((prev) => [...prev, newMessage]);
    };

    // Add initial messages
    const initialTimer = setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        setTimeout(addSimulatedMessage, i * 1000);
      }
    }, 500);

    // Continue adding messages randomly
    const interval = setInterval(() => {
      if (Math.random() > 0.3) {
        addSimulatedMessage();
      }
    }, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        username: "You",
        message: inputValue,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        color: "text-purple-400",
      };

      setMessages((prev) => [...prev, newMessage]);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          <h3 className="text-base font-bold text-white">Live Chat</h3>
          <span className="ml-auto text-sm text-gray-400">
            {messages.length}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-3"
        ref={messagesContainerRef}
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className={`font-semibold text-sm ${msg.color}`}>
                    {msg.username}
                  </span>
                  <span className="text-xs text-gray-500">
                    {msg.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-200 break-words leading-relaxed">
                  {msg.message}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 border-t border-white/10 bg-white/5"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Send a message..."
            className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
      </form>
    </div>
  );
}