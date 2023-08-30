import styles from '@/styles/jokebox.module.css'
import { useEffect, useState } from 'react'
import { JokeApi } from '@/services/JokeApiService';

export default function JokeBox() {

  //------------------------ STATE DECLARATIONS 
  const [jokeCouple, setJokeCouple] = useState();

  //--------------------------API REQUESTS

  const getJokes = async() =>{
    const response = await JokeApi.getTwojokes();
    response && setJokeCouple(response)
  }

  //-------------------------EFFECTS DECLARATIONS

  useEffect(() =>{
    getJokes()
  },[])

  return (
    <main>
      <h1>hello World!</h1>
    </main>
  )
}
