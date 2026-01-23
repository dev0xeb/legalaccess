
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
      <img
        src={new URL('../assets/WhatsApp_Image_2025-12-11_at_16.54.25_71cc3f39-removebg-preview.png', import.meta.url).href}
        alt="WhatsApp"
        className="w-12 h-12 object-contain"
      />
    </a>
  );
}
