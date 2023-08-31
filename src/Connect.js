import social from './img/social.png'
import Feedback from './Feedback'
export default function Connect(props) {
  return (
    <>
      <img alt="social" src={social} className="banner"></img>
      <footer id="connect" className="container-fluid text-center">
        <div className="row">
          <h2>Connect</h2>
          <div className="social">
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="container">
          <Feedback />
        </div>
      </footer>
    </>
  )
}