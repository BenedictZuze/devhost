const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export function getFormattedDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions
) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString("en-GB", {
      ...({
        day: "numeric",
        month: "short",
        year: "numeric",
      } as Intl.DateTimeFormatOptions),
      ...options,
    });
  }

  return dateFormat.format(new Date(date));
}

export function getDay(date: string | number | Date): string {
  return new Date(date).getDate().toString().padStart(2, "0");
}

export function getMonthAndYear(date: string | number | Date): string {
  const d = new Date(date);
  const month = d.toLocaleString("en-GB", { month: "short" });
  const year = d.getFullYear();
  return `${month} ${year}`;
}
