import React, { Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={ev => this.onInputChange({ term:ev.target.value })} />
      </div>
    );
  }

  onInputChange(term){
    this.setState(term);
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
