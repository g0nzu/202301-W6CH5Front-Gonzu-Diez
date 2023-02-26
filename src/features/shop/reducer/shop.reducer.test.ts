import { ItemStructure } from "../models/item.type";
import { shopReducer } from "./shop.reducer";
import * as ac from "./shop.actions.creator";

describe("Given the shop reducer", () => {
  let mockState: ItemStructure[];
  let mockPayload: ItemStructure;

  beforeEach(() => {
    mockState = [
      { id: 1, name: "Test-1", price: 2 },
      { id: 2, name: "Test-2", price: 3 },
    ];

    mockPayload = {
      id: 2,
      name: "Test-3",
      price: 2,
    };
  });

  describe("When the action is empty", () => {
    test("Then, it should return the initial state", () => {
      const mainState = [] as ItemStructure[];
      const action = { type: "" };
      const result = shopReducer(mainState, action);
      expect(result).toStrictEqual([]);
    });
  });

  describe("When the action is load", () => {
    test("Then, it should return the mock state", () => {
      const result = shopReducer(mockState, ac.loadAllCreator);
      expect(result).toEqual(mockState);
    });
  });

  describe("When the action is creator", () => {
    test("Then, if the initial state is an empty array, it should return the array with the payload", () => {
      const result = shopReducer([], ac.createItemCreator(mockPayload));
      expect(result).toEqual([mockPayload]);
    });
  });

  describe("When the action is edit", () => {
    test("Then, it should return the mock state", () => {
      const result = shopReducer(mockState, ac.editItemCreator(mockPayload));
      expect(result).toEqual(mockState);
    });
  });

  describe("When the action is delete", () => {
    test("Then, the function should be called", () => {
      const result = shopReducer(mockState, ac.deleteItemCreator(2));
      expect(result).toEqual(mockState);
    });
  });
});
