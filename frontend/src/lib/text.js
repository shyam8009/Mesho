// Simple text helpers
export const truncate = (str, max = 60) => {
  if (!str) return '';
  if (str.length <= max) return str;
  return str.slice(0, max - 1).trimEnd() + '…';
};
