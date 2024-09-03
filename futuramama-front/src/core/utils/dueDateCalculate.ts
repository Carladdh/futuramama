export const calculateDueDate = (lastMenstrualPeriod: string): string => {
  const date = new Date(lastMenstrualPeriod);
  date.setDate(date.getDate() + 280);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}/${month}/${year}`;
};
