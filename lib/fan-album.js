// Fan fork only: the in-story name of an album. The original names an outing
// for its place and month ("Dalkey Island, June 2026"), and a month of our own
// century is something a 29th-century Ranger's archive could not hold. So the
// archive drops the date and keeps the place, and outings to one place become
// one album under the place's name, which is already the original's rule for a
// place visited often ("Farmleigh, Dublin"). The photos' front matter is left
// alone, so syncs from the original never conflict on the photo files.
const DATED = /,\s*(?:(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+)?\d{4}$/;

module.exports = function inStoryAlbum(name) {
  return typeof name === "string" ? name.replace(DATED, "") : name;
};
