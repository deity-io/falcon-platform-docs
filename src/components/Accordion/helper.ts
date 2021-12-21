/**
 * Function to convert text to a slug format (stolen from https://gist.github.com/mathewbyrne/1280286)
 * @param {string} string
 * @returns {string}
 */
export const slugify = string => {
  return string
    .toString()
    .toLowerCase()
    .substring(0, 30) // We dont want it to be too long
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '');
};
