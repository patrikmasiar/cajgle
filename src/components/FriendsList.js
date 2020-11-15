import React from 'react';
import FriendItem from '../components/FriendItem';
import style from './FriendsList.module.css'
import {Button, Container} from 'react-bootstrap';

const data = require('../data/friends-rating.json');

const sortData = (dataArray) => {
  const list = [...dataArray];

  return list.sort((a, b) => (a.progress < b.progress) ? 1 : -1)
}

const FriendsList = () => (
  <Container style={{marginTop: 25, marginBottom: 25}}>
    <div className={style.buttonWrapper}>
      <Button className={style.button}>
        Pozvať priateľov +
      </Button>
    </div>
    {sortData(data).map((item, index) => (
      <FriendItem
        key={item.id}
        friend={item}
        position={index + 1}
      />
    ))}
  </Container>
);

export default FriendsList;
