import React, { Component } from 'react';
import logo from './../logo.svg';

class Header extends Component {
    constructor(props) {
      super(props);
      this.toggleNavBar = this.toggleNavBar.bind(this);
      this.state = {
        NavItems: [
            {name: 'Home',
             link: '/'},
            {name: 'Play',
             link: '/play'},
            {name: 'Library',
             link: '/library'},
          ],
        MoreItem: [
            {name: '',
             link: ''},
        ]
      }
    }

    toggleNavBar() {
      document.getElementById('NavBar-Collapsed').classList.toggle('hidden')
      if (document.getElementById('header-container').style.backgroundColor == '') {
        document.getElementById('header-container').style.backgroundColor = '#282c34c4';
      } else if (document.getElementById('header-container').style.backgroundColor == 'rgba(40, 44, 52, 0.77)') {
        document.getElementById('header-container').style.backgroundColor = '';
      }
    }

    render() {
      const NavItems = this.state.NavItems.map((item) => {
        return <li><a id={item.name+'NavLinkItem'} href={item.link}>{item.name}</a></li>
      });

      return (
        <div className='container' id="header-container">
          <div className="content" id="header-content">
            <header className="header">
              <a href='/'><img src={logo} id="App-logo" alt="logo" /></a>
              <div className='NavBar'>
                <ul>
                  {NavItems}
                  <li>
                    <button>
                      More <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                  </li>
                </ul>
                <a id='login-button' href='/login'>Login</a>
                <button id='NavBarCollapseBtn' onClick={this.toggleNavBar}>
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
              </div>
            </header>
          </div>
          <div className='content hidden' id='NavBar-Collapsed'>
            <ul>
              {NavItems}
            </ul>
          </div>
        </div>
      );
    }
  }

export default Header;