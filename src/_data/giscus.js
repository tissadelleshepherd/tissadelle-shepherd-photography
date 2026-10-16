// Fan fork: comments are off. The original's ids map threads into
// dermot-r-cochran/dermot-cochran-photography's own Discussions, which a fan
// site must not post into. base.njk renders the widget only when
// categoryId is set, so an empty one switches it off everywhere.
module.exports = function () {
  return {
    repo: "",
    repoId: "",
    category: "",
    categoryId: ""
  };
};
