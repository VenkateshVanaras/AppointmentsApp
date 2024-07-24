// Write your code here
import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {itemDetails, ontoggle} = props
  const {title, id, isLiked, date1} = itemDetails
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const getToggle = () => {
    ontoggle(id)
  }

  return (
    <li className="list-element">
      <div className="header">
        <p>{title}</p>
        <button
          onClick={getToggle}
          data-testid="star"
          className="sta-button"
          type="button"
        >
          <img alt="star" src={imgUrl} />
        </button>
      </div>
      <p className="date-class">
        Date: {format(new Date(date1), 'dd MMMM yyyy, EEEE')}
      </p>
    </li>
  )
}

export default AppointmentItem
