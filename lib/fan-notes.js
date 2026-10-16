// Fan fork only: in-story wording for the photo notes. The original's notes
// carry things a 29th-century Ranger's archive could not hold: dates of our
// own century, camera-club competitions and their sections, present-day
// agencies and figures. Each entry here is a list of [original, in-story]
// phrase pairs for one photo, applied to the rendered note by the `fanNote`
// filter in .eleventy.js. The photos' own files are left alone, so syncs from
// the original never conflict on them, and test/fan-notes.test.js fails if a
// sync changes a note so that one of these phrases no longer matches it.
const FAN_NOTES = {
  "african-jacana": [
    ["Cropping and blurring is the reason this one carries only the DCC tag — the nature sections do not allow blurring to hide elements of a scene, and rightly so.",
      "The softening is why this is filed as a picture and not as a survey record: a record may not blur what was in the scene, and rightly so."],
  ],
  "cheetah-on-the-mound": [
    ["The monochrome edit took first place in Digital Novice Mono at the Dublin Camera Club Summer Competition 2026, so it is the one shown here,",
      "The monochrome edit is the one kept here,"],
  ],
  "cheetah-on-the-mound-in-colour": [
    ["A monochrome edit of the same frame took first place in Digital Novice Mono at the Dublin Camera Club Summer Competition 2026, and has its own page.",
      "A monochrome edit of the same frame has its own page."],
  ],
  "dalkey-island-feral-goat": [
    ["a National Parks and Wildlife Service ranger was on the ground", "a warden was on the ground"],
    ["That ancestry alone bars the photograph from the IPF and FIAP nature sections, which exclude feral animals outright",
      "That ancestry alone keeps the frame out of the wildlife records, which exclude feral animals outright"],
  ],
  "fish-eagle-with-a-catch": [
    ["That is why this one is tagged for the club's open competition only: baiting rules it out of nature and wildlife sections everywhere,",
      "That is why it is filed as a picture and not as a wildlife record: baiting rules a frame out of every one,"],
  ],
  "gull-under-the-canopy": [
    ["in July 2023. Every other gull on this site", "in July. Every other gull in this archive"],
  ],
  "high-water-marks": [
    ["July 2026 was the driest July ever recorded in Ireland", "That July was the driest ever recorded in Ireland"],
    ["The hosepipe ban covering Dublin and four neighbouring counties ran from 13 July to 26 August, and was still in force",
      "The water restrictions covering Dublin and four neighbouring counties ran from 13 July to 26 August, and were still in force"],
    ["supplies around 35,000 households in the south of the city.", "supplies the south of the city."],
  ],
  "hooded-crow-watching": [
    ["which keeps this out of the stricter nature competitions;", "which keeps this out of the stricter wildlife records;"],
  ],
  "looking-around": [
    ["have been followed one by one since 1971, longer than", "have been followed one by one for longer than"],
  ],
  "low-water-in-glenasmole": [
    ["were built between 1883 and 1887 for the Rathmines Commission,", "were built for the Rathmines Commission,"],
    ["forty-five of them at the time,", "forty-five of them when the reservoirs were built,"],
  ],
  "the-portico-at-farmleigh": [
    ["for a century. The State bought it in 1999 and uses it to put up visiting heads of state, but between visits",
      "for a century, and afterwards the State's, kept for visiting heads of state; but between visits"],
  ],
};

// The notes are hard-wrapped in their files, so a phrase matches across any
// run of whitespace, line breaks included.
function phrasePattern(from) {
  const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(escaped.replace(/\s+/g, "\\s+"), "g");
}

function applyFanNote(slug, html) {
  let out = html;
  for (const [from, to] of FAN_NOTES[slug] || []) out = out.replace(phrasePattern(from), () => to);
  return out;
}

module.exports = { FAN_NOTES, applyFanNote, phrasePattern };
