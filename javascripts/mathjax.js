/*
 * MathJax setup for pymdownx.arithmatex in `generic: true` mode.
 *
 * Two separate things are needed, and missing either one looks the same from the
 * outside -- raw `\[ ... \]` on the page:
 *
 * 1. Arithmatex's generic mode emits `<div class="arithmatex">\[ ... \]</div>` and
 *    leaves the typesetting to us, so MathJax has to be told to process exactly that
 *    class and ignore everything else. Every element with a class is ignored, and
 *    an element without one inherits from its parent: so the processed classes
 *    reach their own children, a `<p>` or a `<strong>`, and nothing else does.
 * 2. The theme runs with `navigation.instant`, which swaps page content over XHR
 *    without a reload. MathJax only typesets on load, so without re-typesetting on
 *    every navigation the formulas render when you land on a page directly and stay
 *    raw when you arrive from another page. That second case was the visible bug.
 *
 * Notebook pages come from mkdocs-jupyter, not from Python-Markdown, so arithmatex
 * never sees them: their markdown cells keep Jupyter's `$ ... $` and `$$ ... $$`.
 * MathJax reads those delimiters too, but only inside a rendered markdown cell
 * (`jp-MarkdownOutput`), so a dollar sign in a code cell or an output stays text.
 */
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    ignoreHtmlClass: ".+",
    processHtmlClass: "arithmatex|jp-MarkdownOutput",
  },
};

// `document$` is the Material theme's observable; it emits on every instant-nav
// page change (and once on first load).
document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
