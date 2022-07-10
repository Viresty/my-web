import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      return (
          <a href="/" className="card">
            <img src= {this.props.CardDetail.url} alt={this.props.CardDetail.alt}></img>
          </a>
      );
    }
  }

export default Card;