import { Task } from '../models';
/**
 * Get all tasks
 * @param req
 * @param res
 * @returns void
 */
export const getTasks = (req, res) => Task.find()
    .sort('-dateAdded')
    .exec()
    .then(tasks => res.json({ tasks }))
    .catch(err => res.status(500).send(err));
/**
 * Save a task
 * @param req
 * @param res
 * @returns void
 */
export const addTask = (req, res) => Task.create(req.body)
    .then(task => res.json({ task }))
    .catch((err) => {
      console.error('Task model insert error', err);
      return res.status(500)
          .send(err);
    });

export const updateTask = (req, res) => Task.findByIdAndUpdate(req.params.id,
        req.body, { new: true })
    .exec()
    .then(task => res.json({ task }))
    .catch((err) => {
      console.log('error in Task Model Update', err);
      res.status(500)
          .send(err);
    });
/**
 * Get a single task
 * @param req
 * @param res
 * @returns void
 */
export const getTask = (req, res) => Task.findOne({ cuid: req.params.cuid })
    .exec()
    .then(task => res.json({ task }))
    .catch(err => res.status(500)
        .send(err));
/**
 * Delete a task
 * @param req
 * @param res
 * @returns void
 */
export const deleteTask = (req, res) => {
  Task.findByIdAndRemove(req.params.id, { select: 'id' })
      .exec().then((task) => {
        console.log('suceessfully removed', task);
        return res.json({ task });
      })
      .catch((err) => {
        console.log('DB ERROR,', err);
        return res.status(500).send(err);
      });

          // console.log('WEF OUND THE TASK TO REMOVE,', task);
        // task.remove(() => {
          // res.status(200)
              // .end();
        // });
};
    // );
  // );
// };
