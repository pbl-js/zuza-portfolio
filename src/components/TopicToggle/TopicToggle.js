import React from "react"

const TopicToggle = ({ title, addActiveTopics }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={title}
        name={title}
        onClick={() => addActiveTopics(title)}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  )
}

export default TopicToggle
