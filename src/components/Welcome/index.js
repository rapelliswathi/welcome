// Write your code here
import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {isLoggedIn: true}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button className="button">Subscribed</button>
    }
    
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        <button className="button">Subscribe</button>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App
