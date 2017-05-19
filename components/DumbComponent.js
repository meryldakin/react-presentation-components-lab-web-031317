import React from 'react'
class DumbComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }

  handleClick(e){
    if (this.state.mood === "happy"){
      this.setState({
        mood: "sad"
      })
    } else {
      this.setState({
        mood: "happy"
      })
    }
  }

  render(){
    console.log('this is rendered')
    return (
      <div onClick={this.handleClick.bind(this)}>
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}
export default DumbComponent
