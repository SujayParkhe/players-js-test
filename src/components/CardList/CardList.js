import React from 'react';
import { Card } from '../Card/Card';
import './CardList.css';


export const CardList = props => {
    return <div className='card-list'>
        {
        props.players.map(player => (<Card key={player.Id} player={player} />))
      }
    </div>
}
