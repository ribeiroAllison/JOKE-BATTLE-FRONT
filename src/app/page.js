"use client";
import style from "@/styles/home.module.css"
import JokeBox from '@/components/JokeBox'


export default function Home() {


  return (
    <main className={style.main}>
      <header className={style.header}>
        <h1>ULTIMATE DAD JOKE CHAMPIONSHIP</h1>
        <h2>(all puns intended)</h2>
      </header>
      <JokeBox />
    </main>
  )
}
