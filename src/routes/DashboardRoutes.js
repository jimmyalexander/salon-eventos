import React from 'react'
import {  Route, Switch } from 'react-router-dom'
import { Agenda } from '../components/Agenda'
import { Layout } from '../components/Layout'
import { NotFound } from '../components/NotFound'
import { Principal } from '../components/Principal'

export const DashboardRoutes = ({isAuthenticated}) => {
  return (
   
     <div>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/salon-eventos" component={Principal} />
            <Route exact path="/salon-eventos/agenda" component={Agenda} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Layout>
      </div>
    </div>
   

   
  )
}



