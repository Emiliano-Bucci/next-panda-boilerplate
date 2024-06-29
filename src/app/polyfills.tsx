import Script from "next/script";

export function Polyfills() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(t){function e(){var e=this||self;e.globalThis=e,delete t.prototype._T_}"object"!=typeof globalThis&&(this?e():(t.defineProperty(t.prototype,"_T_",{configurable:!0,get:e}),_T_))}(Object);`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `history.scrollRestoration = "manual"`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `String.prototype.replaceAll||(String.prototype.replaceAll=function(e,t){return"[object regexp]"===Object.prototype.toString.call(e).toLowerCase()?this.replace(e,t):this.replace(RegExp(e,"g"),t)});`,
        }}
      />
      <Script src="https://unpkg.com/web-streams-polyfill/dist/polyfill.js" />
    </>
  );
}
