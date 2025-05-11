
/**
 * Chat service for handling communication with the AI bot
 */

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface ChatResponse {
  message: ChatMessage;
}

// Simulated backend processing for the AI chat
export const sendMessageToBot = async (message: string): Promise<ChatResponse> => {
  // In a real implementation, this would be an API call to your backend
  // For now, we'll simulate the backend response
  
  let responseContent = '';
  
  if (message.toLowerCase().includes('book')) {
    responseContent = "I'd be happy to help you book this property! Please provide your check-in date, check-out date, and the number of guests.";
  } else if (message.toLowerCase().includes('discount') || message.toLowerCase().includes('cheaper')) {
    responseContent = "While I don't have the authority to offer discounts, I can suggest booking during weekdays or non-peak seasons when rates are generally lower.";
  } else if (message.toLowerCase().includes('recommend') || message.toLowerCase().includes('nearby') || message.toLowerCase().includes('restaurant')) {
    responseContent = "There are several great restaurants within walking distance! I recommend 'The Coastal Kitchen' for seafood, 'Verde' for vegetarian options, and 'Fireside Grill' for steaks.";
  } else if (message.toLowerCase().includes('check-in') || message.toLowerCase().includes('checkout')) {
    responseContent = "Check-in time is at 3:00 PM, and checkout is at 11:00 AM. Early check-in or late checkout might be possible depending on availability.";
  } else if (message.toLowerCase().includes('cancel')) {
    responseContent = "Cancellation is free up to 48 hours before your scheduled check-in. After that, the first night is non-refundable.";
  } else {
    responseContent = "Thank you for your message. How else can I assist with your booking or questions about the property?";
  }
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    message: {
      id: Date.now().toString(),
      content: responseContent,
      sender: 'ai',
      timestamp: new Date()
    }
  };
};
