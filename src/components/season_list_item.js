import React from 'react';

const SeasonListItem = ({season}) => {
  const titulo = season.title;
  const id = season.id;

  return (
    <option value={id}>{titulo}</option>
  );
};

export default SeasonListItem;
