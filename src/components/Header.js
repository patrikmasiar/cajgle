import React from 'react';
import {Container} from 'react-bootstrap';
import style from './Header.module.css';
import Progress from './Progress';

const Header = ({name}) => (
  <Container style={{marginTop: 25, marginBottom: 25}}>
    <span className={style.name}>
      {!!name.length ? name : 'Tvoje meno...'}
    </span>
    <div className={style.progressWrapper}>
      <Progress />
    </div>
  </Container>
);

export default Header;
