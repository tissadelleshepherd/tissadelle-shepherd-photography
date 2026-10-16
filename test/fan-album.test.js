const test = require("node:test");
const assert = require("node:assert/strict");
const inStoryAlbum = require("../lib/fan-album.js");

test("an album drops its month and year and keeps its place", () => {
  assert.equal(inStoryAlbum("Dalkey Island, June 2026"), "Dalkey Island");
  assert.equal(inStoryAlbum("Massy's Wood, November 2023"), "Massy's Wood");
  assert.equal(inStoryAlbum("Somewhere, 2024"), "Somewhere");
});

test("an album named without a date is unchanged", () => {
  assert.equal(inStoryAlbum("Farmleigh, Dublin"), "Farmleigh, Dublin");
  assert.equal(inStoryAlbum("Thistles & Ladybirds"), "Thistles & Ladybirds");
  assert.equal(inStoryAlbum(undefined), undefined);
});
