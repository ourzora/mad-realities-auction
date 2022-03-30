import { Global, css } from '@emotion/react'
import { media, buttonStyle } from './mixins'
import { returnBreakpoint } from './breakpoints'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          @font-face {
            font-family: RobotoBold;
            src: url('./fonts/Roboto-Bold.ttf');
          }

          @font-face {
            font-family: RobotoRegular;
            src: url('./fonts/Rubik-VariableFont_wght.ttf');
          }

          @font-face {
            font-family: Pricedown;
            src: url('./fonts/pricedown-bl.otf');
          }

          /* COLORS */
          --black: #000;
          --white: #fff;
          --bg-color: #f6f8fa;
          --overlay: rgba(0, 0, 0, 0.85);
          --overlay-light: rgba(0, 0, 0, 0.35);
          --border-black: 1px solid var(--black);
          --border-light: 1px solid #dbdbdb;

          /* FONTS */
          --font-a: 'RobotoRegular', Helvetica, Arial, sans-serif;
          --font-b: 'RobotoBold', Helvetica, Arial, sans-serif;
          --display-font: 'Pricedown', Helvetica, Arial, sans-serif;

          /* SPACING */
          --base-unit: 8px;
          --space-sm: calc(var(--base-unit) * 2);
          --space-md: calc(var(--base-unit) * 3);
          --space-lg: calc(var(--base-unit) * 5);

          /* TYPOGRAPHY */
          --text-01: calc(var(--base-unit) * 1.5);
          --text-02: calc(var(--base-unit) * 2);
          --text-03: calc(var(--base-unit) * 3);
          --text-04: calc(var(--base-unit) * 4);
          --text-05: calc(var(--base-unit) * 5);

          /* LAYOUT */
          --header-z: 100;
          --header-height: calc(var(--base-unit) * 10);
          --footer-height: calc(var(--base-unit) * 10);
          --content-width-md: 960px;
          --content-width-lg: ${returnBreakpoint('desktop')};
          --content-width-xl: ${returnBreakpoint('xl')};
        }

        /* MEDIA QUERY MIXIN */
        ${media.laptop`
          :root {
            --base-unit: 10px;
            --text-05: calc(var(--base-unit) * 6);
          }
        `}

        ${media.xl`
          :root {
            --base-unit: 11px;
            --text-05: calc(var(--base-unit) * 7);
          }
        `}

        /* DEFAULTS */
        /* LAYOUT */
        body * {
          font-family: var(--font-a) !important;
          color: var(--white);
        }

        html {
          background-color: var(--black);
        }

        main {
          width: 100%;
          overflow-x: hidden;
          position: relative;
          min-height: calc(100vh - var(--header-height));
        }

        header,
        footer {
          font-size: var(--text-02);
          padding: 0 var(--space-md);
          width: 100%;
          align-items: center;
          display: flex;
          justify-content: space-between;
          a {
            text-decoration: none;
            color: var(--white);
          }
        }

        header {
          height: var(--header-height);
          position: sticky;
          top: 0;
          z-index: var(--header-z);
          a {
            margin-right: 30px;
            font-family: var(--display-font)!important;
            font-size: var(--text-04);
          }
        }

        .flex-row {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        footer {
          height: var(--footer-height);
          position: fixed;
          bottom: 0;
          left: 0;
        }

        /* TYPOGRPAHY */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 500;
        }
        h1 {
          font-size: var(--text-05);
          line-height: 1;
          text-align: center;
          padding: var(--space-md) 0 var(--space-lg);
        }
        h2 {
          font-size: var(--text-03);
          padding: var(--space-sm) 0;
        }
        h3 {
          font-size: var(--text-03);
          padding: var(--space-sm) 0;
        }
        a {
          font-weight: 400;
        }
        p,
        ol,
        ul {
          font-size: var(--text-02);
          padding-bottom: var(--space-sm);
          line-height: 1.35;
          font-weight: 400;
        }

        /* CUSTOM */
        .button {
          ${buttonStyle};
        }

        /* UTIL */
        .code-wrapper {
          text-align: start;
          border-radius: 5px;
          padding: 12px;
          background-color: #f3f3f3;
          * {
            color: var(--black)!important;
          }
          overflow-x: scroll;
          margin-top: 20px;
          code {
            font-size: 12px !important;
            line-height: 1.25;
            background-color: var(--bg-color);
          }
          * {
            font-family: var(--font-b) !important;
          }
        }

        .display-font {
          font-family: var(--display-font)!important;
          text-shadow: 
            1px 1px 3px #000, 
            3px 3px 10px purple,
            3px 3px 15px yellow,
            3px 3px 30px #ff9050;
        }

        .text-01 {
          font-size: var(--text-01);
        }
        .text-02 {
          font-size: var(--text-02);
        }
        .text-03 {
          font-size: var(--text-03);
        }
        .text-04 {
          font-size: var(--text-04);
        }
        .text-05 {
          font-size: var(--text-05);
        }
      `}
    />
  )
}
