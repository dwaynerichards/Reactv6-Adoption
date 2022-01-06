import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundry from "./ErrorBoundry";
import Images from "./Images";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = {
    loading: true,
    showModal: false,
  };

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.id}`
    );
    const json = await res.json();

    const newState = Object.assign({ loading: false }, json.pets[0]);

    Promise.resolve(this.setState(newState)).then(() =>
      console.log("After setting State: ", this.state)
    );
  }
  render() {
    if (this.state.loading) {
      return <h2> Loading....</h2>;
    }

    const { name, breed, city, state, description, animal, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images}></Carousel>
        <div>
          <h1>{name}</h1>
          <h2>{`${animal.toUpperCase()} - ${breed} - ${city} - ${state}`} </h2>
          <ThemeContext.Consumer>
            {(theme) => (
              <button
                onClick={() => this.toggleModal()}
                style={{ backgroundColor: theme.current }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would You Like To Adopt {name}?</h1>
                <div className="buttons">
                  <ThemeContext.Consumer>
                    {(theme) => (
                      <button
                        onClick={this.adopt}
                        style={{ backgroundColor: theme.current }}
                      >
                        Adopt {name}
                      </button>
                    )}
                  </ThemeContext.Consumer>
                  <ThemeContext.Consumer>
                    {(theme) => (
                      <button
                        onClick={this.toggleModal}
                        style={{ backgroundColor: theme.current }}
                      >
                        Dont Adopt {name}
                      </button>
                    )}
                  </ThemeContext.Consumer>
                </div>
              </div>
            </Modal>
          ) : null}
          <div>
            <Images name={name} arr={images}></Images>
          </div>
        </div>
      </div>
    );
  }
}
//recreated withRouter; doesnt exist in this version ReactRouterDom
const withRouter = (Child) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    let { id } = useParams();
    return <Child {...props} id={id}></Child>;
  };
};

const DetailsWithRouter = withRouter(Details);

//Error boundreis is HOF. offers functionality and a wrapper but no display
const ErrorWithDetails = (props) => {
  return (
    <ErrorBoundry>
      <DetailsWithRouter {...props} />
    </ErrorBoundry>
  );
};

export default ErrorWithDetails;
