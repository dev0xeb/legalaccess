import { MessageCircle } from 'lucide-react';

export function WhatsAppWidget() {
  const whatsappNumber = '+234905975147';
  const message = 'Hello! I\'m interested in Legal Access services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-accent-green text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={32} />
    </a>
  );
}
