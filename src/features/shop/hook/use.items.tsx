import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { ShopApiRepo } from "../services/repository/shop.api.repo";
import * as ac from "../reducer/shop.actions.creator";
import { ItemStructure, ProtoItemStructure } from "../models/item.type";

export function useItems(repo: ShopApiRepo) {
  const items = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await repo.loadItems;
        dispatch(ac.loadAllCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadItems();
  }, [dispatch, repo]);
}
