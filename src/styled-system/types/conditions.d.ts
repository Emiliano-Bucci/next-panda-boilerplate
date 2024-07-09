/* eslint-disable */
import type { AnySelector, Selectors } from './selectors';

export interface Conditions {
	/** The base (=no conditions) styles to apply  */
	"base": string
	/** `@media screen and (min-width: 0rem) and (max-width: 21.2475rem)` */
	"baseOnly": string
	/** `@media screen and (max-width: -0.0025rem)` */
	"baseDown": string
	/** `@media screen and (min-width: 21.25rem)` */
	"xxs": string
	/** `@media screen and (min-width: 21.25rem) and (max-width: 37.4975rem)` */
	"xxsOnly": string
	/** `@media screen and (max-width: 21.2475rem)` */
	"xxsDown": string
	/** `@media screen and (min-width: 37.5rem)` */
	"xs": string
	/** `@media screen and (min-width: 37.5rem) and (max-width: 47.9975rem)` */
	"xsOnly": string
	/** `@media screen and (max-width: 37.4975rem)` */
	"xsDown": string
	/** `@media screen and (min-width: 48rem)` */
	"md": string
	/** `@media screen and (min-width: 48rem) and (max-width: 63.9975rem)` */
	"mdOnly": string
	/** `@media screen and (max-width: 47.9975rem)` */
	"mdDown": string
	/** `@media screen and (min-width: 64rem)` */
	"lg": string
	/** `@media screen and (min-width: 64rem) and (max-width: 79.9975rem)` */
	"lgOnly": string
	/** `@media screen and (max-width: 63.9975rem)` */
	"lgDown": string
	/** `@media screen and (min-width: 80rem)` */
	"lgx": string
	/** `@media screen and (min-width: 80rem) and (max-width: 89.9975rem)` */
	"lgxOnly": string
	/** `@media screen and (max-width: 79.9975rem)` */
	"lgxDown": string
	/** `@media screen and (min-width: 90rem)` */
	"lgxx": string
	/** `@media screen and (min-width: 90rem) and (max-width: 99.9975rem)` */
	"lgxxOnly": string
	/** `@media screen and (max-width: 89.9975rem)` */
	"lgxxDown": string
	/** `@media screen and (min-width: 100rem)` */
	"xl": string
	/** `@media screen and (min-width: 100rem)` */
	"xlOnly": string
	/** `@media screen and (max-width: 99.9975rem)` */
	"xlDown": string
	/** `@media screen and (min-width: 0rem) and (max-width: 21.2475rem)` */
	"baseToXxs": string
	/** `@media screen and (min-width: 0rem) and (max-width: 37.4975rem)` */
	"baseToXs": string
	/** `@media screen and (min-width: 0rem) and (max-width: 47.9975rem)` */
	"baseToMd": string
	/** `@media screen and (min-width: 0rem) and (max-width: 63.9975rem)` */
	"baseToLg": string
	/** `@media screen and (min-width: 0rem) and (max-width: 79.9975rem)` */
	"baseToLgx": string
	/** `@media screen and (min-width: 0rem) and (max-width: 89.9975rem)` */
	"baseToLgxx": string
	/** `@media screen and (min-width: 0rem) and (max-width: 99.9975rem)` */
	"baseToXl": string
	/** `@media screen and (min-width: 21.25rem) and (max-width: 37.4975rem)` */
	"xxsToXs": string
	/** `@media screen and (min-width: 21.25rem) and (max-width: 47.9975rem)` */
	"xxsToMd": string
	/** `@media screen and (min-width: 21.25rem) and (max-width: 63.9975rem)` */
	"xxsToLg": string
	/** `@media screen and (min-width: 21.25rem) and (max-width: 79.9975rem)` */
	"xxsToLgx": string
	/** `@media screen and (min-width: 21.25rem) and (max-width: 89.9975rem)` */
	"xxsToLgxx": string
	/** `@media screen and (min-width: 21.25rem) and (max-width: 99.9975rem)` */
	"xxsToXl": string
	/** `@media screen and (min-width: 37.5rem) and (max-width: 47.9975rem)` */
	"xsToMd": string
	/** `@media screen and (min-width: 37.5rem) and (max-width: 63.9975rem)` */
	"xsToLg": string
	/** `@media screen and (min-width: 37.5rem) and (max-width: 79.9975rem)` */
	"xsToLgx": string
	/** `@media screen and (min-width: 37.5rem) and (max-width: 89.9975rem)` */
	"xsToLgxx": string
	/** `@media screen and (min-width: 37.5rem) and (max-width: 99.9975rem)` */
	"xsToXl": string
	/** `@media screen and (min-width: 48rem) and (max-width: 63.9975rem)` */
	"mdToLg": string
	/** `@media screen and (min-width: 48rem) and (max-width: 79.9975rem)` */
	"mdToLgx": string
	/** `@media screen and (min-width: 48rem) and (max-width: 89.9975rem)` */
	"mdToLgxx": string
	/** `@media screen and (min-width: 48rem) and (max-width: 99.9975rem)` */
	"mdToXl": string
	/** `@media screen and (min-width: 64rem) and (max-width: 79.9975rem)` */
	"lgToLgx": string
	/** `@media screen and (min-width: 64rem) and (max-width: 89.9975rem)` */
	"lgToLgxx": string
	/** `@media screen and (min-width: 64rem) and (max-width: 99.9975rem)` */
	"lgToXl": string
	/** `@media screen and (min-width: 80rem) and (max-width: 89.9975rem)` */
	"lgxToLgxx": string
	/** `@media screen and (min-width: 80rem) and (max-width: 99.9975rem)` */
	"lgxToXl": string
	/** `@media screen and (min-width: 90rem) and (max-width: 99.9975rem)` */
	"lgxxToXl": string
	/** The base (=no conditions) styles to apply  */
	"base": string
}

export type ConditionalValue<V> =
  | V
  | Array<V | null>
  | {
      [K in keyof Conditions]?: ConditionalValue<V>
    }

export type Nested<P> = P & {
  [K in Selectors]?: Nested<P>
} & {
  [K in AnySelector]?: Nested<P>
} & {
  [K in keyof Conditions]?: Nested<P>
}
