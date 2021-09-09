import React, { useState } from "react";
import "../assets/style/App.scss"


import { AppRouter } from "../routes/AppRoutes"
import { EventContext } from "./EventContext";
export const App = () => {
  const [scroll, setScroll] = useState(0)

  document.onscroll = function() {
    setScroll(window.scrollY)
  };

  return (
    <EventContext.Provider value={{
      scroll,
      setScroll
    }}>
      <div>
        <AppRouter />
      </div>
    </EventContext.Provider>
  )
}
