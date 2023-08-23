import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Player from '@/components/Player/player'
import Search from '@/components/search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [songs, setsongs] = useState([
    {
      title: "Beggin",
      artist: "Måneskin",
      img_src: "/images/begg.jpg",
      src: "./songs/Måneskin - Beggin ( Testo)_2.mp3",
    },
    {
      title: "Young Dumb",
      artist: "Khalid",
      img_src: "/images/young.jpg",
      src: "./songs/Young Dumb & Broke Khalid .mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  return (
    <>
      <Head>
        <title>Music Application</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="music, streaming, entertainment"></meta>
      </Head>

      <main
        className={`min-h-screen p-24 flex ${inter.className}`}
      >
        <Search />
        <Player
          song={songs[currentSongIndex]}
          nextSong={songs[nextSongIndex]}
        />
      </main>
    </>
  )
}
