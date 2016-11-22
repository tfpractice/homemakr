const getNeeds = ({ needs } = {
  needs: [],
}) => needs;

const isWrapped = ({
    WrappedComponent = null,
}) => WrappedComponent;

const compNeeds = component => isWrapped(component)
    ? getNeeds(component.WrappedComponent)
    : getNeeds(component);

const flatten = (prev = [], next = []) => [ ...prev, ...next ];

const fetchComponentData = (dispatch, components, params) => {
    // const needs = components.reduce((prev, current) => {     return current   ?
    // (compNeeds(current) || []).concat(prev)         : prev;   }, []);
  console.log('=============components ARRAY==========');
  console.log(components);
  console.log('=============params ARRAY==========');
  console.log(params);
  const needs = components.map(compNeeds).reduce(flatten, []);
  console.log('=============NEEDS ARRAY==========');
  console.log(needs);
  const promises = needs.map(need => Promise.resolve(dispatch(need(params))));
  console.log('=============Promise ARRAY==========');
  console.log(promises);
  return Promise.all(promises);
};

export default fetchComponentData;
