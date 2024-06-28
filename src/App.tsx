import './App.css'
import Button from './Button.tsx';

function App() {
  return (
    <div className="App">
      <div className="Home">
        <div className="Layout">
          <section className="Home__section">
            <div className="HomeHeader">
              <h1 className="HomeHeader__inner">
                James Spence
              </h1>
            </div>
            <p className="Home__copy">
              I’m a&nbsp;
              <a href="https://en.wikipedia.org/wiki/Cream_City_brick" rel="noopener noreferrer" target="_blank">Cream
                City</a>
              &nbsp;coder who loves solving problems in the Greater Milwaukee area. I’m passionate about programming in
              all its facets and
              forms, and I’m always pushing onward to the next challenge.
            </p>
            <ul className="Home__links">
              <li className="HomeLink">
                <Button link="https://github.com/jamesaspence">
                  Github
                </Button>
              </li>
              <li className="HomeLink">
                <Button link="https://www.linkedin.com/in/jamesaspence20/">
                  LinkedIn
                </Button>
              </li>
              <li className="HomeLink">
                <Button link="https://twitter.com/spantzbaybee">
                  Twitter
                </Button>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
