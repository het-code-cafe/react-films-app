import React from "react";
import SearchBar from "./SearchBar";
import Lijst from "./Lijst";

import "./App.css";

class App extends React.Component{
  state = {movies: ""}

  movieList = ["Star Wars","Quentin Tarantino","Tolkien"];
  data = this.movieList.map(movie => {
    return <Lijst title={movie} />
  });

  zoeken = (zoekWoord) => {
    let filteredMovies = this.movieList.filter(titel => {
        return titel.search(zoekWoord) !== -1;
    }).map(movie =>{
        return <Lijst title={movie} />
    });
    console.log(filteredMovies);
    this.setState({movies: filteredMovies});
  }

  componentDidMount(){
    this.setState({movies: this.data});
  }
  render(){
    return (
            <div class="app">
              <SearchBar code={this.zoeken}/>
              {this.state.movies}
            </div>
          );
  }
}

export default App;
