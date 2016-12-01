import { connect, } from 'react-redux';
import { setVisibilityFilter, } from '../actions';

const mapStateToProps = ({ tasksReducer, }, { filter, }) =>
 ({ active: tasksReducer.filter.name === filter, });

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const Link = ({ active, children, actions, filter, }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        actions.setTaskFilter(filter);
      }}
    >
      {children}
    </a>
  );
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
