const module = 'test'

export const FETCH_TRIPS = `${module}/FETCH_TRIPS`
export const FETCH_TRIPS_SUCCEEDED = `${module}/FETCH_TRIPS_SUCCEEDED`
export const FETCH_TRIPS_FAILED = `${module}/FETCH_TRIPS_FAILED`
export const SET_SELECTED_TRIP_ID = `${module}/SET_SELECTED_TRIP_ID`
export const RESET_SELECTED_TRIP_ID = `${module}/RESET_SELECTED_TRIP_ID`
export const RESERVATED_SEATS = `${module}/RESERVATED_SEATS`

// const TripsInfoRecord = Record({
//         id: null,
//         from: "",
//         to: "",
//         date: null,
//         meetingPoint: "",
//         subway: "",
//         destination: "",
//         destinationSubway: '',
//         coordinates: [],
//         seats: 0,
//         coast: 100

// })

// const ReducerState = new Record({
//   trips: new Map({}),
//   selectedTripId: null,
//   isLoading: false,
//   error: null
// });

// const defaultState = new ReducerState()

const defaultState = {}

export default function reducer(testState = defaultState, action = {}) {
  // const {type, payload} = action
  switch (action.type) {
    // case FETCH_TRIPS:
    //   return tripsState
    //     .set('isLoading', true)
    //     .set('error', null)
    // case FETCH_TRIPS_SUCCEEDED:
    //   return tripsState
    //     .set('trips', arrToMap(payload, TripsInfoRecord))
    //     .set('isLoading', false)
    //     .set('error', null)
    // case FETCH_TRIPS_FAILED:
    //   return tripsState
    //     .set('isLoading', false)
    //     .set('error', payload)
    // case SET_SELECTED_TRIP_ID:
    //   return tripsState
    //     .set('selectedTripId', payload)
    // case RESET_SELECTED_TRIP_ID:
    //   return tripsState
    //     .set('selectedTripId', null)
    // case RESERVATED_SEATS:
    //   const {id, value} = payload
    //   return tripsState.updateIn(
    //     ['trips', id],
    //     trip => trip.set('seats', trip.seats - value)
    //   )
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
