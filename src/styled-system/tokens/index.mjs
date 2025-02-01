const tokens = {
  "breakpoints.base": {
    value: "0px",
    variable: "var(--breakpoints-base)",
  },
  "breakpoints.xxs": {
    value: "340px",
    variable: "var(--breakpoints-xxs)",
  },
  "breakpoints.xs": {
    value: "600px",
    variable: "var(--breakpoints-xs)",
  },
  "breakpoints.md": {
    value: "768px",
    variable: "var(--breakpoints-md)",
  },
  "breakpoints.lg": {
    value: "1024px",
    variable: "var(--breakpoints-lg)",
  },
  "breakpoints.lgx": {
    value: "1280px",
    variable: "var(--breakpoints-lgx)",
  },
  "breakpoints.lgxx": {
    value: "1440px",
    variable: "var(--breakpoints-lgxx)",
  },
  "breakpoints.xl": {
    value: "1600px",
    variable: "var(--breakpoints-xl)",
  },
  "sizes.breakpoint-base": {
    value: "0px",
    variable: "var(--sizes-breakpoint-base)",
  },
  "sizes.breakpoint-xxs": {
    value: "340px",
    variable: "var(--sizes-breakpoint-xxs)",
  },
  "sizes.breakpoint-xs": {
    value: "600px",
    variable: "var(--sizes-breakpoint-xs)",
  },
  "sizes.breakpoint-md": {
    value: "768px",
    variable: "var(--sizes-breakpoint-md)",
  },
  "sizes.breakpoint-lg": {
    value: "1024px",
    variable: "var(--sizes-breakpoint-lg)",
  },
  "sizes.breakpoint-lgx": {
    value: "1280px",
    variable: "var(--sizes-breakpoint-lgx)",
  },
  "sizes.breakpoint-lgxx": {
    value: "1440px",
    variable: "var(--sizes-breakpoint-lgxx)",
  },
  "sizes.breakpoint-xl": {
    value: "1600px",
    variable: "var(--sizes-breakpoint-xl)",
  },
};

export function token(path, fallback) {
  return tokens[path]?.value || fallback;
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback;
}

token.var = tokenVar;
