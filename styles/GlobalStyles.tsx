import { Global, css } from '@emotion/react'
import { media, buttonStyle, smallPillButton } from './mixins'
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

          @keyframes funkyGradientAnimation {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
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
          --footer-height: calc(var(--base-unit) * 6);
          --content-width-md: 960px;
          --content-width-lg: ${returnBreakpoint('desktop')};
          --content-width-xl: ${returnBreakpoint('xl')};

          --funky-shadow:
              1px 1px 3px #000, 
              3px 3px 10px purple,
              3px 3px 15px yellow,
              3px 3px 30px #ff9050;

          --funky-text-shadow:
              1px 1px 1px #000, 
              3px 3px 5px blue;

          --dark-shadow: 
            3px 3px 30px #131313;

          --warm-gradient:
            linear-gradient(90deg, 
            rgba(131,58,180,1) 0%, 
            rgba(253,29,29,1) 50%, 
            rgba(252,176,69,1) 100%);

          --green-gradient:
            linear-gradient(78deg, rgba(69,253,29,1) 45%, rgba(69,252,245,1) 100%);

          --color-a: #ff1f8c;
          --color-b: yellow;
          --punk-pink: var(--color-a);
        }

        /* MEDIA QUERY MIXIN */
        ${media.laptop`
          :root {
            --base-unit: 12px;
            --text-05: calc(var(--base-unit) * 6);
          }
        `}

        ${media.xl`
          :root {
            --base-unit: 13px;
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
          background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(75,5,130,1) 100%);
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
          padding: 0 0 var(--space-lg);
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

        .funky-shadow {
          box-shadow:
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


        /* ZORA SPECIFIC -- CLEAN UP
           - WALLET MODAL
        */
        .zora-wallet-modalText {
          padding: var(--space-md);
          display: flex;
          flex-direction: column;
          background-color: var(--color-b);
          background: var(--green-gradient);
          animation: funkyGradientAnimation 5s ease infinite;
          width: 100%;
          max-width: 500px;
          filter: drop-shadow(0px 0px 35px #29fd0d);
          border-radius: var(--space-md)!important;
          border: 2px solid var(--color-a);
        }

        .zora-wallet-walletOptionsList {
          padding: 0 0 0px!important;
          background: transparent!important;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .zora-wallet-walletOptionsWrapper {
          padding: 0!important;
        }

        .zora-wallet-walletOption {
          ${smallPillButton};
          color: var(--color-b)!important;
          ${media.hover`
            color: var(--color-a)!important;
          `}
        }

        .zora-wallet-modalTitleText {
          color: var(--color-a)!important;
          text-transform: uppercase;
        }

        .zora-wallet-modalContent {
          padding: var(--space-sm)!important;
          h3 {
            font-size: var(--text-02) !important;
            padding: 0 0 15px;
          }
          .zora--auction-house-modalSuccessMessage {
            font-size: var(--text-02) !important;
          }
          img {
            object-fit: contain;
          }
          p {
            font-size: var(--text-02);
            padding: 0 0 10px;
          }
          .zora--auction-house-ethAmountLabel {
            padding-bottom: 15px;
            font-size: var(--text-01);
          }
          button.zora--auction-house-actionButton {
            ${smallPillButton};
            margin-bottom: 15px;
          }
        }

        .zora-wallet-modalError {
          font-size: var(--text-micro)!important;
          max-width: 300px;
          margin: auto;
          color: var(--color-a);
        }

        .zora-wallet-modalHeader {
          padding: 0 0 var(--space-sm)!important;
          display: flex;
          align-items: center;
          border-bottom: 0!important;
        }

        .zora-wallet-modalClose {
          width: 35px;
          height: 35px;
          background-color: var(--color-a)!important;
          border-radius: 0px!important;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          path {
            fill: var(--color-b);
          }
        }

        .zora--auction-house-modalInner {
          padding: 0!important;
          background: transparent!important;
          .zora--auction-house-modalHeader {
            display: none;
          }
          .zora--auction-house-modalDescription {
            padding-top: var(--space-sm);
          }
          .zora--auction-house-bidDisclaimerLine {
            font-size: var(--text-micro)!important;
          }
          .zora-cardOuter {
            height: 0;
            overflow-y: 100%;
            padding-bottom: 100%;
            margin-bottom: 20px;
          }
          .zora-cardItemInfo {
            z-index: 10;
            border-top: 0;
            height: 35px;
            display: flex;
            align-items: center;
            overflow-x: scroll;
            h5 {
              padding-right: 15px;
            }
          }
          .zora--auction-house-modalBidActionContainer {
            padding-bottom: 0;
          }
          .zora--auction-house-inputEthLabel {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-top: 1px dashed black;
            padding: 10px 0;
            .zora--auction-house-ethAmountLabel {
              padding-bottom: 7px;
            }
          }
          .zora-cardMediaWrapper {
            position: absolute;
            height: 100%;
            top: 0;
            left: 0;
            width: 100%;
            border: 0;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              position: absolute;
              left: 0;
              top: 0;
            }
          }
        }
      `}
    />
  )
}
