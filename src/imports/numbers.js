export const INSERT_NUM = 'INSERT_NUM'
export const REMOVE_NUM = 'REMOVE_NUM'
const isEqual = (x) => (y) => x === y
export const insert = (n) => (nums) => nums.concat(num)
export const remove = (n) => (nums) => nums.filter(isEqual)
export const insertNum = (num) => ({type: INSERT_NUM, curry: insert(num)})
export const removeNum = (num) => ({type: REMOVE_NUM, curry: remove(num)})
export const NUM_ACTIONS = new Set([INSERT_NUM, REMOVE_NUM,]);

export const numbers = (state = [
    1, 2, 3,
], {type, curry}) => NUM_ACTIONS.has(type)
    ? curry(state)
    : state
