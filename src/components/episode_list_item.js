import React from 'react';
import {CollectionItem} from 'react-materialize';

const EpisodeListItem = ({episode}) => {
  const titulo = episode.title_episode;

  return (
    <CollectionItem href='#'>{titulo}</CollectionItem>
  );
};

export default EpisodeListItem;
