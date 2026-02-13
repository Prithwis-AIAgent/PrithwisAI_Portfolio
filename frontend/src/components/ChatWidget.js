import React, { useState, useEffect, useRef } from 'react';
import CatIcon from './icons/CatIcon';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! I'm SitePilot. How can I help you navigate this site?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // In production, this should be an environment variable
    const API_URL = 'https://sitepilot-ai.vercel.app/api/chat';

    const toggleChat = () => setIsOpen(!isOpen);

    const handleInputChange = (e) => setInputValue(e.target.value);

    // Simplified DOM extraction for the widget context
    const extractSimpleDOM = () => {
        const elements = document.querySelectorAll('h1, h2, h3, h4, p, button, a, input, section');
        let struct = '';
        elements.forEach(el => {
            const text = el.innerText.substring(0, 100).replace(/\s+/g, ' ').trim();
            const id = el.id ? `#${el.id}` : '';
            const tag = el.tagName.toLowerCase();
            if (text || id) {
                struct += `${tag}${id}: ${text}\n`;
            }
        });
        return struct;
    };

    const executeAction = (action) => {
        if (action.type === 'response') {
            setMessages(prev => [...prev, { text: action.content, sender: 'bot' }]);
        } else if (action.type === 'tool_call') {
            const { toolName, toolArgs } = action;
            console.log(`Executing tool: ${toolName}`, toolArgs);

            try {
                if (toolName === 'scroll_to_section') {
                    const sectionId = toolArgs.id.replace('#', '');
                    const section = document.getElementById(sectionId);
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                } else if (toolName === 'highlight_element') {
                    const elId = toolArgs.id.replace('#', '');
                    const el = document.getElementById(elId);
                    if (el) {
                        const originalBorder = el.style.border;
                        el.style.border = '2px solid #2563EB'; // Blue
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        setTimeout(() => { el.style.border = originalBorder; }, 2000);
                    }
                }
            } catch (err) {
                console.error("Tool execution error:", err);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMsg = inputValue;
        setInputValue('');
        setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
        setIsLoading(true);

        try {
            const dom = extractSimpleDOM();

            // Call the SitePilot API
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg, dom })
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();

            if (data.actions) {
                // Execute all actions returned by the agent
                data.actions.forEach(action => executeAction(action));
            } else if (data.error) {
                setMessages(prev => [...prev, { text: "Sorry, I ran into an error processing that.", sender: 'bot' }]);
            }

        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, {
                text: "I'm having trouble connecting to my brain at SitePilot.AI right now. Please try again later.",
                sender: 'bot'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white dark:bg-gray-800 w-80 h-96 rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700 mb-4 transition-all duration-300 ease-in-out transform origin-bottom-right">
                    {/* Header */}
                    <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                        <h3 className="font-semibold">SitePilot AI</h3>
                        <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${msg.sender === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none'
                                    : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-bl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="mb-3 flex justify-start">
                                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 text-sm text-gray-500 animate-pulse">
                                    Thinking...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSubmit} className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Type a message..."
                                disabled={isLoading}
                                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!inputValue.trim() || isLoading}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 overflow-hidden border-2 
                    ${isOpen ? 'bg-black border-black text-white' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 text-gray-900 dark:text-white'}
                `}
                aria-label="Toggle chat"
            >
                <CatIcon className="w-10 h-10" />
            </button>
        </div>
    );
};

export default ChatWidget;
