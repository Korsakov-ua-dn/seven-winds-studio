export const viewDataScheme = {
  rowName: { format: "string", title: "Наименование работ", width: 757 },
  salary: { format: "number", title: "Основная з/п", width: 200 },
  equipmentCosts: { format: "number", title: "Оборудование", width: 200 },
  overheads: { format: "number", title: "Накладные расходы", width: 200 },
  estimatedProfit: { format: "number", title: "Сметная прибыль", width: 200 },
} as const;