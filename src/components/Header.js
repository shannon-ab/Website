import React, { Component } from 'react';
import Scroll from './Scroll';
import { Link } from 'gatsby';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = (value) => {
    this.setState({ openMenu: value });
  };
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top bg-dark ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" id="#page-top" href="/">
            DS<sup>3</sup>
          </a>
          <button
            onClick={(_) => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="home"
                >
                  <a className="nav-link" href="#home" title="About us">
                    Home
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="about"
                >
                  <a className="nav-link" href="#about" title="About us">
                    About
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="events"
                >
                  <a className="nav-link" href="#events" title="Events">
                    Events
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team" title="Meet the Team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="contact"
                >
                  <a className="nav-link" href="#contact" title="Get in touch">
                    Contact
                  </a>
                </Scroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
