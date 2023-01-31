export const navItems = [
  { key: 1, short: "По проекту", title: "По проекту", link: "by-project", eID: 31476 },
  { key: 2, short: "Объекты", title: "Объекты", link: "objects", eID: 31476 },
  { key: 3, short: "РД", title: "РД", link: "rd", eID: 31476 },
  { key: 4, short: "МТО", title: "МТО", link: "mts", eID: 31476 },
  { key: 5, short: "СМР", title: "Строительно-монтажные работы", link: "smr", eID: 31476 },
  { key: 7, short: "График", title: "График", link: "schedule", eID: 31476 },
  { key: 8, short: "МиМ", title: "МиМ", link: "mim", eID: 31476 },
  { key: 9, short: "Рабочие", title: "Рабочие", link: "workers", eID: 31476 },
  { key: 10, short: "Капвложения", title: "Капвложения", link: "capital-investments", eID: 31476 },
  { key: 11, short: "Бюджет", title: "Бюджет", link: "budget", eID: 31476 },
  { key: 12, short: "Финансирование", title: "Финансирование", link: "financing", eID: 31476 },
  { key: 13, short: "Панорамы", title: "Панорамы", link: "panoramas", eID: 31476 },
  { key: 14, short: "Камеры", title: "Камеры", link: "cameras", eID: 31476 },
  { key: 15, short: "Поручения", title: "Поручения", link: "orders", eID: 31476 },
  { key: 16, short: "Контрагенты", title: "Контрагенты", link: "counterparties", eID: 31476 },
] as const;

function numberFormat(value: number, options = {}){
  return new Intl.NumberFormat('ru-RU', options).format(value)
}

export const formatDataToView:Record<Format, FormatFunction> = {
    string: (data: any) => data,
    number: (data: any) => numberFormat(data),
    price: (data: any) => `${numberFormat(data)} ₽`,
    date: (data: any) => {
        const date = new Date(data);
        return date
        .toLocaleString([], {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
        .replace(",", "");
    },
};


//types
export type Format = "price" | "date" | "number" | "string";
export type FormatFunction = (data: any) => number | string

export type Data = {
  format: Format;
  title: string;
  sort: boolean;
  renderFunction: FormatFunction;
  width?: number;
};
