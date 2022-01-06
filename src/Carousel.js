/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Component } from "react";

export default class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  //using arrow function syntax to instantiate function does not create a new this
  //it binds this to the context in which it was created
  handleClick = (index) => {
    //change active to curent index of pic
    this.setState({
      active: index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            <img
              src={image}
              key={image}
              className={index === active ? "active" : ""}
              onClick={() => this.handleClick(index)}
              alt="Animal Thumbnail"
            ></img>
          ))}
        </div>
      </div>
    );
  }
}
