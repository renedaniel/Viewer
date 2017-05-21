import React from 'react';
import {Row, Col} from 'react-materialize';

const EpisodeListItem = ({episode, onEpisodeSelect}) => {
  const titulo = episode.title_episode;
  const id = episode.id;
  const descripcion = episode.description;
  const imageUrl = episode.image_still;


  return (
    <Row className="episodio-item">
      <Col s={12}>
        <Row>
           <a onClick={onEpisodeSelect} id={id} href='#video'>{titulo}</a>
        </Row>
      </Col>
      <Col s={5} >
        <img
          src={imageUrl}
          className="responsive-img episodio-miniatura hoverable"
          onClick={onEpisodeSelect}
          id={id}
        />
      </Col>
      <Col s={6} >
        {descripcion}
      </Col>
    </Row>
  );
};

export default EpisodeListItem;
