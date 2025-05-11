
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { sendMessageToBot, ChatMessage } from '@/services/chatService';

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hi there! I'm your HomeHaven AI assistant. I can help you book a stay, answer questions about the property, or provide local recommendations. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const { toast } = useToast();

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Send message to the backend service
      const response = await sendMessageToBot(input);
      setMessages((prev) => [...prev, response.message]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get a response from the AI assistant.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    toast({
      title: "AI Assistant",
      description: "The AI assistant is ready to help with your booking.",
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
            <DialogDescription>
              Get instant help with bookings and property information
            </DialogDescription>
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
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <DialogFooter className="flex sm:justify-between">
            <form onSubmit={handleSend} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading}>Send</Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIChatButton;
