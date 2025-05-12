
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI booking assistant. How can I help you today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let responseContent = '';
      
      if (input.toLowerCase().includes('book')) {
        responseContent = "I'd be happy to help you book this property! Just let me know your preferred dates and number of guests.";
      } else if (input.toLowerCase().includes('discount')) {
        responseContent = "While I don't have the authority to offer discounts directly, I can check if there are any ongoing promotions that might apply to your booking.";
      } else if (input.toLowerCase().includes('cancel')) {
        responseContent = "Regarding cancellation, this property has a flexible policy that allows free cancellation up to 48 hours before check-in.";
      } else if (input.toLowerCase().includes('amenities') || input.toLowerCase().includes('feature')) {
        responseContent = "This property includes WiFi, a full kitchen, free parking, a swimming pool, and is pet-friendly. Would you like to know about any specific amenity?";
      } else if (input.toLowerCase().includes('location') || input.toLowerCase().includes('nearby')) {
        responseContent = "The property is located 10 minutes from downtown, with restaurants and shops within walking distance. The nearest beach is 2 miles away.";
      } else {
        responseContent = "Thanks for your message. I'm here to help with any questions about the property or booking process. What would you like to know?";
      }
      
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        content: responseContent,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>AI Booking Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col h-80 overflow-y-auto mb-4 p-2 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about booking, amenities, location..."
            className="flex-grow"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Chatbot;
