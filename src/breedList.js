import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    console.log(localCache);
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      console.log(json.breeds);
      let cacheBreeds = json.breeds;
      //localCache[animal] = cacheBreeds;
      if (!cacheBreeds) localCache[animal] = json.breeds || [];
      console.log("cacheBreeds :", cacheBreeds);
      console.log(localCache[animal]);
      setBreedList(cacheBreeds);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
