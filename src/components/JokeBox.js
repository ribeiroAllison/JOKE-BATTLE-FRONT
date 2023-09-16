import style from '@/styles/jokebox.module.css'
import { useEffect, useState } from 'react'
import { JokeApi } from '@/services/JokeApiService';
import { Dads, JokeBook } from '@/services/ApiService';
import FightButton from './FightButton';
import JokeTable from './JokeTable';
import { ToastContainer , toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Image from 'next/image';

export default function JokeBox() {

  //------------------------ STATE DECLARATIONS 
  const [jokeCouple, setJokeCouple] = useState();
  const [joke1, setJoke1] = useState();
  const [joke2, setJoke2] = useState();
  const [dadsScores, setDadsScores] = useState();
  const [topJokesList, setTopJokesList] = useState();


  // TOAST SETUP
  const notifyFailure = (msg) => toast.error(msg);

  //--------------------------API REQUESTS

  const getJokes = async() =>{
    try{
      const response = await JokeApi.getTwojokes();
      response && setJokeCouple(response)
    } catch(error){
      notifyFailure('Could not retrieve jokes, please reload page')
    }
    
  }

  const getDadsScores = async() =>{
    try{
      const response = await Dads.fetchDadsScores();
      if(response){
        setDadsScores(response)
        setSteveScore(response[0].score)
      }
      
    } catch(error){
      console.log(error.data)
    }
    
  }

  const getTopJokes = async () =>{
    try{
        const response =  await JokeBook.getTopJokes();

        if(response){
            setTopJokesList(response)
        }

    } catch(error){
        console.log(error)
    }
}
  // const resetJokes = async () =>{
  //   const jokeList = await JokeBook.getAllJokes();
 

  //   if(jokeList){
  //     for (let joke of jokeList){
  //       await JokeBook.deleteJoke(joke.id)
  //     }
  //   }
    
  // }

  //-------------------------EFFECTS DECLARATIONS

  useEffect(() =>{
    getJokes()
    getDadsScores()
    getTopJokes()
    // resetJokes()
  },[])

  useEffect(() =>{
    if(jokeCouple){
      setJoke1(jokeCouple[0].joke);
      setJoke2(jokeCouple[1].joke);

    }
    
  }, [jokeCouple])

  return (
    <>
    <ToastContainer autoClose={3000} />
    <section className={style.jokeBox}>
      <div className={style.contenderFrame}>
        <div className={style.contenderCtr}>
          <div className={style.charCtr}>
            <Image 
              src="/images/ted.png" 
              width={300}
              height={300}
            />
            
            <div className={style.ballon}>
              <Image 
                src="/images/speach_ballon.png"
                width={300}
                height={230}
              />
              {
                jokeCouple &&
                <p>{joke1}</p>
              }
            </div> 
          </div>
        </div>
        <h3>{`Score: ${dadsScores && dadsScores[1].score}`}</h3>
      </div>
      
      
      <FightButton 
        getJokes={getJokes} 
        getDadsScores={getDadsScores}
        getTopJokes={getTopJokes}
        joke1={joke1}
        joke2={joke2}
      />
      <div className={style.contenderFrame}>
        <div className={style.contenderCtr} id={style.contender2}>
          <div className={style.charCtr}>
            <Image 
              src="/images/steve.png" 
              width={300}
              height={300}
            />
            
            <div className={style.ballon} id={style.ballonRight}>
              <Image 
                src="/images/speach_ballon.png"
                width={300}
                height={230}
              />
              {
                jokeCouple &&
                <p>{joke2}</p>
              }
            </div>
            
          </div>
          
        </div>

      <h3>{`Score: ${dadsScores && dadsScores[0].score}`}</h3>
      </div>
    </section>
    <JokeTable topJokesList={topJokesList}/>
    </>
    
  )
}
