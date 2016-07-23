/**
 * Created by ken on 16/5/9.
 */
function warn(error) {
    console.warn(error.message || error);
    throw error; // To let the caller handle the rejection
}

export default store => next => action =>
    typeof action.then === 'function'
        ? Promise.resolve(action).then(next, warn)
        : next(action);
