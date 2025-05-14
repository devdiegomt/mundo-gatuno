export const formatToCOP = (number: number) => {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const formatted = formatter.format(number);
  return formatted.replace(/\u00A0/g, "");
};
