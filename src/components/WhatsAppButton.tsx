import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        {/* Notification dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full border-2 border-background" />
        
        {/* Button */}
        <div className="w-14 h-14 bg-success hover:bg-success/90 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
          <MessageCircle className="w-7 h-7 text-success-foreground" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
