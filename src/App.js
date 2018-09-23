import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import pf from 'petfinder-client';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="Dog" breed="mixed" />
        <Pet name="Sudo" animal="Dog" breed="Caucasian" />
        <Pet name="Java" animal="Dog" breed="Bleach" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
