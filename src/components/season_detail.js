import React from 'react';
import {Row, Card, CardTitle} from 'react-materialize';
import EpisodeList from './episode_list';
import EpisodeDetail from './episode_detail';

const SeasonDetail = ({season, selectedEpisode}) => {
  if (!season || !selectedEpisode) {
    return <div>loading...</div>;
  }

  const titulo = season.title_original;
  const numEpisodios = season.episodes_count;
  const imgUrl = season.image_background;
  const episodes = season.episodes;

  return (
    <Row>
      <Card
        className='small'
        header={<CardTitle image={imgUrl}>{titulo}</CardTitle>}
        //actions={[<a href='#'>This is a Link</a>]}
      >

    </Card>
    <EpisodeDetail episode={selectedEpisode} />
    <EpisodeList episodes={episodes}  />
  </Row>
  );


};

export default SeasonDetail;
