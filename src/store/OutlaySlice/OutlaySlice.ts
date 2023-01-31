import {
  createSlice,
  createAsyncThunk,
  AnyAction,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { outlayApi } from "../../api";
import { OutlayRow, OutlaysState } from "./OutlaysSlice.types";

// thunk
export const fetchOutlaysByEid = createAsyncThunk<
  {data: OutlayRow[], title: string},
  {eID: number, title: string},
  { rejectValue: string, state: RootState  }
>("outlays/GET_LIST", async (payload, { rejectWithValue }) => {
  try {
    
    const response = await outlayApi.getList(payload.eID);
    return await {data: response.data, title: payload.title};

  } catch (err) {
    return rejectWithValue(
      "Произошла ошибка, попробуйте перезагрузить страницу"
    );
  }
});

// slice
const initialState: OutlaysState = {
  title: "",
  data: [],
  loading: false,
  error: null,
};

const outlaysSlice = createSlice({
  name: "outlays",
  initialState,
  reducers: {
    resetState(state) {
      state.title = "";
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOutlaysByEid.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOutlaysByEid.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.title = action.payload.title;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const actions = outlaysSlice.actions;
export const reducer = outlaysSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}