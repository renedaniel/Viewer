import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import SeasonList from './components/season_list';
import SeasonDetail from './components/season_detail';
import Loading from './components/loading';
import {Row, Col, Navbar, NavItem} from 'react-materialize';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);

		let apiUrl = 'api/api.php?action=getSeason&gid=';
		let grupoId = this.getParameterByName('gid');
		let urlRequest = apiUrl+grupoId;

		this.state = {
			seasons: [],
			selectedSeason: null,
			procesando: true
		 };
		 this.searched = '';

		axios.get(urlRequest)
  		.then((response) => {
				if (response.data.status === '0') {
					let r = response.data.response;
					this.performState(r.seasons, 1);
					this.seasonsCache = r.seasons;
				} else {
					this.setState({procesando:'error'});
				}
		  })
		  .catch(function (error) {
		    this.setState({procesando:'error'});
		});

	}

	getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
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
		this.setState({ seasons, selectedSeason, selectedEpisode, procesando:false, noResults:false });
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
			this.setState({noResults:true});
		}
		this.searched = search.term;
	}

	render() {
		if (this.state.procesando === true) {
			return <Loading error={false} />;
		} else if (this.state.procesando === 'error') {
			return <Loading error={true} />;
		}
		if (this.state.noResults) {
			return(
				<Row>
					<Col s={12} >
						<SearchBar onSearchTermChange={term => this.searchTerm(term)} term={this.searched} />
					</Col>
					<Loading error={true} />
				</Row>
			);
		}
		return (
			<Row>
				<Row>
					<Col s={12} >
						<SearchBar onSearchTermChange={term => this.searchTerm(term)} term={this.searched} />
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

ReactDOM.render(<App />, document.querySelector('#app'));
