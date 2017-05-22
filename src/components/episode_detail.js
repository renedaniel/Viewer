import React from 'react';
import {Row, Col, MediaBox} from 'react-materialize';
import Loading from './loading';

const EpisodeDetail = ({episode}) => {
  if (!episode) {
    return <Loading error={false} />;
  }

  const titulo = episode.title_episode;
  const descripcion = episode.description_large;
  const imgUrl = episode.image_still;
  const duracion = episode.duration;
  const anio = episode.year;
  const rating = episode.rating_code;

  return (
    <Row>
      <div id="video" />
      <Col s={12}>
        <h3 className="titulo-episodio" >{titulo}</h3>
      </Col>
      <Col s={12}>
        <img src={imgUrl} className="responsive-img episode" alt="Imagen preview"/>
      </Col>
      <Col s={12} className="left-align">
        <Col s={12}>
          <p>{duracion} || {anio} || {rating}</p>
        </Col>
        <Col s={12}>
          <p>{descripcion}</p>
        </Col>
      </Col>
    </Row>
  );

};

export default EpisodeDetail;
