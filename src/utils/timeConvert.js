/**
 * Converts seconds into HH:MM:SS format
 * @param {String} seconds Total seconds
 * @returns HH:MM:SS
 */
export const secondToMinutes = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}
