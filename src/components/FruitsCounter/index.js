// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}
  mangobutton = () => {
    this.setState(prevState => ({mangoes: prevState.count + 1}))
  }
  bananabutton = () => {
    this.setState(prevState => ({bananas: prevState.count + 1}))
  }
  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="theout">
        <div className="insidebox">
          <h1>
            Bob ate <span className="numbers">0</span> mangoes{' '}
            <span className="numbers">0</span> bananas
          </h1>
          <div className="forimages">
            <div className="eachimage">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="imagesettings"
                alt="mango"
              />
              <button className="forbutton" onClick={this.mangobutton}>
                Eat Mango
              </button>
            </div>
            <div className="eachimage">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="imagesettings"
                alt="banana"
              />
              <button className="forbutton" onClick={this.bananabutton}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
