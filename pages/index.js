import Head from 'next/head'
import classnames from 'classnames'

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
      <title>The Entire Robot</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
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
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <a className={classnames('symbol', styles.link)}
              title='circleyoutube'
              href='https://www.youtube.com/channel/UCFaB1HnL2RgFgD6v9MSgv2Q'
            >
              Videos
            </a>
          </li>
          <li className={styles.footerItem}>
            <a className={classnames('symbol', styles.link)}
              title='circlefacebook'
              href='https://www.facebook.com/TheEntireRobot/'
            >
              Updates
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </>
)

export default Index