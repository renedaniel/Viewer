import React from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize';
import EpisodeList from './episode_list';
import EpisodeDetail from './episode_detail';

const SeasonDetail = ({season, selectedEpisode, onEpisodeSelect}) => {
  if (!season || !selectedEpisode || !onEpisodeSelect) {
    return <div>loading...</div>;
  }

  const titulo = season.title_original;
  const numEpisodios = season.episodes_count;
  const imgUrl = season.image_background;
  const episodes = season.episodes;

  return (
    <Row className="detalle">
      <Card
        className='small'
        header={<CardTitle image={imgUrl}>{titulo}</CardTitle>}
      />
      <Col m={7} >
        <Col>
          <EpisodeDetail episode={selectedEpisode} />
        </Col>
      </Col>
      <Col m={5}>
        <Col className="contenedorScroll">
          <EpisodeList episodes={episodes} onEpisodeSelect={onEpisodeSelect}  />
        </Col>
      </Col>
  </Row>
  );
};

export default SeasonDetail;
