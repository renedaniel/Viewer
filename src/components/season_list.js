import React, { Component} from 'react';
import SeasonListItem from './season_list_item';
import SeasonDetail from './season_detail';
import {Row, Input} from 'react-materialize';

const SeasonList = ({seasons, selectedSeason, onSeasonSelect}) => {
  if (!seasons || !selectedSeason) {
    return <div>loading...</div>;
  }

  const seasonsItems = seasons.map((season) => {
    return (
      <SeasonListItem
        key={season.id}
        season={season}
      />
    );
  });

  return (
    <Row>
      <Input
        s={12}
        type='select'
        label="Temporada"
        value={selectedSeason.id}
        onChange={onSeasonSelect}
      >
        {seasonsItems}
      </Input>
    </Row>

  );
};

export default SeasonList;
