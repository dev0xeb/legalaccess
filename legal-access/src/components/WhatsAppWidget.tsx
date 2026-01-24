
import { whatsappIcon } from '../assets/icons/icons';

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
      className="fixed bottom-6 right-6 z-50 bg-transparent p-0 transition-transform duration-300 hover:scale-110"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12" />
    </a>
  );
}
