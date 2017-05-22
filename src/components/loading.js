import React, { Component} from 'react';
import {Row, Col} from 'react-materialize';

const Loading = ({error}) => {
  if (error) {
    return(
      <Row className="detalle loading center-align">
        <Col s={12} className="contenido-mensaje" >La serie o temporada que buscas no existe</Col>
      </Row>
    );
  }
  return (
    <Row className="detalle loading center-align">
      <Col s={12}>Cargando datos</Col>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default Loading;
