import { DEFAULT_SETTINGS } from '../../modules/settings';
import themes from '../../themes';
import { CHANGE_THEME, TOGGLE_BOARD_HINT, TOGGLE_DIALOG } from './actions';

const defaultState = {
  hintVisible: false,
  theme: themes[DEFAULT_SETTINGS.defaultTheme],
  visibleDialog: '',
};

/* Reducer */
export default function reducer(ui = defaultState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...ui, theme: action.theme };
    case TOGGLE_BOARD_HINT:
      return { ...ui, hintVisible: action.visible };
    case TOGGLE_DIALOG:
      return { ...ui, visibleDialog: action.visibleDialog };
    default: {
      return ui;
    }
  }
}
