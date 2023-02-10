import { createAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategoriesByTitle = (categoriesByTitle) =>
  createAction(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES_BY_TITLE,
    categoriesByTitle
  );
