import { css } from "styled-components";

export const resetDefaultStyles = css`
  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    font-size: 1em;
    line-height: 1.333em;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 12px;
    background: #fff;
    cursor: default;
  }

  #root,
  html,
  body,
  .App {
    max-width: 100vw;
    height: 100%;
    margin: 0;
  }

  sup {
    vertical-align: super;
    font-size: 0.66em;
  }

  h1,
  h2,
  h3 {
    font-weight: 700;
  }

  ol,
  ul,
  menu {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img,
  svg {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  input,
  textarea {
    -webkit-user-select: auto;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  textarea {
    white-space: revert;
  }

  fieldset {
    border: none;
  }

  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  :where(pre) {
    all: revert;
  }

  ::placeholder {
    color: unset;
  }

  ::marker {
    content: initial;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }
`;
