// route middleware to make sure a user is logged in
export const isLoggedIn = (req, res, next) => {
    // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  console.log('you are nor authorized for this action');  // if they aren't redirect them to the home page
  res.redirect('/');
};
