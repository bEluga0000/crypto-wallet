type FileTypeSchema =
  | "text/plain"
  | "application/json"
  | "application/octet-stream";

type DownloadFileInputSchema = {
  data: string;
  type: FileTypeSchema;
  fileName: string;
};

export const handleDownloadFile = ({
  data,
  type,
  fileName,
}: DownloadFileInputSchema) => {
  if (!data) return;

  const blob = new Blob([data], { type });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};