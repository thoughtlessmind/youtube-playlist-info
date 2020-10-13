/**
 * Find and returns playlist Id
 * @param {String} listUrl URL String
 */
export const extractListId = (listUrl) => {
  if (listUrl.includes('list=')) {
    return listUrl.split('list=')[1]
  } else {
    return false
  }
}
