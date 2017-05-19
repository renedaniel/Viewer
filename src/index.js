import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import SeasonsList from './components/seasons_list';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { seasons: ['a':'1','b':'2'] };
	}

	render() {
		return (
			<div>
				<SearchBar />
				<SeasonsList seasons={this.state.seasons} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
