import { useState } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";

const useToast= () => {
	const [isToastOpen, setIsToastOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [type, setType] = useState<"success" | "error" | "info">("success");

	const showToast = (
		newMessage: string,
		newType: "success" | "error" | "info" = "info",
	) => {
		setMessage(newMessage);
		setType(newType);
		setIsToastOpen(true);
	};

	return { isToastOpen, setIsToastOpen, message, type, showToast };
}

export default function Toast() {
	const { isToastOpen, setIsToastOpen, message, type, showToast } = useToast();

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }[type];

  return (

    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        open={isToastOpen}
        onOpenChange={setIsToastOpen}
        className={`${bgColor} text-white p-4 rounded-md shadow-lg fixed bottom-4 right-4 z-50 flex items-center justify-between`}
      >
        <ToastPrimitive.Title>{message}</ToastPrimitive.Title>
        <ToastPrimitive.Close className="ml-4 focus:outline-none">
          <X size={18} />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />

      <div className="p-4">
        <button
          type="button"
          onClick={() => showToast('Produto adicionado no carrinho com sucess!', 'success')}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Show Success Toast
        </button>
        <button
          type="button"
          onClick={() => showToast('This is an error message!', 'error')}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        >
          Show Error Toast
        </button>
        <button
          type="button"
          onClick={() => showToast('This is an info message!', 'info')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Show Info Toast
        </button>
      </div>
    </ToastPrimitive.Provider>

  )

}