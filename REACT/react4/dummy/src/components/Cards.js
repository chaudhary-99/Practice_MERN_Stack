import React, { useState } from 'react';
import Card from "./Card.js";
const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  //return you a list of all courses recieved from the api response
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      // Object.values(courses).forEach((courseCategory) => {
      //   courseCategory.forEach((courseData) => {
      //     allCourses.push(courseData);
      //   })
      // })
      // return allCourses;

      courses.map((course)=>{
        allCourses.push(course);
      })

    }
    else{
      //specific category ka data pass krenge
       return courses[category];
    }

  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map((course) => {
          return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />

        })
      }
    </div>
  )
}

export default Cards
