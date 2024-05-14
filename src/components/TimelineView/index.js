// Write your code here
import React from 'react'
import { Chrono } from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = ({ timelineItemsList }) => {
  return (
    <>
      <h1 className="app-heading-1">
        MY JOURNEY OF <br /> <br />
        <span className="app-heading-2">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{ secondary: 'white' }}
        >
          {timelineItemsList.map(item => {
            return item.categoryId === 'COURSE' ? (
              <CourseTimelineCard key={item.id} timelineDetails={item} />
            ) : (
              <ProjectTimelineCard key={item.id} timelineDetails={item} />
            )
          })}
        </Chrono>
      </div>
    </>
  )
}

export default TimelineView
