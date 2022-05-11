import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import classnames from 'classnames'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [video, setVideo] = useState<HTMLVideoElement|null>();
  const [videoEnded, setVideoEnded] = useState<boolean>(false);
  if (video) {
    video.onended = (endedEvent) => setVideoEnded(true);
  }
  useEffect(() => {
    const video = document?.querySelector('video');
    setVideo(video);
  }, [video])
  return (
    <div className={styles.container}>
        <video
          className={classnames(styles.video, {
            [styles.hideVideo]: videoEnded
          })}
          playsInline
          autoPlay
          muted
          poster="https://images.unsplash.com/photo-1620222071550-a5c7f8b600ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMDY4NDIyNA&ixlib=rb-1.2.1&q=80&w=400"
        >
          <source
            type="video/mp4"
            src="https://cdn.videvo.net/videvo_files/video/free/2019-07/large_watermarked/Raw_Vegan_Blueberry_Cake_Cut_Birthday_Cooking_preview.mp4"
          />
          <source
            src="https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/Raw_Vegan_Blueberry_Cake_Cut_Birthday_Cooking_preview.webm"
            type="video/webm"
          />
        </video>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
