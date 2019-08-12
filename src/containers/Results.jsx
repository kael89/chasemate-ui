import { connect } from 'react-redux';

import Results from '../components/Results';
import { getMoveData } from '../modules/moveData';
import { playMove, revertBoard } from '../store/board/actions';
import { clearMoveHistory } from '../store/moveHistory/actions';

const mapStateToProps = state => {
  const { history, resetBoardId } = state.board;
  const { data, loading, error } = state.results;

  return {
    error,
    loading,
    moveData: data !== null ? getMoveData(data, history[resetBoardId], resetBoardId) : null,
    resetBoardId,
  };
};

const mapDispatchToProps = dispatch => ({
  onMoveSelect: (resetBoardId, moveDatum) => {
    dispatch(clearMoveHistory());
    dispatch(revertBoard(resetBoardId));
    dispatch(playMove(moveDatum));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  onMoveSelect: moveDatum => dispatchProps.onMoveSelect(stateProps.resetBoardId, moveDatum),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Results);
