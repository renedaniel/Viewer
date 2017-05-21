import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import SeasonList from './components/season_list';
import SeasonDetail from './components/season_detail';
import {Row, Col, Navbar, NavItem} from 'react-materialize';
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
					this.seasonsCache = r.seasons;
				}
		  })
		  .catch(function (error) {
		    console.log(error);
		});

	}

	performState(seasons, selectedSeasonNumber, selectedEpisodeId = undefined){
		let selectedSeason = seasons.find( season => {
			return season.number == selectedSeasonNumber;
		});
		let selectedEpisode = selectedSeason.episodes.find( episode => {
			if (selectedEpisodeId !== undefined) {
				return episode.id == selectedEpisodeId;
			}
			return episode.id == selectedSeason.first_episode;
		});
		this.setState({ seasons, selectedSeason, selectedEpisode });
	}

	selectSeason(ev) {
		this.performState(this.state.seasons, ev.target.value);
	}

	selectEpisode(ev) {
		this.performState(this.state.seasons, this.state.selectedSeason.number, ev.target.id);
	}

	searchTerm(search) {
		let busqueda = search.term.toLowerCase();
		let seasons = [];
		if (busqueda == '') {
			seasons = this.seasonsCache;
		} else {
			seasons = this.seasonsCache.filter(season => {
				if (season.title.toLowerCase().indexOf(busqueda) != -1) {
					return season;
				}
			});
		}
		if (seasons.length > 0) {
			this.performState(seasons, seasons[0].number);
		} else {
			console.log('No results');
		}
	}

	render() {
		return (
			<Row>
				<Row>
					<Col s={12} >
						<SearchBar onSearchTermChange={term => this.searchTerm(term)} />
					</Col>
					<Col m={6} >
						<SeasonList
							onSeasonSelect={ev => this.selectSeason(ev)}
							selectedSeason={this.state.selectedSeason}
							seasons={this.state.seasons}
						/>
					</Col>
				</Row>
				<Row>
					<SeasonDetail
						onEpisodeSelect={ev => this.selectEpisode(ev)}
						season={this.state.selectedSeason}
						selectedEpisode={this.state.selectedEpisode}
					/>
				</Row>
			</Row>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
