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
export const fetchAllOutlays = createAsyncThunk<
  OutlayRow[],
  undefined,
  { rejectValue: string, state: RootState  }
>("outlays/GET_LIST", async (_, { rejectWithValue, getState }) => {
  try {
    
    const eID = getState().outlays.eID;
    const response = await outlayApi.getList(eID);
    return await response.data;

  } catch (err) {
    return rejectWithValue(
      "Произошла ошибка, попробуйте перезагрузить страницу"
    );
  }
});

// slice
const initialState: OutlaysState = {
  eID: 31476,
  data: [],
  loading: false,
  error: null,
};

const outlaysSlice = createSlice({
  name: "outlays",
  initialState,
  reducers: {
    // setLimit(state, action: PayloadAction<number>) {
    //   state.limit = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOutlays.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllOutlays.fulfilled, (state, action) => {
        state.data = action.payload;
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