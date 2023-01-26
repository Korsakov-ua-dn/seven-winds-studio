export type OutlayRow = {
    "id": number;
    "rowName": string;
    "total": number;
    "salary": number;
    "mimExploitation": number;
    "machineOperatorSalary": number;
    "materials": number;
    "mainCosts": number;
    "supportCosts": number;
    "equipmentCosts": number;
    "overheads": number;
    "estimatedProfit": number;
  "child": OutlayRow[];
}

export type OutlaysState = {
  eID: number;
  data: OutlayRow[];
  loading: boolean;
  error: string | null;
};
