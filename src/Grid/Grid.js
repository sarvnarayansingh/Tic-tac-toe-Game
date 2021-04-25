import React from 'react'
import Circle from '../svgs/Circle'
import Cross from '../svgs/Cross'
import './Grid.css'

const  renderSVG = (svg) => {
    if(svg === "cross") {
        return <Cross size={40}/>
    } else if (svg === "circle"){
        return <Circle size={40}/>
    } else {
        return null;
    }

}

export default function Grid(props) {    
const division =props.positions.map((value,index)=>{
    
    let isWinningIndex =props.winningIndexes && props.winningIndexes.includes(index)
    return (
        <div className={isWinningIndex ? 'winner' : null} 
        key = {index} 
        onClick ={() => props.setPositions(index)}>
            {renderSVG(value)}
        </div>
    )

})

    return (
        <div className = "container">
            {division}
        </div>
    )
}
