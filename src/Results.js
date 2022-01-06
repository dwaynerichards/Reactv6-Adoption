import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found!</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            //must seperatly pass down id, as key is used internally by react
            //and cant be referanced
            id={pet.id}
            images={pet.images}
            location={`${pet.city} - ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
