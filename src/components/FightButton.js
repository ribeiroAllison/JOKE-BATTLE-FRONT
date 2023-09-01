import { useState } from 'react';
import style from '@/styles/fight.module.css';
import { ArrowFatLinesLeft, ArrowFatLinesRight } from '@phosphor-icons/react';
import { Dads, JokeBook } from '@/services/ApiService';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function FightButton(props) {

    //------------------------------STATE DEFINITION----------------------------
    const [isHovered, setIsHovered] = useState(false);
    const [leftArrowHover, setLeftArrowHover] = useState(false);
    const [rightArrowHover, setRightArrowHover] = useState(false);

    //------------------------------TOAST SETUP-------------------------------------
    const notifyFailure = (msg) => toast.error(msg);

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

    const handleClick = async (name, joke) =>{

        try{
            await Dads.updateDadScore(name);
            await JokeBook.updateJokeScore(joke);
            await JokeBook.addNewJoke(joke)
            
        } catch(error){
            console.log(error);
            notifyFailure('Could not send vote, please try again')
        }
        props.getJokes();
        props.getDadsScores();
        props.getTopJokes()
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
            <ToastContainer autoClose={3000}/>
            <h2>Choose Your Winner!</h2>
            <div 
                className={style.chooseCtr}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ArrowFatLinesLeft 
                    size={70} 
                    weight="fill" 
                    className={style.leftArrow}
                    onMouseEnter={handleLeftArrowHover}
                    onMouseLeave={(() => {setLeftArrowHover(false)})}
                    onClick={() => handleClick('ted', props.joke1)}
                />
                <img
                    src={isHovered ? '/images/fight.gif' : 'images/fight.svg'}
                    alt="Animated GIF"
                    width={100}
                    height={100}
                    className={style.gladiator}
                    id={defineId()}
                    />
                <ArrowFatLinesRight 
                    size={70} 
                    weight="fill" 
                    className={style.rightArrow}
                    onMouseEnter={handleRightArrowHover}
                    onMouseLeave={() =>{setRightArrowHover(false)}}
                    onClick={() => handleClick('steve', props.joke2)}
                />
            </div>
        </div>
        
    );
}
