import { useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast = () => {
  const showToast = useCallback((message, type) => {
    if (type === 'success') {
      toast.success(message, { position: "bottom-right" });
    } else if (type === 'error') {
      toast.error(message, { position: "bottom-right" });
    }
  }, []);

  return showToast;
};

export default useToast;
