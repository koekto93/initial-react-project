import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'

import MainPage from './MainPage'
import SecondPage from './SecondPage'

import { Container } from './styled'

class Pages extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Redirect from="/" exact to="/mainPage" />
          <Route path="/mainPage" component={MainPage} />
          <Route path="/secondPage" component={SecondPage} />
          {/* <Route path="/trips" exact component={Trips} />
                    <Route path="/trips/:id" component={TripDetails} />
                    <Route path="/aboutme" component={AboutMe} />
                    <Route path="/aboutro" component={AboutRO} />
                    <Route path="/payment" component={Payment} />
                    <Route component={NotFound} /> */}
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = () => ({})

export default withRouter(connect(mapStateToProps)(Pages))
