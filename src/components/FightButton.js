import { useState } from 'react';
import style from '@/styles/fight.module.css';
import {ArrowFatLineLeft, ArrowFatLineRight } from '@phosphor-icons/react';


export default function FightButton(props) {

    //------------------------------STATE DEFINITION----------------------------
    const [isHovered, setIsHovered] = useState(false);
    const [leftArrowHover, setLeftArrowHover] = useState(false);
    const [rightArrowHover, setRightArrowHover] = useState(false);

    //------------------------------EVENT HANDLERS------------------------------------
    const handleLeftArrowHover = () => {
        setLeftArrowHover(true);
        setRightArrowHover(false);
    };

    const handleRightArrowHover = () => {
        setLeftArrowHover(false);
        setRightArrowHover(true);
    };


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick =() =>{
        props.getJokes();
    }

    //--------------------------AUX FUNCTIONS------------------------------------
    const defineId = () =>{
        if(!leftArrowHover && !rightArrowHover){
            return "";
        } else if(leftArrowHover){
            return style.leftHover
        } else if(rightArrowHover){
            return style.rightHover
        }
    }



    return (
        <div className={style.main}>
            <h2>Choose Your Winner!</h2>
            <div 
                className={style.chooseCtr}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ArrowFatLineLeft 
                    size={70} 
                    weight="fill" 
                    className={style.leftArrow}
                    onMouseEnter={handleLeftArrowHover}
                    onMouseLeave={(() => {setLeftArrowHover(false)})}
                    onClick={handleClick}
                />
                <img
                    src={isHovered ? '/images/fight.gif' : 'images/fight.svg'}
                    alt="Animated GIF"
                    width={100}
                    height={100}
                    className={style.gladiator}
                    id={defineId()}
                    />
                <ArrowFatLineRight 
                    size={70} 
                    weight="fill" 
                    className={style.rightArrow}
                    onMouseEnter={handleRightArrowHover}
                    onMouseLeave={() =>{setRightArrowHover(false)}}
                    onClick={handleClick}
                />
            </div>
        </div>
        
    );
}
