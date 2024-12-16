import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface ModalCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function AnimatedModalCheckout({ isOpen, onClose }: ModalCheckoutProps) {

// If 'esc' keydown pressed the modal will be closed.
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }

  window.addEventListener('keydown', handleKeyDown)

  return () => window.removeEventListener('keydown', handleKeyDown)
}, [onClose])

return (
  <>
  <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
<div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
            className="bg-blue-700 text-white w-[470px] p-8 rounded-lg shadow-lg z-10 flex flex-col items-center"
          >
            <div className="bg-white rounded-full p-2 mb-4">
              <Check className="text-green-500 w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Compra Efetuada!</h2>
            <p className="text-white text-center mb-6">
              Sua compra foi realizada com sucesso. Obrigado!
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white text-black w-[110px] font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              FECHAR
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
)

}