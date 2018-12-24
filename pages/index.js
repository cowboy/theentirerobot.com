const Index = () => (
  <div>
    <div id="content-bg">
      <div id="content">
        <header>
          <h1>The Entire Robot</h1>
          <h2>The music of “Cowboy” Ben Alman.</h2>
        </header>
        <footer>
          <p>
            <a href="https://www.youtube.com/channel/UCFaB1HnL2RgFgD6v9MSgv2Q">Subscribe on YouTube</a>
            {' | '}
            <a href="https://www.facebook.com/TheEntireRobot/">Like on Facebook</a>
          </p>
        </footer>
      </div>
    </div>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Bungee+Outline|Roboto|Open+Sans');
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        background-image: url('/static/wires-min.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        font-family: 'Roboto', sans-serif;
        font-family: 'Open Sans', sans-serif;
      }
    `}</style>
    <style jsx>{`
      #content-bg {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
        text-shadow: 4px 4px 8px #000;
        color: #fff;
      }

      #content {
        padding: 1.5rem;
      }

      header {
        color: #68d4c0;
      }

      header > :first-child {
        margin-top: 4rem;
      }

      h1 {
        font-family: 'Bungee Outline', cursive;
        font-weight: 700;
        font-size: 4rem;
        margin-bottom: 0;
      }

      h2 {
        font-size: 1rem;
      }

      footer {
        text-align: right;
        margin-top: 4rem;
      }

      footer > :last-child {
        margin-bottom: 0;
      }

      p {
        font-size: 1rem;
      }

      a {
        text-decoration: none;
        color: #ffaa00;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
)

export default Index