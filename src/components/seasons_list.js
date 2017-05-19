import React from 'react';
import SeasonListItem from './season_list_item';

const SeasonsList = (props) => {
  console.log(props.seasons);
  const seasonsItems = props.seasons.map((season) => {
    return <SeasonListItem season={season} />
  });

  return (
    <ul className="ss" >
      {seasonsItems}
    </ul>
  );
};

export default SeasonsList;
