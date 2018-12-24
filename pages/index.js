import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
      <title>The Entire Robot</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div id="content-bg">
      <div id="content">
        <header>
          <h1>The Entire Robot</h1>
          <h2>Electronic Funk Jazz Whatever by “Cowboy” Ben Alman</h2>
        </header>
        <footer>
          <p>
            <a className='symbol' title='circleyoutube' href="https://www.youtube.com/channel/UCFaB1HnL2RgFgD6v9MSgv2Q">
              Videos
            </a>
            <a className='symbol' title='circlefacebook' href="https://www.facebook.com/TheEntireRobot/">
              Updates
            </a>
          </p>
        </footer>
      </div>
    </div>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Bungee+Outline');
      @import url('/static/monosocialiconsfont/monosocialiconsfont.css');
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        background-color: #000;
        background-image: url('/static/wires-min.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        font-family: 'Mono Social Icons Font';
      }
    `}</style>
    <style jsx>{`
      #content-bg {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8));
        text-shadow: 4px 4px 10px #000;
        color: #fff;
        padding-top: 5em;
      }

      #content {
        padding: 1.5em;
      }

      header {
        color: #68d4c0;
      }

      h1 {
        font-family: 'Bungee Outline', cursive;
        font-weight: 700;
        font-size: 4em;
        margin: 0;
        margin-left: -3px;
        position: relative;
        line-height: 1.2em;
      }

      h2 {
        font-size: 0.9em;
        margin: 0.7em 0 5em;
        line-height: 1.2em;
      }

      p {
        font-size: 1.4em;
        margin: 0;
        line-height: 1.2em;
      }

      a {
        text-shadow: none;
        color: #000;
        background-color: #68d4c0;
        margin-right: 0.5em;
      }

      a:hover {
        background-color: #fff;
      }
    `}</style>
  </div>
)

export default Index