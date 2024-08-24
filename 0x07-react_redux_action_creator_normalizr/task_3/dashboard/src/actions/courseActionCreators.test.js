import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Action Creators', () => {
  it('selectCourse should return the correct action', () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('unSelectCourse should return the correct action', () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
