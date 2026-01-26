"use client";

import { Toaster } from "sonner";

export const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-right"
      richColors
      closeButton
      duration={2000}
      toastOptions={{
        style: {
          background: "#0b1428",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#fff",
        },
      }}
    />
  );
};