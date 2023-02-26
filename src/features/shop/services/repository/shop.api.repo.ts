import { ItemStructure } from "../../models/item.type";

export class ShopApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/shop";
  }

  async loadItems(): Promise<ItemStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as ItemStructure[];
    return data;
  }

  async getById(id: ItemStructure["id"]): Promise<ItemStructure> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    const data = (await resp.json()) as ItemStructure;
    return data;
  }

  async createItem(item: ItemStructure): Promise<ItemStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = (await resp.json()) as ItemStructure;
    return data;
  }

  async editItem(item: Partial<ItemStructure>): Promise<ItemStructure> {
    const url = this.url + "/" + item.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await resp.json()) as ItemStructure;
    return data;
  }

  async deleteItem(id: ItemStructure["id"]): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
  }
}
