import React from 'react';
import EpisodeListItem from './episode_list_item';
import {Collection} from 'react-materialize';

const EpisodeList = ({episodes}) => {
  if (!episodes) {
    return <div>loading ...</div>;
  }

  const episodeListItems = episodes.map((episode) => {
    return <EpisodeListItem key={episode.id} episode={episode} />
  });

  return (
    <Collection>
      {episodeListItems}
    </Collection>
  );
};

export default EpisodeList;
