export const formatDate = (dateString?: string): string => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export function formatDate2(date: Date): string {
  // Format the date as YYYY-MM-DD
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getStartOfCurrentMonth(): string {
  // Create a date for the first day of the current month
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  return formatDate2(start);
}

export function getEndOfCurrentMonth(): string {
  // Create a date for the first day of the next month, then subtract a day
  const now = new Date();
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const end = new Date(startOfNextMonth.getTime() - 1); // Subtract one millisecond
  return formatDate2(end);
}
