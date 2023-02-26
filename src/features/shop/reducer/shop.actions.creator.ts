import { createAction } from "@reduxjs/toolkit";
import { ItemStructure } from "../models/item.type";
import { shopActions } from "./shop.actions";

export const loadAllCreator = createAction<ItemStructure[]>(
  shopActions.LoadAll
);

export const editItemCreator = createAction<Partial<ItemStructure>>(
  shopActions.EditItem
);

export const createItemCreator = createAction<ItemStructure>(
  shopActions.createItem
);

export const deleteItemCreator = createAction<ItemStructure["id"]>(
  shopActions.DeleteItem
);
