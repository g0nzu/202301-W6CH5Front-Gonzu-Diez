/* eslint-disable testing-library/no-await-sync-query */
import { ItemStructure } from "../../models/item.type";
import { ShopApiRepo } from "./shop.api.repo";

describe("Given the ShopApiRepo", () => {
  describe("When we instance the methods with the new Parameter", () => {
    let repo: ShopApiRepo;

    beforeEach(() => {
      repo = new ShopApiRepo();
    });

    test("Then, if we call the loadItems() method, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });

      const result = await repo.loadItems();
      expect(result).toEqual([]);
    });

    test("Then if we call the getById() method, the result sould be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          name: "",
        }),
      });
      const result = await repo.getById(1);
      expect(result).toEqual({ name: "" });
    });

    test("Then, if we call the createItem() method, it should return the new Item that we've tryied to create", async () => {
      const mock = {};
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mock),
      });
      const result = await repo.createItem({} as ItemStructure);
      expect(result).toEqual(mock);
    });

    test("Then, if we call the editItem() method, it should return the item that we've tryied to edit", async () => {
      const mock = {
        name: "Milk",
        price: 2,
      };
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mock),
      });
      const result = await repo.editItem(mock);
      expect(result).toEqual(mock);
    });
    test("Then, if we call the deleteItem(), it should return a Void value that shows us that the deleted the item", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn(),
      });
      await repo.deleteItem(1);
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
