import React from 'react';
import {CollectionItem} from 'react-materialize';

const EpisodeListItem = ({episode, onEpisodeSelect}) => {
  const titulo = episode.title_episode;
  const id = episode.id;

  return (
    <CollectionItem onClick={onEpisodeSelect} id={id} href='#'>{titulo}</CollectionItem>
  );
};

export default EpisodeListItem;
