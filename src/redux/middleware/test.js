import { all } from 'redux-saga/effects'

function* test() {
  yield all([
    // takeEvery(FETCH_TRIPS, function*() {
    //     try {
    //         const data = yield call(apiGetTrips)
    //         yield put(fetchTripsSucceed(data));
    //     } catch(error) {
    //         yield put(fetchTripsFailed(serverError));
    //     }
    // })
  ])
}

export default test
