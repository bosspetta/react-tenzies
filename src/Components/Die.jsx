import React from 'react'

export default function Die(props) {
    console.log(props)
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white',
        backgroundImage: 'url("./img/' + props.value + '.png")',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='die-face' style={styles} onClick={props.holdDice}>
            <h2>{props.value}</h2>
        </div>
    )
}
