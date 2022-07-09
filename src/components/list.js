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
            <ul>
                {ListItems}
            </ul>
        </div>
      );
    }
  }
export default List;