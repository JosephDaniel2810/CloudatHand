'use client';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '👋 Hey there, how can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(prev => !prev);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) throw new Error('Failed to get response');

      const data = await res.json();
      const botMessage: Message = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, botMessage]);
      setInput('');
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: '❌ Sorry, something went wrong.' }
      ]);
    }
  };

  const faqSuggestions = [
    "What services do you offer?",
    "Do you build AI/ML solutions?",
    "Can you help with cloud migration?",
    "How long does a typical project take?",
    "Do you offer cybersecurity assessments?",
    "Do you work with startups or just enterprises?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="p-4 rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white shadow-xl hover:scale-110 transition duration-300"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="w-80 max-h-[75vh] bg-black border border-purple-500 rounded-xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white px-4 py-2 flex justify-between items-center rounded-t-xl">
            <span className="font-bold">🤖 CyberBot</span>
            <button onClick={toggleChat} className="text-sm text-gray-300 hover:text-white">✖</button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-auto p-3 space-y-2 text-sm text-white bg-black">
            {messages.map((msg, idx) => (
              <div key={idx} className={`whitespace-pre-wrap ${msg.role === 'user' ? 'text-right text-pink-400' : 'text-indigo-300'}`}>
                {msg.content}
              </div>
            ))}

            {/* Show FAQs only on first message */}
            {messages.length === 1 && (
              <div className="mt-3 text-xs text-white">
                <p className="font-semibold text-purple-300 mb-2">Try asking:</p>
                <div className="space-y-2">
                  {faqSuggestions.map((faq, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(faq)}
                      className="w-full text-left px-3 py-2 rounded-lg bg-purple-900 hover:bg-purple-800"
                    >
                      {faq}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input Field */}
          <div className="flex border-t border-purple-700 bg-[#0f0f1a]">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="flex-1 p-2 text-sm bg-transparent text-white placeholder-gray-500 focus:outline-none"
              placeholder="Type your question..."
            />
            <button
              onClick={handleSend}
              className="px-4 text-sm bg-indigo-700 text-white hover:bg-indigo-800"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
