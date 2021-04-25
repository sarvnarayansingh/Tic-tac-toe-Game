import React, { useState } from "react"
import Grid from './Grid/Grid'
import PlayerInfo from './PlayerInfo'

function App() {
  const [data, setData]=useState({
    winner:{
    name:undefined,
    indexes:[],
    },
    turn:'cross',
    position:new Array(9).fill(null)
  })
  console.log("data")
  return (
    <>
   <Grid
    winningIndexes = {data.winner.indexes}
   positions = {data.position}
   setPositions = {index => {
    setData(prevdata => {
      if(!prevdata.position[index] && !prevdata.winner.name) {
        const crossdata = {...prevdata}
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
          ]
          lines.forEach(line =>{
            const [a,b,c] =line
            if(crossdata.position[a] && 
                  crossdata.position[a] === crossdata.position[b] &&
                  crossdata.position[a] === crossdata.position[c]) {
                    crossdata.winner.name = crossdata.turn
                    data.winner.indexes =line
                  }
          })

        crossdata.position[index] = crossdata.turn
        crossdata.turn = (crossdata.turn ==='cross') ? 'circle':'cross' 
      return crossdata
      } else {
        return prevdata;
      }
      
    })}
  }
   />
   <PlayerInfo
   turn={data.turn}
   winneruser={data.winner.name}
   />
   
   </>
   
  );
}

export default App;
