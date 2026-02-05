import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Use normal anchor tags for external Google Form links
import { useModal } from '../context/ModalContext';
import { X } from 'lucide-react';



const categories = [
  {
    title: 'Legal Professionals',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScsDyhjg1iQSeQ3qzhpv5aCW6GODOA01yU01-uoTSzv4ulDTQ/viewform',
  },
  {
    title: 'Tutors',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSc031V3sIBrEwjxmyIrkp40qnchaWatk66ai8mzf22BNMOc6A/viewform',
  },
  {
    title: 'Students',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfIiPrZ0ZNKnjLpgsotUEeKKPwEJmXp4fLEsQdvLUPAM62oLw/viewform',
  },
  {
    title: 'For Individuals & Businesses',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdgxUK4OwQzaecMbM_NXBivzmrQChzorIyk2dfUgIOVfP-bXw/viewform',
  },
];

export function CategoryModal() {
  const { isOpen, modalType, closeModal, selectedCategories, openModal } = useModal();

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('categoryModalSeen');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        openModal();
        sessionStorage.setItem('categoryModalSeen', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [openModal]);

  const handleClose = () => {
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && modalType === 'category' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl p-10 w-full max-w-md shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="space-y-4">
              {(selectedCategories && selectedCategories.length > 0
                ? categories.filter((c) => selectedCategories.includes(c.title))
                : categories
              ).map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={category.link}
                    onClick={handleClose}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-transparent border-2 border-primary-darker !text-primary-darker font-bold text-lg py-4 px-6 rounded-full text-center transition-all duration-300 hover:bg-primary-darker hover:!text-white active:scale-95"
                  >
                    {category.title}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Close button placed at overlay level so it remains visible during inner animations */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 text-gray-500 hover:text-primary-darker hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Close modal"
            style={{ zIndex: 9999 }}
          >
            <X className="w-8 h-8" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
