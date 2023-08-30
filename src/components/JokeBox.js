import style from '@/styles/jokebox.module.css'
import { useEffect, useState } from 'react'
import { JokeApi } from '@/services/JokeApiService';
import FightButton from './FightButton';
import Image from 'next/image';

export default function JokeBox() {

  //------------------------ STATE DECLARATIONS 
  const [jokeCouple, setJokeCouple] = useState();
  const [joke1, setJoke1] = useState();
  const [joke2, setJoke2] = useState();

  //--------------------------API REQUESTS

  const getJokes = async() =>{
    const response = await JokeApi.getTwojokes();
    response && setJokeCouple(response)
  }

  //-------------------------EFFECTS DECLARATIONS

  useEffect(() =>{
    getJokes()
  },[])

  useEffect(() =>{
    if(jokeCouple){
      setJoke1(jokeCouple[0].joke);
      setJoke2(jokeCouple[1].joke);
    }
    
  }, [jokeCouple])

  return (
    <section className={style.jokeBox}>
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
      
      <FightButton getJokes={getJokes} />

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
      
    </section>
  )
}
