import React from 'react';
import { useDispatch } from 'react-redux';
import { boundSelectCourse, boundUnSelectCourse } from './actions/courseActionCreators'; // Import your bound actions

function MyComponent() {
  const dispatch = useDispatch();

  // Use bound actions
  const handleSelectCourse = boundSelectCourse(dispatch); // This returns a function to be called with the index
  const handleUnselectCourse = boundUnSelectCourse(dispatch); // Similarly, this returns a function

  // Example of using the actions
  const onCourseSelect = () => {
    handleSelectCourse(1); // Dispatching the selectCourse action with index 1
  };

  const onCourseUnselect = () => {
    handleUnselectCourse(1); // Dispatching the unSelectCourse action with index 1
  };

  return (
    <div>
      <button onClick={onCourseSelect}>Select Course</button>
      <button onClick={onCourseUnselect}>Unselect Course</button>
    </div>
  );
}

export default MyComponent;
