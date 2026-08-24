# TRFlearn — documentation

### 📖 **[neuroliaa.github.io/trflearn-dev](https://neuroliaa.github.io/trflearn-dev/)**

**TRFlearn** estimates **Temporal Response Functions** between continuous stimuli and
neural responses (MEG/EEG) in PyTorch: regularized lagged linear models on CPU or GPU,
with named features and interactions, per-feature time windows, segment-aware
cross-validation, MNE-native I/O, and cohort-level statistics including TFCE.

The site above carries the concepts, the full API reference, and every tutorial and
example rendered with its figures — from recovering a kernel you injected yourself, to a
complete 18-subject EEG cohort analysis on public data.

---

## What this repository is

**A publishing target, not a codebase.** It holds one thing: the built HTML of the
documentation site, on the `gh-pages` branch. There is no Python here.

It exists because TRFlearn is developed in a **private** repository, and GitHub Pages does
not serve private repositories on the free plan. Rather than leave the documentation
unreadable while the package is unreleased, the site is built from the private repo and
pushed here as a static snapshot.

## What it is not

- **Not the source.** The library itself lives elsewhere and is not public yet.
- **Not a place to send pull requests.** Every publication replaces the branch wholesale,
  so any commit made here is overwritten without trace. Please open an issue instead.
- **Not continuously updated.** The site is a snapshot, refreshed by hand. Treat it as
  current-as-of its last publication rather than as a live view of development.

## Status

TRFlearn has not been released, and its repository is private. This site is published so
the work can be read and cited in the meantime; the group's other work is public at
[NeuroLIAA](https://github.com/NeuroLIAA).

Once the package is released this mirror becomes unnecessary: the documentation will be
served from the project's own repository, and this one will point there.
