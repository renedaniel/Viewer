import React from 'react';
import {Row, MediaBox} from 'react-materialize';

const EpisodeDetail = ({episode}) => {
  if (!episode) {
    return <div>loading...</div>;
  }

  const titulo = episode.title_episode;
  const descripcion = episode.description_large;
  const imgUrl = episode.image_still;

  return (
    <Row>
      {titulo}
      <MediaBox src={imgUrl} caption={titulo} width="650"/>
  </Row>
  );


};

export default EpisodeDetail;
