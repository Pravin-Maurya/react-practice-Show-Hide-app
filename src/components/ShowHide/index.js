// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onShowFirstName = () => {
    const {firstName} = this.state
    if (firstName === true) {
      this.setState({firstName: false})
    } else {
      this.setState({firstName: true})
    }
  }

  onShowLastName = () => {
    const {lastName} = this.state
    if (lastName === true) {
      this.setState({lastName: false})
    } else {
      this.setState({lastName: true})
    }
  }

  render() {
    const {firstName, lastName} = this.state
    let showFirstName = null
    let showLastName = null
    if (firstName === true) {
      showFirstName = (
        <div className="first-name">
          <p>Joe</p>
        </div>
      )
    }
    if (lastName === true) {
      showLastName = (
        <div className="last-name">
          <p>Jonas</p>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <h1 className="show-heading">Show/Hide</h1>
        <div className="btn-container">
          <div className="btn-card">
            <button
              className="name-btn"
              type="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide FirstName
            </button>
            {showFirstName}
          </div>
          <div className="btn-card">
            <button
              className="name-btn"
              type="button"
              onClick={this.onShowLastName}
            >
              Show/Hide LastName
            </button>
            {showLastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
