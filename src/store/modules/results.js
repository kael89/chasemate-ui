import { getGameTree } from '../../api';
import { APP_NAME } from '../../constants';
import { showError } from '../../utils';

/* Actions */
const REQUEST_FORCED_MATE_TREE = `${APP_NAME}/board/REQUEST_FORCED_MATE_TREE`;
const RECEIVE_FORCED_MATE_TREE = `${APP_NAME}/board/RECEIVE_FORCED_MATE_TREE`;
const INVALIDATE_FORCED_MATE_TREE = `${APP_NAME}/board/INVALIDATE_FORCED_MATE_TREE`;

/* Reducer */
export default function reducer(results = { data: null, loading: false, error: '' }, action) {
  switch (action.type) {
    case REQUEST_FORCED_MATE_TREE:
      return { ...results, loading: true };
    case RECEIVE_FORCED_MATE_TREE:
      return { ...results, data: action.data, loading: false };
    case INVALIDATE_FORCED_MATE_TREE:
      return { ...results, error: action.error, loading: false };
    default:
      return results;
  }
}

/* Action Creators */
export const requestForcedMateTree = () => ({
  type: REQUEST_FORCED_MATE_TREE,
});

export const receiveForcedMateTree = data => ({
  data,
  type: RECEIVE_FORCED_MATE_TREE,
});

export const invalidateForcedMateTree = error => ({
  error,
  type: INVALIDATE_FORCED_MATE_TREE,
});

export const fetchForcedMateTree = (board, startingColor, depth) => async dispatch => {
  dispatch(requestForcedMateTree());

  try {
    const response = await getGameTree({ board, startingColor, depth });
    const { data, error } = await response.json();

    if (error.length > 0) {
      dispatch(invalidateForcedMateTree(error));
    } else {
      dispatch(receiveForcedMateTree(data));
    }
  } catch (e) {
    showError(e);
  }
};
