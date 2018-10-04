// @flow
import * as _ from 'lodash'

export const getCompanyIds = state =>
  _.get(state, ['menuSs', 'companyIds']) || []

export const getPeopleById = (state, id) =>
  _.get(state, ['menuSs', 'ssPeople', id])

export const getCompanyInfoById = (state, id) =>
  _.get(state, ['menuSs', 'companyInfo', id])

export const getScoringById = (state, id) =>
  _.get(state, ['menuSs', 'scoringForAnEmployee', id])
