export const columnIdToString = columnId => String.fromCharCode('A'.charCodeAt(0) + columnId);

export const rowIdToString = rowId => `${rowId + 1}`;

/**
 * @param {BoardCoordinates}
 * @returns {string}
 */
export const coordinatesToPosition = ({ rowId, columnId }) =>
  `${columnIdToString(columnId)}${rowIdToString(rowId)}`;

/**
 * @param {string} position
 * @returns {BoardCoordinates}
 */
export const positionToCoordinates = position => ({
  rowId: parseInt(position.substr(-1)) - 1,
  columnId: position.charCodeAt(0) - 'A'.charCodeAt(0),
});
