const module = 'test'

export const FETCH_TRIPS = `${module}/FETCH_TRIPS`
export const FETCH_TRIPS_SUCCEEDED = `${module}/FETCH_TRIPS_SUCCEEDED`
export const FETCH_TRIPS_FAILED = `${module}/FETCH_TRIPS_FAILED`
export const SET_SELECTED_TRIP_ID = `${module}/SET_SELECTED_TRIP_ID`
export const RESET_SELECTED_TRIP_ID = `${module}/RESET_SELECTED_TRIP_ID`
export const RESERVATED_SEATS = `${module}/RESERVATED_SEATS`

const defaultState = {}

export default function reducer(testState = defaultState, action = {}) {
  // const {type, payload} = action
  switch (action.type) {
    // case FETCH_TRIPS:
    //   return tripsState
    //     .set('isLoading', true)
    //     .set('error', null)
    default:
      return testState
  }
}

export const fetchTrips = () => ({
  type: FETCH_TRIPS,
})

export const fetchTripsSucceed = data => ({
  type: FETCH_TRIPS_SUCCEEDED,
  payload: data,
})

export const fetchTripsFailed = error => ({
  type: FETCH_TRIPS_FAILED,
  payload: error,
})

export const setSelectedTripId = id => ({
  type: SET_SELECTED_TRIP_ID,
  payload: id,
})

export const resetSelectedTripId = () => ({
  type: RESET_SELECTED_TRIP_ID,
})

export const reservationSeats = (id, value) => ({
  type: RESERVATED_SEATS,
  payload: { id, value },
})
