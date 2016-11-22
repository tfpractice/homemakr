const getNeeds = ({ needs } = {
  needs: [],
}) => needs;

const isWrapped = ({
    WrappedComponent = null,
}) => WrappedComponent;

const compNeeds = component => isWrapped(component)
    ? getNeeds(component.WrappedComponent)
    : getNeeds(component);

const needsArray = (prev = [], next) => [
  ...prev,
  next,
];

const fetchComponentData = (dispatch, components, params) => {
    // const needs = components.reduce((prev, current) => {     return current   ?
    // (compNeeds(current) || []).concat(prev)         : prev;   }, []);
    
    const needs = components.map(getNeeds).reduce(needsArray, []);
    const promises = needs.map(need => dispatch(need(params)));
    
    return Promise.all(promises);
  };

export default fetchComponentData;
