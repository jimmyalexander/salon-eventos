import React from "react"
import { Principal } from "../components/Principal"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "../assets/style/App.scss"
import { Agenda } from "../components/Agenda"
import { Layout } from "../components/Layout"
import { NotFound } from "../components/NotFound"
export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/salon-eventos" component={Principal} />
          <Route exact path="/salon-eventos" component={Principal} />
          <Route exact path="/salon-eventos/agenda" component={Agenda} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
