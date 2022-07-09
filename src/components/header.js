import React, { Component } from 'react';
import logo from './../logo.svg';

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        NavItems: [
            {name: 'Home',
             link: '/'},
            {name: 'Play',
             link: '/play'},
            {name: 'Library',
             link: '/library'},
            {name: 'Login',
             link: '/login'},
          ]
      }
    }

    render() {
      const NavItems = this.state.NavItems.map((item) => {
        return <li><a href={item.link}>{item.name}</a></li>
      });
      return (
        <div className='container' id="header-container">
          <div className="content" id="header-content">
            <header className="header">
              <img src={logo} className="App-logo" alt="logo" />
              <ul>
                {NavItems}
              </ul>
            </header>
          </div>
        </div>
      );
    }
  }

export default Header;