import React, { Component } from 'react';

import Card from './card';

class List extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      const ListItems = this.props.ListItems.map((item) => {
        return <li>
                  <Card CardDetail={item} />
                </li>
      });
      return (
        <div className="list-card">
          <h1 className="list-title">{this.props.title}</h1>
          <p className="list-detail">{this.props.detail}</p>
          <ul>
              {ListItems}
          </ul>
        </div>
      );
    }
  }
export default List;