import { toast } from "sonner";

export type CopyOptions = {
  clear?: boolean;
  label?: string;
  clearAfterMs?: number;
};

export const copyToClipboard = async (
  value: string,
  options: CopyOptions = {}
): Promise<boolean> => {
  const {
    clear = true,
    label = "value",
    clearAfterMs = 30000,
  } = options;

  if (!value) return false;

  try {
    await navigator.clipboard.writeText(value);
    toast.success(`Copied ${label} successfully`);
    if (clear) {
      setTimeout(async () => {
        try {
          await navigator.clipboard.writeText("");
        } catch {
          /* silent fail */
        }
      }, clearAfterMs);
    }

    return true;
  } catch (err) {
    console.error(err);
    toast.success(`Failed to copy ${label}`);
    return false;
  }
};