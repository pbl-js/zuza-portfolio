import React, { createContext, useState, useCallback } from "react"

export const ActiveTopicsContext = createContext()

const ActiveTopicsContextProvider = props => {
  const [activeTopics, setActiveTopics] = useState("primary")

  const addActiveTopics = topic => {
    if (activeTopics.indexOf(topic) === -1) {
      return setActiveTopics(prevState => [...prevState, topic])
    } else {
      const updateTopics = activeTopics.filter(item => item !== topic)
      return setActiveTopics(updateTopics)
    }
  }

  return (
    <ActiveTopicsContext.Provider
      value={{ activeTopics, addActiveTopics, setActiveTopics }}
    >
      {props.children}
    </ActiveTopicsContext.Provider>
  )
}

export default ActiveTopicsContextProvider
