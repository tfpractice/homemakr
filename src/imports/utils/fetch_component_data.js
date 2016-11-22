const getNeeds = ({ needs } = { needs: [] }) => needs;

const isWrapped = ({ WrappedComponent = null }) => WrappedComponent;

const compNeeds = component => isWrapped(component)
    ? getNeeds(component.WrappedComponent)
    : getNeeds(component);

const flatten = (prev = [], next = []) => [ ...prev, ...next ];

const fetchComponentData = (dispatch, components, params) => {
  const needs = components.map(compNeeds).reduce(flatten, []);
  // console.log('=============components ARRAY==========', components);
  // console.log('=============params ARRAY==========', params);
  // console.log('=============NEEDS ARRAY==========', needs);
  const promises = needs.map(need => Promise.resolve(dispatch(need(params))));
  return Promise.all(promises);
};

export default fetchComponentData;
