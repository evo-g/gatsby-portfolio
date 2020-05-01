import React from 'react';
import Helmet from 'react-helmet'
import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import full07 from '../assets/images/fulls/07.jpg'
import full08 from '../assets/images/fulls/08.jpg'
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Grid-sample-site',
    description: 'Uses basic HTML,CSS(grid),JS(creates elements)',
    link: 'https://grid-express.herokuapp.com/',
    alt: 'grid',
    more: 'A fun project that was orginally given to me as a front-end developer test and thought it would be a nice way to showcase some of my talents. Using HTML, CSS, and JavaScript'
  },
  {
    id: '7',
    source: full07,
    thumbnail: thumb07,
    caption: 'Cruz Performance',
    description: 'Uses React, React-Router, Styled-Components, Parcel.js',
    link: 'https://unruffled-einstein-bea7be.netlify.app/',
    more: 'A small site created for a friends business. Got to use React hooks to create a burger menu to navigate around the different pages. Also set up links to direct to call or text business'
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Quiz App',
    description: 'Uses HTML, CSS, JS, Local Storage, and Express',
    link: 'https://js-quick-quiz-app.herokuapp.com/',
    more: 'A quiz app that uses no framework only HTML,CSS,JS. It does a fetch call to Open Trivia Database for random questions. Uses local storage to save the top 5 high scores. Has a simple Express server.'
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Weather App',
    description: 'Uses React, Redux, BootStrap, Axios, Moment.js',
    link: 'https://owa-origin-weather-app.herokuapp.com/',
    more: 'In this project Redux, Axios, Reactjs, promise middleware, was used to create an app to check weather across any city searched. Also stores the history of each city search with the time and date searched using Moment.js to format accordingly.'
  },
  {
    id: '8',
    source: full08,
    thumbnail: thumb08,
    caption: 'E-Store',
    description: 'Uses React, Context API, Styled-Components',
    link: 'https://react-practice-e-store.netlify.com/',
    more: 'As the name implies it is an e-commerce store that is not functional, however, it can be hooked up to paypal through an npm package. It uses react and the context API to keep track of state. Uses a combonation of bootstrap, and styled-components for styling.'
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Movie Finder',
    description: 'Uses React.js, Axios, BootStrap',
    link: 'https://h-hackathon.herokuapp.com/',
    more: 'A search engine for movies, makes two different API calls to find more details on the movie you search. Was made for a school project called Hackathon, in which we have 72 hours to make a Reactjs project from scratch. Uses bootstrap and css for styling and has 2 API calls.'
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Origin Code Academy Mobile App',
    description: 'Group Project uses React-Native, Expo, MongoDB, Redux, Loopback',
    link: 'https://play.google.com/store/apps/details?id=com.oca.OCApp',
    more: 'Disclaimer: The school has shut down and is no longer in the google play store. However, when it was in use it was live. It was a Origin Code Academy mobile application for students to check-in and get information about progress in the program. In this project my group and I are using Expo, React Native, Redux, MongoDB, and loopback to create a mobile friendly replacement for a bar code scanner.'
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Todo App',
    description: 'Uses React, BootStrap',
    link: 'https://compassionate-benz-1ae465.netlify.com/',
    more: 'Very simple to do app. As the name states it lets you organize todos for your daily life. Another project for school which uses Reactjs and bootsrap for styling. Creating this project was anything, but simple. Here state is passed up and down from different class based components.'
  },
]

const HomeIndex = () => {
  const siteTitle = 'Evodio Garcia - Portfolio by Gatsby'
  const siteDescription = 'Evodio Garcia Portfolio'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
            I’m a automotive mechanic turned software developer, who went from breaking down cars to breaking down code.
              <br />
              magna sed accumsan arcu neque.
            </h2>
          </header>
          <p>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
            nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa adipiscing id nisi accumsan
            pellentesque commodo blandit enim arcu non at amet id arcu magna.
            Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate
            lorem neque cubilia.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Projects</h2>

          <Gallery
            images={DEFAULT_IMAGES.map(
              ({ id, source, thumbnail, caption, description, link, more, alt }) => ({
                source,
                thumbnail,
                caption,
                description,
                link,
                alt,
                more
              })
            )}
          />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
            magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
            vulputate lorem neque lorem ipsum dolor.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  619-300-2054
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">evodiog@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
