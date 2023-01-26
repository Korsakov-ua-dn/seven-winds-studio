import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_PUBLIC_API_URL}`,
});

export const outlayApi = {
  createEntity() {
    return instance.post(`/v1/outlay-rows/entity/create`);
  },
  getList(eID: number) {
    return instance.get(`/v1/outlay-rows/entity/${eID}/row/list`);
  },
  createRow(eID: number, payload: OutlayRowPayload) {
    return instance.post(`/v1/outlay-rows/entity/${eID}/row/create`, payload);
  }
};

// types
export type Transaction = {
  _id: string,
  name: string,
  date: string,
  card: number,
  point: string,
  address: string,
  fuelName: string,
  fuelCount: number,
  coast: number,
  __v: number,
};

// export type OutlayRowResponce = {
//   "current": {
//     "id": number,
//     "rowName": string,
//     "total": number,
//     "salary": number,
//     "mimExploitation": number,
//     "machineOperatorSalary": number,
//     "materials": number,
//     "mainCosts": number,
//     "supportCosts": number,
//     "equipmentCosts": number,
//     "overheads": number,
//     "estimatedProfit": number
//   },
//   "changed": []
// }

// export type OutlayRow = OutlayRowResponce["current"]



// {
//   "id": 31476,
//   "rowName": "fca925f3-67d0-440d-b09b-1073deddc041"
// }

export type OutlayRowPayload = {
  "equipmentCosts": number,
  "estimatedProfit": number,
  "machineOperatorSalary": 0,
  "mainCosts": 0,
  "materials": 0,
  "mimExploitation": 0,
  "overheads": number,
  "parentId": number | null,
  "rowName": "Южная строительная площадка",
  "salary": number,
  "supportCosts": 0
}