import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registration} = props
  console.log(registration)
  return (
    <div>
      {registration === 'REGISTERED' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            style={{height: '300px'}}
          />
          <h1>You have already registered for the event</h1>
        </div>
      )}
      {registration === 'REGISTRATIONS_CLOSED' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '100px',
          }}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            style={{height: '300px'}}
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen the registration soon!</p>
        </div>
      )}
      {registration === 'YET_TO_REGISTER' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px',
          }}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="RegistrationImg"
          />
          <p>
            A live performance brings so much to your relationship with dance
          </p>
          <button
            type="button"
            style={{
              backgroundColor: '#0967d2',
              height: '30px',
              color: 'white',
              borderWidth: '0px',
              borderRadius: '10px',
              margin: '10px',
            }}
          >
            Register Here
          </button>
        </div>
      )}
    </div>
  )
}

export default ActiveEventRegistrationDetails
