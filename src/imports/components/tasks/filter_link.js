import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';

const mapStateToProps = ({ tasksReducer, }, { filter, }) =>
 ({ active: tasksReducer.filter.name === filter, });

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const Link = ({ active, children, actions, filter, href, }) =>
   (
     <a
       href={href}
       onClick={(e) => {
         e.preventDefault();
         return actions.setTaskFilter(filter);
       }}
     >
       {children}
     </a>
  );

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
