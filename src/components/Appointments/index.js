// Write your code here
import {Component} from 'react'

import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date1: '', activeId: false, appointmentsList: []}

  ontoggle = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  getStarButton = () => {
    const {activeId} = this.state
    const getOppositeValue = !activeId
    this.setState({activeId: getOppositeValue})
  }

  OnTextChange = event => {
    const newLink = event.target.value
    this.setState({title: newLink})
  }

  OnDescriptionChange = event => {
    const newLink = event.target.value
    this.setState({date1: newLink})
  }

  onAdding = event => {
    event.preventDefault()
    const {title, date1} = this.state
    const newAppointment = {id: uuidv4(), title, date1, isLiked: false}
    if (title !== '' && date1 !== '') {
      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        title: '',
        date1: '',
      }))
    }
  }

  render() {
    const {appointmentsList, title, date1, activeId} = this.state
    // eslint-disable-next-line no-undef
    const newAppointmentsList = activeId
      ? appointmentsList.filter(each => each.isLiked === true)
      : appointmentsList
    const buttonClassTo = !activeId
      ? 'star-button'
      : 'star-button new-change-style'
    return (
      <div className="app-container">
        <div className="main-card">
          <div className="input-and-image-containing-card">
            <div>
              <h1 className="main-heading">Add Appointment</h1>
              <form onSubmit={this.onAdding}>
                <label htmlFor="input-text">TITLE</label>
                <br />
                <input
                  value={title}
                  onChange={this.OnTextChange}
                  placeholder="Title"
                  id="input-text"
                  className="input"
                  type="text"
                />
                <br />
                <label htmlFor="input-date">DATE</label>
                <br />
                <input
                  value={date1}
                  onChange={this.OnDescriptionChange}
                  placeholder="dd/mm/yyyy"
                  id="input-date"
                  className="input"
                  type="date"
                />
                <br />
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              className="main-image"
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <hr className="line" />
          <div className="appointments-list">
            <h3>Appointments</h3>
            <button
              onClick={this.getStarButton}
              className={buttonClassTo}
              type="button"
            >
              starred
            </button>
          </div>
          <ul className="un-ordered-list">
            {newAppointmentsList.map(each => (
              <AppointmentItem
                key={each.id}
                ontoggle={this.ontoggle}
                itemDetails={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
