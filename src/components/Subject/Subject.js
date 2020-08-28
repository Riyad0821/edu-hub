import React from 'react';
import './Subject.css';
const Subject = (props) => {
    //console.log(props);
    const {courseName, instructorName, courseFee, duration,img} =props.subject;
    return (
       <div className="subject">
           <div>
             <img className="course-img" src={img} alt=""/>
           </div>
           <div className="details">

              <h3 className="course-name">{courseName}</h3>
              <p>Instructor: {instructorName}</p>
              
              <p><small>Course Fee: ${courseFee}</small></p>
              <p><small>Duration: {duration}</small></p>
              <button 
                className="main-button"
                onClick ={() =>props.handleAddSubject(props.subject)}
                >
                Enroll Now</button>
           </div>
        </div>
    );
};

export default Subject;