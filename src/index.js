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
					this.setState({
						seasons: r.seasons,
						selectedSeason: r.seasons[0],
						selectedEpisode: r.seasons[0].episodes.find( episode => {
							return episode.episode_number == 1;
						}),
					});
				}
		  })
		  .catch(function (error) {
		    console.log(error);
		});

	}

	seasonSelect (ev) {
		this.setState({
			seasons: this.state.seasons,
			selectedSeason: this.state.seasons.find( season => {
				return season.id === ev.target.value;
			}),
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<SeasonList
					onSeasonSelect={ev => this.seasonSelect(ev)}
					selectedSeason={this.state.selectedSeason}
					seasons={this.state.seasons}
				/>
				<SeasonDetail season={this.state.selectedSeason} selectedEpisode={this.state.selectedEpisode} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
