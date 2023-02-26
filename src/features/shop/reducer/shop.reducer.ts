import { createReducer } from "@reduxjs/toolkit";
import { ItemStructure } from "../models/item.type";
import * as ac from "./shop.actions.creator";

const initialState: ItemStructure[] = [];

export const shopReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadAllCreator, (_state, { payload }) => payload);

  builder.addCase(ac.createItemCreator, (state, { payload }) => [
    ...state,
    payload,
  ]);

  builder.addCase(ac.editItemCreator, (state, { payload }) => {
    state.map((item) => (item.id === payload.id ? payload : item));
  });

  builder.addCase(ac.deleteItemCreator, (state, { payload }) => {
    state.filter((item) => item.id !== payload);
  });

  builder.addDefaultCase((state) => state);
});
