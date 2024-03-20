import { Link } from 'react-router-dom';

export default function Navigation(props) {
  return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <h3 className="navbar-brand logo" href="#">Newbie Oct 16 2023</h3>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li data-testid="home-icon"><Link to="/">Home</Link></li>
              <li data-testid="about-icon"><Link to="/about">About</Link></li>
              <li data-testid="connect-icon"><Link to="/connect">Connect</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}