import './index.css'

const EventItem = props => {
  const {eachItem, renderRegistration} = props
  const {imageUrl, name, location, registrationStatus} = eachItem
  const onClickRegister = () => {
    console.log('clicked')
    renderRegistration(registrationStatus)
  }
  return (
    <li
      style={{
        listStyle: 'none',
        color: '#ffffff',
        margin: '10px',
      }}
    >
      <button
        type="button"
        style={{backgroundColor: '#3a4b63', borderWidth: '0px'}}
      >
        <img
          src={imageUrl}
          alt="event"
          onClick={onClickRegister}
          className="image"
        />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
