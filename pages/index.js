import Head from 'next/head'

import styles from './index.css'

// import { hsluvToHex } from 'hsluv'
// const colors = Array.from({length: 20}).map((_, i) => hsluvToHex([360 / 10 * i, 100, 75]))
// console.log(colors)

const colors = [
  "#ff9cb1", "#ffa360", "#d4b800", "#92ca00", "#00d384",
  "#00cfc0", "#00caea", "#94b9ff", "#d9a3ff", "#ff95e1",
  "#ff9cb1", "#ffa360", "#d4b800", "#92ca00", "#00d384",
  "#00cfc0", "#00caea", "#94b9ff", "#d9a3ff", "#ff95e1"
]
const color = colors[Math.floor(Math.random() * colors.length)]

const Index = () => (
  <>
    <Head>
      <title>The Entire Robot :: Electronic Funk Jazz Whatever</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="icon" href="/static/favicon.png"></link>
      <script src='https://kit.fontawesome.com/6e08304a81.js' crossorigin='anonymous'></script>
      <style>{`
        :root {
          --primaryColor: ${color} !important;
        }
      `}</style>
    </Head>
    <div className={styles.content}>
      <header className={styles.header}>
        <h1 className={styles.title} data-title='The Entire Robot'>The Entire Robot</h1>
        <h2 className={styles.subtitle}>
          Electronic Funk Jazz Whatever by <span className='nowrap'>“Cowboy” Ben Alman</span>
        </h2>
      </header>
      <footer className={styles.footer}>
        <ul>
          <li>
            <a href='https://www.youtube.com/channel/UCFaB1HnL2RgFgD6v9MSgv2Q'>
              <i className='fab fa-youtube' />
              YouTube
            </a>
          </li>
          <li>
            <a href='https://www.twitch.tv/theentirerobot'>
              <i className='fab fa-twitch' />
              Twitch
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/TheEntireRobot/'>
              <i className='fab fa-facebook' />
              Facebook
            </a>
          </li>
          <li>
            <a href='https://twitter.com/TheEntireRobot'>
              <i className='fab fa-twitter' />
              Twitter
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/theentirerobot/'>
              <i className='fab fa-instagram' />
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </>
)

export default Index