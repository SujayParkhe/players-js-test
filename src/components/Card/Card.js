import React from 'react';
// import date from 'date-and-time';
import './Card.css';

// Installed a package called date-time to get current user timezone
// const now = new Date();
// const currentDate = date.format(now, 'DD/MM/YYYY HH:mm:ss');

export const Card = (props) => (
    <div className='card-container'>
    {/* Tried using require but i can't get the correct syntax for template literals attaching the line of code below  */}
    {/* <img alt='player' src={require(`/playerstest/src/player-images/${props.player.Id}.jpg`)} /> */}
        <img alt='player' src={`/playerstest/src/player-images/${props.player.Id}.jpg`} />
        <h2> { props.player.PFName } </h2>
        <p> { props.player.SkillDesc } </p>
        <p> $ { props.player.Value }  </p>
        <p> { props.player.UpComingMatchesList[0].CCode } </p>
        <p className="vs-strong"> VS </p>
        <p> { props.player.UpComingMatchesList[0].VsCCode } </p>
        <p> { props.player.UpComingMatchesList[0].MDate } </p>

    </div>
)