/* global React ReactDOM */
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Mixed"
      }),

      React.createElement(Pet, {
        name: "Sudo",
        animal: "Dog",
        breed: "Caucasian"
      }),

      React.createElement(Pet, {
        name: "Java",
        animal: "Dog",
        breed: "Bleach"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
