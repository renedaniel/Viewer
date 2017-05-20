import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import SeasonList from './components/season_list';
import SeasonDetail from './components/season_detail';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);

		let a = 'https://mfwkweb-api.clarovideo.net/services/content/serie?api_version=v5.4&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=q12fva9pjnhauhd4jg0d02e0t1&group_id=544242';

		this.state = {
			seasons: [],
			selectedSeason: null
		 };

		axios.get(a)
  		.then((response) => {
				if (response.data.status === '0') {
					let r = response.data.response;
					this.performState(r.seasons, 1);
				}
		  })
		  .catch(function (error) {
		    console.log(error);
		});

	}

	performState( seasons, selectedSeasonNumber ){
		let selectedSeason = seasons.find( season => {
			return season.number == selectedSeasonNumber;
		});
		let selectedEpisode = selectedSeason.episodes.find( episode => {
			return episode.id == selectedSeason.first_episode;
		});
		this.setState({ seasons, selectedSeason, selectedEpisode });
	}

	selectSeason( ev ) {
		this.performState(this.state.seasons, ev.target.value);
	}

	selectEpisode( ev ) {
		this.performState(this.state.seasons, this.state.selectSeason.number, ev.target.value);
	}

	render() {
		return (
			<div>
				<SearchBar />
				<SeasonList
					onSeasonSelect={ev => this.selectSeason(ev)}
					selectedSeason={this.state.selectedSeason}
					seasons={this.state.seasons}
				/>
				<SeasonDetail
					season={this.state.selectedSeason}
					selectedEpisode={this.state.selectedEpisode} 
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
