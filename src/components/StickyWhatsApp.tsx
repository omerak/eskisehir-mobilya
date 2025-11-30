import { MessageCircle } from 'lucide-react';

export default function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/905302318724"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 animate-bounce"
      title="WhatsApp ile bize yazın"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
