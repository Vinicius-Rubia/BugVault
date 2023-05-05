import { api } from "../lib/axios";
import { setChecklists } from "../redux/checklistsSlice";
import store from "../redux/store";

export const fetchChecklists = async() => {
  try {
    const response = await api.get("checklists");
    store.dispatch(setChecklists(response.data));
  } catch (error) {
    store.dispatch(setChecklists(error));
  }
}