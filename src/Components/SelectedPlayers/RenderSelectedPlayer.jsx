import { Trash2 } from 'lucide-react';
import React from 'react';

const RenderSelectedPlayer = ({ selectedPlayer, selectedPlayers, setSelectedPlayers, coins, setCoins }) => {
    // console.log(selectedPlayer)
    const { playerName, playerImage, playerType, battingStyle, bowlingStyle} = selectedPlayer


    const handleDeleteSelectedPlayer = (selectedPlayer) => {
        // console.log(selectedPlayers, "kaka ki obostha")
        const filteredPlayers = selectedPlayers.filter(p => p.id !== selectedPlayer.id);
        // console.log(filteredPlayers);
        setSelectedPlayers(filteredPlayers)
        setCoins(coins + selectedPlayer.price)
        
    }

    return (
        <div className='flex justify-between items-center border border-gray-200 rounded-3xl shadow-md p-5'>
            <div className='flex gap-5 items-center '>
                <div className='w-40 h-40 '>
                    <img src={playerImage} alt="" className='w-full h-full rounded-3xl' />
                </div>
                <div>
                    <h2 className='text-xl md:text-3xl font-bold '>{playerName}</h2>
                    <p className='text-gray-500 md:text-xl mt-5'>
                        {
                            playerType == "All-Rounder" && <span>
                                <span>{battingStyle}</span> <br />
                                <span>{bowlingStyle}</span>
                            </span>
                        }
                        {
                            playerType == "Batsman" && <span>{battingStyle}</span>
                        }
                        {
                            playerType == "Bowler" && <span>{bowlingStyle}</span>
                        }
                    </p>
                </div>
            </div>
            <div>
                <button onClick={() => handleDeleteSelectedPlayer(selectedPlayer)} className='p-3 md:p-5 border border-red-300 rounded-full hover:bg-red-100'><Trash2 color='red'></Trash2></button>
            </div>
        </div>
    );
};

export default RenderSelectedPlayer;