import React, { Component } from 'react'
import CustomCard from './components/CustomCard'
import Papers from './components/Papers'

class App extends Component {
  render() {
    return (
      <div>
        <Papers />
        <CustomCard
          title="title"
          text="text"
          imageUrl="http://lorempixel.com/280/280/nature/"
        />
      </div>
    )
  }
}

export default App