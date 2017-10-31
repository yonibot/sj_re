import React, { Component } from 'react';
import { Button } from 'antd';

class Index extends Component {
  render() {
    return (
      <div>
        <Button>Click me!</Button>
        <h1>Hello world.</h1>
      </div>
    )
  }
}

export { Index as default };