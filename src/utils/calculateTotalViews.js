/**
 * Extracts and calculated the total time of the given plalist
 * @param {Array} data youtube playlist data
 */
export const calculateTotalViews = (data) => {
  let views = 0
  // data.map((videoData) => views + videoData.statistics.viewCount)
  data.map(
    (videoData) => (views = views + parseInt(videoData.statistics.viewCount))
  )
  return views
}
