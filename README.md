# Gatsby scroll bug reproduction

## Purpose

This repo demonstrates a bug with Gatsby's scroll restoration feature.

## Symptom

The bug can be seen when the page scroll position does not direct the user to the top when navigating between pages within a Gatsby site. This often means the user is left at the bottom of a page or somewhere in the middle despite never having navigated to the page before.

A version of the bug can be seen on Calendly's website in [this Loom video](https://www.loom.com/share/d9d80130268d453e880fddffe053f366).

## Steps to reproduce

This repo is already set up to demonstrate the error.

1. Start the dev server

```shell
yarn run start
```

2. Open the homepage at `http://localhost:8001/`

3. Scroll to the bottom of the page and click the "To Test A" link. Clicking the bottom link to the homepage should also trigger the bug.

## Possible explanation

The bug seems to occur when DOM elements are added/loaded on the page during rehydration. With `scroll-behavior: smooth;` the browser begins to move the window to the top of the page, but is interrupted by DOM elements changing the page position, causing it to stop the animation. Notably, the issue does not occur when `scroll-behavior` is `auto`.

In this case I have recreated the issue using Marketo forms to load DOM elements, since I noticed pages with Marketo forms seem to most reliably have the issue.
