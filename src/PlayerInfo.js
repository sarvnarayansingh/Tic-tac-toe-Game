import React from 'react'

export default function PlayerInfo(props) {
    console.log("winneruser",props.winneruser)

    const winnerUser = props.winneruser ? <h2>Winner:{props.winneruser}</h2> : <h3>Turn:{props.turn}</h3>
    return (
        <div>
            {winnerUser}
        </div>
    )
}
