import React from 'react';
import {Row, Col, MediaBox} from 'react-materialize';

const EpisodeDetail = ({episode}) => {
  if (!episode) {
    return <div>loading...</div>;
  }

  const titulo = episode.title_episode;
  const descripcion = episode.description_large;
  const imgUrl = episode.image_still;
  const duracion = episode.duration;
  const anio = episode.year;
  const rating = episode.rating_code;

  return (
    <Row>
      <Col>
        <h3>{titulo}</h3>
      </Col>
      <Col>
        <img src={imgUrl} className="responsive-img" id="video" />
      </Col>
      <Col className="left-align">
        <Col s={12}>
          <p>{duracion} || {anio} || {rating}</p>
        </Col>
        <Col>
          <p>{descripcion}</p>
        </Col>
      </Col>
    </Row>
  );

};

export default EpisodeDetail;
