import * as React from 'react'
import Head from 'next/head'
import { TwitchPlayer } from 'react-twitch-embed'
import cx from 'classnames'

import styles from './index.module.css'

// import { hsluvToHex } from 'hsluv'
// const colors = Array.from({length: 20}).map((_, i) => hsluvToHex([360 / 10 * i, 100, 75]))
// console.log(colors)

const hypnoGifCount = 4
const hypnoGif = `/static/hypno-${
  Math.floor(Math.random() * Math.floor(hypnoGifCount)) + 1
}.gif`

const LogoIcon = ({ name, className, children }) => (
  <span className={cx(styles.logoIcon, className)}>
    <span className={styles.logoIconText}>
      <span className={styles.logoIconTextInner}>{children}</span>
    </span>
    <i className={cx('fab', name)}></i>
    <i className={cx('fab', name)}></i>
  </span>
)

const Index = ({ channel = 'theentirerobot' }) => {
  const [isOnline, setOnlineState] = React.useState(false)
  const setOnline = () => setOnlineState(true)
  const setOffline = () => setOnlineState(false)

  const player = React.createRef()
  const stopPlaying = () => player.current?.pause()

  return (
    <>
      <Head>
        <title>The Entire Robot :: Electronic Jazz Funk Whatever</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/static/favicon.png"></link>
        <style>{`
        :root {
          --hypnoAnimation: url(${hypnoGif});
        }
      `}</style>
      </Head>
      <div
        className={cx(
          styles.layout,
          isOnline ? styles.isOnline : styles.isOffline
        )}
      >
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <h1
              className={styles.title}
              data-title="The Entire Robot"
              // onClick={() => setOnlineState(s => !s)}
            >
              The Entire Robot
            </h1>
          </div>
        </header>
        <section className={styles.content}>
          <div className={styles.twitch}>
            <div className={styles.twitchInner}>
              <div className={styles.twitchInner2}>
                {channel && (
                  <TwitchPlayer
                    channel={channel}
                    width="100%"
                    height="100%"
                    onOnline={setOnline}
                    onOffline={setOffline}
                    onReady={p => {
                      player.current = p
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerLeft}>
              <div className={styles.offlineFooter}>
                <h2 className={styles.offlineSubtitle}>
                  Electronic Jazz Funk Whatever by{' '}
                  <span className="nowrap">“Cowboy” Ben Alman</span>
                </h2>
              </div>
              <div className={styles.onlineFooter}>
                <h2 className={styles.onlineSubtitle}>
                  Electronic Jazz Funk Whatever by{' '}
                  <span className="nowrap">“Cowboy” Ben Alman</span>
                </h2>
                <a
                  className={styles.liveTwitchLink}
                  href="https://www.twitch.tv/theentirerobot"
                  onClick={stopPlaying}
                >
                  The Entire Robot is currently streaming! Click here to watch
                  and chat live on Twitch!
                </a>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <ul>
                <li>
                  <a href="https://www.twitch.tv/theentirerobot">
                    <LogoIcon name="fa-twitch" className={styles.twitchIcon}>
                      Twitch
                    </LogoIcon>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/TheEntireRobot">
                    <LogoIcon name="fa-youtube-square">YouTube</LogoIcon>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/theentirerobot/">
                    <LogoIcon name="fa-instagram">Instagram</LogoIcon>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/TheEntireRobot">
                    <LogoIcon name="fa-twitter-square">Twitter</LogoIcon>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/TheEntireRobot/">
                    <LogoIcon name="fa-facebook-square">Facebook</LogoIcon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Index
