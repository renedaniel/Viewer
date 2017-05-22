import React, { Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: props.term};
  }

  render() {
    return (
      <input
        className="button"
        placeholder="Buscar..."
        value={this.state.term}
        onChange={ev => this.onInputChange({ term:ev.target.value })}
      />
    );
  }

  onInputChange(term){
    this.setState(term);
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
