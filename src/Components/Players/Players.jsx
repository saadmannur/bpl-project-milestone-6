import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({ playerPromise, setCoins, coins }) => {
    const players = use(playerPromise);
    // console.log(players)
    return (
        <div className='container mx-auto my-5'>
            <AvailablePlayers players={players} setCoins={setCoins} coins={coins} ></AvailablePlayers>

        </div>
    );
};

export default Players;