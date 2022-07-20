import React, { Component, useState } from 'react';

function DomDice() {
    const [dice1, setValue1] = useState('../public/images/dice1.png')
    const [dice2, setValue2] = useState('../public/images/dice1.png')
    const arrayImage = [
        '../public/images/dice1.png',
        '../public/images/dice2@2x.png',
        '../public/images/dice3@2x.png',
        '../public/images/dice4@2x.png',
        '../public/images/dice5@2x.png',
        '../public/images/dice6@2x.png',
    ]
    function handleRollDice() {
        let num = ranDomNumber();
        setValue1(arrayImage[num]);
        setValue2(arrayImage[num]);
    
    }
    
    function ranDomNumber() {
        const number = Math.floor(Math.random() * 6)
        return number;
    }
  
    return (
        <>
            <div className="container">
                <div className="logo"><img src=".images/diceeLogo@2x.png" alt="" /></div>
                <div className="list-dice">
                    <img className="dice-1" src=".images/dice1.png" alt="" />
                    <img id="dice-2" src=".images/dice2@2x.png" alt="" />
                </div>
                <button onClick={handleRollDice} className="roll-dice">Roll Dice</button>
            </div>
        </>
    );
}

export default DomDice;