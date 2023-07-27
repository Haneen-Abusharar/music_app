import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [songs, setsongs] = useState([
    {
       title: "song 1",
       artist: "artist 1",
       img_src: "./images/img1.jpg",
       src: "./songs/Måneskin - Beggin ( Testo)_2.mp3",
    },
    {
       title: "song 2",
       artist: "artist 2",
       img_src: "./images/img2.jpg",
       src: "./songs/Young Dumb & Broke Khalid .mp3",
    },
  ]);
  return (
    <>
    <Head>
       <title>Music Application</title>
       <meta name="keywords" content="music, streaming, entertainment"></meta>
     </Head>

    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
          <h1>components here</h1>

    </main>
    </>
  )
}
