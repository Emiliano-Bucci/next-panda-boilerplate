import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.mjs';
import { splitProps } from '../helpers.mjs';
import { getAspectRatioStyle } from '../patterns/aspect-ratio.mjs';
import { styled } from './factory.mjs';

export const AspectRatio = /* @__PURE__ */ forwardRef(function AspectRatio(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["ratio"])

const styleProps = getAspectRatioStyle(patternProps)
const cssProps = { css: mergeCss(styleProps, props.css) }
const mergedProps = { ref, ...restProps, ...cssProps }

return createElement(styled.div, mergedProps)
  })