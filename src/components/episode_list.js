import React from 'react';
import EpisodeListItem from './episode_list_item';
import {Row, Col} from 'react-materialize';
import Loading from './loading';

const EpisodeList = ({episodes, onEpisodeSelect}) => {
  if (!episodes || !onEpisodeSelect) {
    return <Loading error={false} />;
  }

  const episodeListItems = episodes.map((episode) => {
    return <EpisodeListItem key={episode.id} episode={episode} onEpisodeSelect={onEpisodeSelect} />
  });

  return (
    <Col s={12} >
      {episodeListItems}
    </Col>
  );
};

export default EpisodeList;
