"use client"

import React from "react";
import { Toaster } from "sonner";

interface ToastProps {
  message: string;
  type?: "success" | "warning" | "error" | "info";
  duration?: number;
}

const CustomToast: React.FC<ToastProps> = ({ message, type = "info", duration = 3000 }) => {
  const [showToast, setShowToast] = React.useState(false);

  React.useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showToast, duration]);

  return (
    <Toaster
      message={message}
      type={type}
      visible={showToast}
      onClose={() => setShowToast(false)}
    />
  );
};

export default CustomToast;
