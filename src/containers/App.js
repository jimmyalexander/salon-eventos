import React from "react"
import { Principal } from "../components/Principal"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "../assets/style/App.scss"
import { Agenda } from "../components/Agenda"
import { Layout } from "../components/Layout"
export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/salon-eventos" component={Principal} />
          <Route exact path="/agenda" component={Agenda} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
