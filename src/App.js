import React, { Component } from 'react';

// Create clas based component called app
class App extends Component {
  // Creates a condstructor function that is called every time an new "App" component is created
  constructor() {
    // calls the constructor for the parent (Component) class
    super();
    // sets the initail state to include these items
    this.state = {
      pokemon: [],
      search: '',
      selectedPokemon: null
    };
  }

  // makes component did mount asynchronous
  async componentDidMount() {
    //*******************
    // Async code runs in order
    // pausing until the await lines are finished
    // Alternative to using promises
    //*******************

    // grabs data from the pokeapi and saves it as res
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    // parses the res variable to json
    const json = await res.json();
    // sets pokemon in the state object to be the results of the parsed results
    this.setState({ pokemon: json.results });
  }

  // function used to change the value of the search input
  onSearchChange = event => {
    // When this function is called update the state to be the value typed into the input field
    this.setState({ search: event.target.value });
  };

  // function used to display the results from the users search
  generateSearchResults = search => {
    // if the search bar is empty
    if (search === '') {
      // return all pokemon in this.state.pokemon
      return this.state.pokemon;
    } else {
      // return the first 10 pokemon whos names include the values typed into the search box
      return this.state.pokemon
        .filter(p => p.name.includes(search))
        .slice(0, 10);
    }
  };

  // asynchronousfunction used to change the selected pokemon
  // recieves the name of a pokemon
  selectPokemon = async name => {
    // grabs the data from the pokeapi for the given name
    // Uses backticks `[above the tab key] to pass data into a string instead of string concatenation
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`, {
      // forces it to be saved so future requests dont take as long
      cache: 'force-cache'
    });

    // parses the results to json
    const json = await res.json();
    // sets this.state.selected pokemon to be the parsed results and the search to be the pokemons name
    this.setState({ selectedPokemon: json, search: name });
  };

  render() {
    // When the component is rendered grab the results of this.generateSearchResults passing in the current search term
    const results = this.generateSearchResults(this.state.search);

    // evert render must return
    return (
      // returns one element the div wraps the other content
      <div className="App">
        {/* Div to hold search content */}
        <div className="search">
          {/* Creates a new input */}
          <input
            // When the user types in the text box call this.onSearchChange to change the value of this.state.search
            onChange={this.onSearchChange}
            // Set the type of the input to be text
            type="text"
            // The value of the input is set by thisstate.search
            value={this.state.search}
          />
          {/* Creates a new ul */}
          <ul>
            {/* Maps over the results array */}
            {results.map(r => (
              // FOr every element in the results array return an li with the pokemons name
              <li onClick={() => this.selectPokemon(r.name)}>{r.name}</li> // When the li is clicked call this.selectPokemon to update the value of this.state.selectedPokemon
            ))}
          </ul>
        </div>

        {/* As long as a pokemon is selected */}
        {this.state.selectedPokemon && (
          // render a div with the class result
          <div className="result">
            {/* render 2 images */}
            {/* Sets the src to be the front default sprite returned by the apy call*/}
            <img src={this.state.selectedPokemon.sprites.front_default} />{' '}
            {/* Sets the src to be the front shiny sprite returned by the apy call*/}
            <img src={this.state.selectedPokemon.sprites.front_shiny} />
          </div>
        )}
      </div>
    );
  }
}

// Exports the App to be usable by other components in the app
export default App;
