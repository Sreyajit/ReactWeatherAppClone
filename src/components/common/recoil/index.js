import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import Fuse from "fuse.js";
import { Cities } from "./../../constants";
const { persistAtom } = recoilPersist();
export const unselectedCitiesArray = atom({
	key: "unselectedCitiesArray",
	default: [...Cities].sort((a, b) => (a.name > b.name ? 1 : -1)),
	effects: [persistAtom],
});
export const selectedCitiesArray = atom({
	key: "selectedCitiesArray",
	default: [],
	effects: [persistAtom],
});
export const selectedCity = atom({
	key: "selectedCity",
	default: {},
});
export const favoriteCitiesArray = atom({
	key: "favoriteCitiesArray",
	default: [],
	effects: [persistAtom],
});

export const userSearch = atom({
	key: "userSearch",
	default: "",
});
export const fuseAtom = atom({
	key: "fuseAtom",
	default: {},
});
const options = {
	keys: ["name"],
};
export const citiesRenderer = selector({
	key: "citiesRenderer",
	get: ({ get }) => {
		const search = get(userSearch);
		const fuse = new Fuse(get(unselectedCitiesArray), options);
		if (search !== "") {
			const result = fuse.search(search).map((item) => {
				const { id, name, desc, temp, humidity } = item.item;
				return { id, name, desc, temp, humidity };
			});
			return result;
		} else {
			return unselectedCitiesArray;
		}
	},
});
