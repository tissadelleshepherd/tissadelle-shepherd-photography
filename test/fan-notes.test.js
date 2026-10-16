const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { FAN_NOTES, applyFanNote, phrasePattern } = require("../lib/fan-notes.js");

// A sync from the original that rewords a note would leave its in-story
// replacement silently unapplied, so every phrase must still be in its photo.
for (const [slug, pairs] of Object.entries(FAN_NOTES)) {
  test(`every in-story phrase still matches ${slug}`, () => {
    const source = fs.readFileSync(path.join(__dirname, "..", "src", "photos", `${slug}.md`), "utf8");
    for (const [from] of pairs) assert.ok(phrasePattern(from).test(source), `not found: ${from}`);
  });
}

test("a photo with no entry keeps its note unchanged", () => {
  assert.equal(applyFanNote("no-such-photo", "<p>As written.</p>"), "<p>As written.</p>");
});

test("a phrase is replaced in the rendered note", () => {
  assert.equal(
    applyFanNote("gull-under-the-canopy", "<p>on a wet Saturday morning in July 2023. Every other gull on this site was</p>"),
    "<p>on a wet Saturday morning in July. Every other gull in this archive was</p>"
  );
});
