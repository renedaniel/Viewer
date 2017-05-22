import React, { Component} from 'react';
import {Row, Col} from 'react-materialize';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: props.term};
  }

  render() {
    return (
      <Row className="buscador center-align">
        <input
          id="buscador"
          placeholder="Buscar..."
          value={this.state.term}
          onChange={ev => this.onInputChange({ term:ev.target.value })}
        />
      </Row>
    );
  }

  onInputChange(term){
    this.setState(term);
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
