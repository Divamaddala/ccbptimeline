// Write your code here
import React from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = ({ timelineDetails }) => {
  const { courseTitle, description, duration, tagsList } = timelineDetails

  return (
    <>
      <div className="card-heading-container">
        <h1 className="card-heading">{courseTitle}</h1>
        <div className="card-duration-container">
          <AiFillClockCircle className="card-icon" />
          <p className="card-duration">{duration}</p>
        </div>
      </div>
      <p className="card-description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(tag => (
          <li key={tag.id} className="tag-item">
            <p className="tag-name">{tag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
