// types/chat.ts
// Shared types for chat functionality

export interface Message {
    text: string;
    type: 'user' | 'bot' | 'error';
  }
  
  export interface ChatRequest {
    message: string;
  }
  
  export interface ChatResponse {
    response: string;
    success: boolean;
    error: string | null;
  }
  
  export interface UseChatAPI {
    messages: Message[];
    isLoading: boolean;
    sendMessage: (message: string) => Promise<ChatResponse | undefined>;
    clearMessages: () => void;
  }
  
  // API Error types
  export interface ApiError {
    error: string;
  }
  
  // Component props types
  export interface ChatComponentProps {
    className?: string;
    onMessageSent?: (message: string) => void;
    onError?: (error: string) => void;
  }