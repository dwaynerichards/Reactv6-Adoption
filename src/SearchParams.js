import { useState, useEffect, useContext } from "react";
import useBreedList from "./breedList";
import ButtonTheme from "./ButtonTheme";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [breed, updateBreed] = useState("");
  const [animal, updateAnimal] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []);

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  };

  const handleClickColor = (e) => {
    const colors = e.target.value;
    console.log(colors);
    theme.setCurrent(colors);
  };

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <ButtonTheme
          value={theme.current}
          onChange={(e) => handleClickColor(e)}
          onBlur={(e) => handleClickColor(e)}
        />

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option></option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            defaultValue={location}
            placeholder="Location"
          />
        </label>

        <button style={{ backgroundColor: theme.current }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
