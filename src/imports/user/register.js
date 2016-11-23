// import React, { PropTypes } from 'react';
// import { reduxForm, reset, Field } from 'redux-form';
// import FlatButton from 'material-ui/FlatButton';
// import { Checkbox, TextField, Toggle } from 'redux-form-material-ui';
//
// const RegisterForm = ({ handleSubmit }) => (
//   <form onSubmit={handleSubmit}>
//     <Field name="username" component={TextField} hintText="username" />
//     <Field name="name" component={TextField} hintText="name" />
//     <Field name="email" component={TextField} hintText="email" />
//     <Field name="password" component={TextField} type="password" label="password" />
//     <Field name="completed" component={Checkbox} label="Is it done?" />
//     <FlatButton label="submit" type="submit" />
//   </form>
// );
//
// const Register = ({ user }) => (
//   <div className="registration">
//     <RegisterForm
//       form={'newRegisterForm'}
//       onSubmit={actions.createTask}
//       onSubmitSuccess={resetForm('newRegisterForm')}
//     />
//     <FlatButton label="getTasks" onClick={actions.getTasks} />
//     {tasks.map((task, index) => (
//       <div key={index}>
//         <span>{task.title}</span>
//         <FlatButton
//           label="Delete" data-id={index}
//           onClick={() => actions.deleteTask(task)}
//         />
//         <FlatButton label="Edit" data-id={index} />
//         <RegisterForm
//           key={task.id}
//           form={`edit_form${task.id}`}
//           initialValues={task}
//           onSubmit={actions.editTask(task)}
//           onSubmitSuccess={resetForm(`edit_form${task.id}`)}
//         />
//       </div>
//     ))}
//   </div>);
//
// TasksView.contextTypes = { muiTheme: React.PropTypes.object };
//
// export default TasksView;
