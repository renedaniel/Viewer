import React from 'react';

const SeasonListItem = ({season}) => {
  const titulo = season.title;
  const numero = season.number;

  return (
    <option value={numero}>{titulo}</option>
  );
};

export default SeasonListItem;
