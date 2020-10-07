/**
 * Converts ISO 8601 format duration into seconds
 * @param {String} duration Duration string in format of ISO 8601
 * @description
 * - 'PT5H3M3S' will return 18183
 * - [Copied from stackoverflow answer](https://stackoverflow.com/a/54524981/11222282/)
 * @example
 * ```
 * const time = parseISO8601Duration('PT5H3M3S')
 * console.log(time) //18183
 * ```
 * @returns ISO converted into seconds
 */

const parseISO8601Duration = (duration) => {
  const match = duration.match(/P(\d+Y)?(\d+W)?(\d+D)?T(\d+H)?(\d+M)?(\d+S)?/)
  // An invalid case won't crash the app.
  if (!match) {
    console.error(`Invalid YouTube video duration: ${duration}`)
    return 0
  }
  const [years, weeks, days, hours, minutes, seconds] = match
    .slice(1)
    .map((_) => (_ ? parseInt(_.replace(/\D/, '')) : 0))
  return (
    (((years * 365 + weeks * 7 + days) * 24 + hours) * 60 + minutes) * 60 +
    seconds
  )
}

export default parseISO8601Duration
