import { User, } from '../models';


/**
 * Save a user
 * @param req
 * @param res
 * @returns void
 */
export const addUser = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      console.log(__filename, '===========sucessful registration request =====', req.body);
      console.log(__filename, '===========sucessful registration=====', user);
      
      req.flash('success_msg', 'you can now register');
      
      // res.redirect('/login');
      next();
      
      // res.json({ user, });
    })
    .catch((err) => {
      console.error('User model insert error', err);
      return res.status(500).send(err);
    });
};

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
export const getUsers = (req, res) =>
  User.find().sort('-dateAdded').exec()
    .then(users => res.json({ users, }))
    .catch(err => res.status(500).send(err));

/**
 * Get a single user
 * @param req
 * @param res
 * @returns void
 */
export const getUser = (req, res) =>
    User.findOne({ id: req.params.id, }).exec()
      .then(user => res.json({ user, }))
      .catch(err => res.status(500).send(err));

export const updateUser = (req, res) =>
  User.findByIdAndUpdate(req.params.id, req.body, { new: true, }).exec()
    .then((user) => {
      res.json({ user, });
    })
    .catch((err) => {
      console.log('error in User Model Update', err);
      res.status(500).send(err);
    });


/**
 * Delete a user
 * @param req
 * @param res
 * @returns void
 */
export const deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, { select: 'id', })
    .exec().then((user) => {
      console.log('suceessfully removed', user);
      return res.json({ user, });
    })
    .catch((err) => {
      console.log('DB ERROR,', err);
      return res.status(500).send(err);
    });
};

export const loginUser = (req, username, password, done) => {
  console.log(__filename, '\n=======LOGIN PRE DB=======');
  console.log(Object.keys(req), username, password, done);
  
  User.findByUserName(username)
    .then((user) => {
      if (user) {
        return user.comparePassword(password)
          .then((isValid) => {
            console.log(__filename, '\n=======LOGIN loginUser IS VALID CALLBACK=======', user);
            return isValid ? done(null, user) : done(null, false, { message: 'Incorrect password.', });
          })
          .catch(err => done(null, false, { message: 'Incorrect password.', }));
      } else {
        return done(null, false, { message: 'Invalid username .', });
      }
    })
    .catch(done);
};

export const registerUser = (req, username, password, done) => {
  User.findByUserName(username)
    .then((usr) => {
      if (usr) {
        done(null, false, { message: 'Username already exists.', });
        return null;
      }
      
      return User.create(req.body);
    })
    .then(user => done(null, user))
    .catch(done);
};
