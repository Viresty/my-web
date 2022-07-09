import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      return (
        <div className="card">
            <a href="/">
              <img src= {this.props.CardDetail.url} alt={this.props.CardDetail.alt}></img>
            </a>
        </div>
      );
    }
  }

export default Card;