import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {zoekWoord: ""};

  verander = (event) => {
    this.setState({zoekWoord: event.target.value});
  }

  zoek = (event) => {
    event.preventDefault(); // hij refreshed niet meer
    this.props.code(this.state.zoekWoord);
  }

  render(){
    return (
      <form onSubmit={this.zoek}>
        <input onChange={this.verander} type="text" placeholder="Zoek hier je film!" />
      </form>
    );
  }
}

export default SearchBar;
