/**
 * Created by ken on 16/5/9.
 */

import track from './track'

export default store => next => action => {
    track(action);
    return next(action);
};
