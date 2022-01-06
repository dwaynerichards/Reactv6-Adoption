import { Link } from "react-router-dom";

const Pet = ({
  //props
  name,
  animal,
  breed,
  images,
  id,
  location,
}) => {
  // const {name} = props;
  // const {animal} = props;
  // const {breed} = props;
  // const {images} = props;
  // const {id} = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) hero = images[0];

  return (
    // <div>
    //   <h2>{props.name}</h2>
    //   <h2>{props.animal}</h2>
    //   <h2>{props.breed} </h2>
    // </div>
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name} </h1>
        <h2>{`${animal} - ${breed} - ${location}`} </h2>
      </div>
    </Link>
  );
};

export default Pet;
