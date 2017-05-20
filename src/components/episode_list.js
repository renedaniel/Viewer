import React from 'react';
import EpisodeListItem from './episode_list_item';
import {Collection} from 'react-materialize';

const EpisodeList = ({episodes, onEpisodeSelect}) => {
  if (!episodes) {
    return <div>loading ...</div>;
  }

  const episodeListItems = episodes.map((episode) => {
    return <EpisodeListItem key={episode.id} episode={episode} onEpisodeSelect={onEpisodeSelect} />
  });

  return (
    <Collection>
      {episodeListItems}
    </Collection>
  );
};

export default EpisodeList;
