import type { ToastVariant } from "../toast";

/* Shared by ToastrNotification.stories.tsx and
   ToastrNotification.variants.stories.tsx. */

export const TOAST_VARIANTS: ToastVariant[] = ["info", "success", "warning", "error"];

/* Title and body shown for each variant. */
export const TOAST_COPY: Record<ToastVariant, { title: string; message: string }> = {
  warning: { title: "Warning", message: "Advise users of conditions that might cause issues." },
  error: { title: "Error", message: "A critical action has failed and needs attention." },
  info: { title: "Info", message: "Important background information or system updates." },
  success: { title: "Success", message: "Action completed successfully." },
};

/* Shorter copy for the interactive demo's toasts. */
export const TOAST_DEMO_COPY: Record<ToastVariant, { title: string; message: string }> = {
  warning: { title: "Warning", message: "This action may have unintended consequences." },
  error: { title: "Error", message: "Something went wrong. Please try again." },
  info: { title: "Info", message: "A new version is available for download." },
  success: { title: "Success", message: "Your changes have been saved." },
};
