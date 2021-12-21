export const handleCopyUrl = (id: string) => {
  navigator.clipboard.writeText(`${window.location.href}#${id}`);
};
