import React, { Component } from 'react';
import { AppRoutes } from './AppRoutes';

class App extends Component {
  componentDidMount() {
    var scrTop = document.querySelectorAll('.scrolltop');
    for (let i = 0; i < scrTop.length; i++) {
      scrTop[i].addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log('entered')
      })
    }
  }
  render() {
    return (
      <>
        <AppRoutes />
      </>
    );
  }
}

export default App;
