import React from 'react';
import { FaFlag, FaUserLarge } from 'react-icons/fa6';

const Player = ({player}) => {
    console.log(player)
    const {playerName, playerCountry, playerType, rating, battingStyle, bowlingStyle, price, playerImage} = player

    return (
        <div className=' border border-gray-300 shadow-lg rounded-3xl space-y-4 p-6 mx-auto'>
            <div className='w-96 h-72 rounded-2xl'>
                <img src={playerImage} alt="" className=' w-full h-full rounded-3xl' />
            </div>
            <div className=' flex items-center space-x-7 text-2xl font-bold'>
                <span><FaUserLarge></FaUserLarge></span>
                <h1>{playerName}</h1>
            </div>
            <div className='flex justify-between items-center border-b border-gray-300 pb-12'>
                <div className='flex items-center space-x-3 text-gray-500 text-xl'>
                    <span><FaFlag></FaFlag></span>
                    <h3>{playerCountry}</h3>
                </div>
                <button className='border border-gray-300 rounded-md p-2 font-semibold text-gray-500 text-xl bg-gray-100'>{playerType}</button>
            </div>
            <h3 className='text-2xl font-bold'>Rating : {rating}</h3>
            <div>
                {
                    playerType == "All-Rounder" && <div>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-lg font-semibold'>{battingStyle}</h3>
                            <h3 className='text-lg text-gray-400'>{battingStyle}</h3>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-lg font-semibold'>{bowlingStyle}</h3>
                            <h3 className='text-lg  text-gray-400'>{bowlingStyle}</h3>
                        </div>
                    </div>
                }
                {
                    playerType == "Batsman" && <div className='flex justify-between items-center'>
                        <h3 className='text-lg font-semibold'>{battingStyle}</h3>
                        <h3 className='text-lg  text-gray-400'>{battingStyle}</h3>
                        </div>
                }
                {
                    playerType == "Bowler" && <div className='flex justify-between items-center'>
                        <h3 className='text-lg font-semibold'>{bowlingStyle}</h3>
                        <h3 className='text-lg text-gray-400'>{bowlingStyle}</h3>
                    </div>
                }
            </div>
            <div className='flex justify-between items-center pt-2.5'>
                <h3 className='text-xl font-semibold'>Price: {price} </h3>
                <button className='btn text-xl'>Choose Player</button>
            </div>
            
        </div>
    );
};

export default Player;