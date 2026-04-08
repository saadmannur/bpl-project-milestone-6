import React from 'react';
import Player from './Player';

const AvailablePlayers = ({players}) => {
    
    return (
        <div>
            <div className='my-5 flex justify-between items-center px-1 md:px-4'>
                <h2 className='text-l md:text-4xl font-bold'>Available Players: {players.length}</h2>
                <div className='flex  items-center space-x-1 md:space-x-3'>
                    <button className="btn btn-accent btn-outline text-xl font-semibold ">Available</button>
                    <button className="btn btn-accent btn-outline text-xl font-semibold">Selected<span>(0)</span></button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;