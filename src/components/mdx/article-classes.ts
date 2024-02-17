import { cx, css } from "@styled-system/css";
import { divider } from "@styled-system/patterns";
import type { SystemStyleObject } from "@styled-system/types";

const common: SystemStyleObject = {
  _first: {
    mt: 0,
  },
  _last: {
    mb: 0,
  },
};

export const heading1 = css({
  ...common,
  textStyle: "headings",
  fontSize: ["xl", "2xl", "4xl"],
  mt: "calc(token(spacing.md) + token(spacing.lg))",
  mb: "calc(token(spacing.sm) + token(spacing.md))",
});

export const heading2 = css({
  ...common,
  textStyle: "headings",
  fontSize: ["xl", "2xl", "3xl"],
  mt: "calc(token(spacing.md) + token(spacing.lg))",
  mb: "md",
});

export const heading3 = css({
  ...common,
  textStyle: "headings",
  fontSize: ["lg", "lg", "2xl"],
  mt: "calc(token(spacing.md) + token(spacing.lg))",
  mb: "md",
});

export const heading4 = css({
  ...common,
  textStyle: "headings",
  fontSize: ["md", "lg", "xl"],
  mt: "lg",
  mb: "md",
});

export const heading5 = css({
  ...common,
  textStyle: "headings",
  fontSize: ["md", "md", "lg"],
  mt: "md",
  mb: "sm",
});

export const paragraph = css({
  ...common,
  fontSize: "md",
  my: "sm",
  overflowWrap: "break-word",
});

export const anchor = css({
  color: { base: "accent.10", _hover: "accent.9" },
  textDecoration: { _hover: "underline" },
  _dark: { color: { base: "accent.11", _hover: "accent.12" } },
});

export const blockquote = css({ bg: "accent.a2", rounded: "l2", my: 4, p: 4 });

export const hr = divider({
  orientation: "horizontal",
  my: 4,
});

export const unorderedList = css({
  ...common,
  my: 4,
  listStyleType: "disc",
  paddingInlineStart: 4,
});

export const orderedList = css({
  ...common,
  my: 4,
  listStyleType: "decimal",
  paddingInlineStart: 4,
});

export const img = css({
  my: 4,
  maxWidth: "100%",
  rounded: "l2",
});

export const pre = css({ bg: "accent.a2", rounded: "l2", my: 4, p: 4 });

export const code = css({
  ":not(pre) > &": {
    color: { base: "secondary.800", _dark: "secondary.400" },
    bg: "secondary.600/92",
    px: 1,
    rounded: "md",
  },
});

export const iframe = css({
  maxWidth: "100%",
});

export const kbd = css({
  bg: { base: "gray.3", _dark: "gray.9" },
  px: 1,
  rounded: "md",
});

export const rehypeClassNamesOptions = {
  h1: heading1,
  h2: heading2,
  h3: heading3,
  h4: heading4,
  h5: heading5,
  p: paragraph,
  a: anchor,
  blockquote,
  hr,
  ul: unorderedList,
  ol: orderedList,
  img,
  pre,
  code,
  iframe,
  kbd,
};
