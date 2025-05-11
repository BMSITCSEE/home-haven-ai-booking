
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi there! I'm your HomeHaven AI assistant. I can help you book a stay, answer questions about the property, or provide local recommendations. How can I assist you today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const { toast } = useToast();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      let responseContent = '';
      
      if (input.toLowerCase().includes('book')) {
        responseContent = "I'd be happy to help you book this property! This would normally connect to the booking backend. When would you like to check in, and how many guests will be staying?";
      } else if (input.toLowerCase().includes('discount') || input.toLowerCase().includes('cheaper')) {
        responseContent = "While I don't have the authority to offer discounts, I can suggest booking during weekdays or non-peak seasons when rates are generally lower.";
      } else if (input.toLowerCase().includes('recommend') || input.toLowerCase().includes('nearby') || input.toLowerCase().includes('restaurant')) {
        responseContent = "There are several great restaurants within walking distance! In the future, I'll provide personalized recommendations based on the property's location and your preferences.";
      } else {
        responseContent = "Thank you for your message. In the fully implemented version, I would connect to the backend to provide accurate information and help with your booking needs.";
      }
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: responseContent,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleOpen = () => {
    setIsOpen(true);
    toast({
      title: "AI Assistant",
      description: "This AI assistant will be connected to the backend.",
    });
  };

  return (
    <>
      <Button 
        onClick={handleOpen} 
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-airbnb-primary hover:bg-airbnb-primary/90 text-white"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <span className="text-airbnb-primary font-bold mr-2">HomeHaven</span> AI Assistant
            </DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="h-[350px] pr-4">
            <div className="space-y-4 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-airbnb-primary text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    <p>{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <DialogFooter className="flex sm:justify-between">
            <form onSubmit={handleSend} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
              />
              <Button type="submit">Send</Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIChatButton;
