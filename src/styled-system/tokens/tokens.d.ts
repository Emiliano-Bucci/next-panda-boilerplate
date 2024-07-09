/* eslint-disable */
export type Token = "breakpoints.base" | "breakpoints.xxs" | "breakpoints.xs" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.lgx" | "breakpoints.lgxx" | "breakpoints.xl" | "sizes.breakpoint-base" | "sizes.breakpoint-xxs" | "sizes.breakpoint-xs" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-lgx" | "sizes.breakpoint-lgxx" | "sizes.breakpoint-xl"

export type BreakpointToken = "base" | "xxs" | "xs" | "md" | "lg" | "lgx" | "lgxx" | "xl"

export type SizeToken = "breakpoint-base" | "breakpoint-xxs" | "breakpoint-xs" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-lgx" | "breakpoint-lgxx" | "breakpoint-xl"

export type Tokens = {
		breakpoints: BreakpointToken
		sizes: SizeToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"