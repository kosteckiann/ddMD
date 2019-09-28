import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
    console.log(course)
    const rows = () => course.parts.map(courses =>
        <div key={courses.id}>
            {courses.name} {courses.exercises}
        </div>
        )
    return (

        rows()

        

    )
}
      
const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }

    return (
      <div>
        <h1>{course.name}</h1>
        <Course course={course} />
      </div>
    )
  }

  ReactDOM.render(<App />, document.getElementById('root'))