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
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
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
          --base-unit: 10px;
          --space-sm: calc(var(--base-unit) * 2);
          --space-md: calc(var(--base-unit) * 3);
          --space-lg: calc(var(--base-unit) * 5);

          /* TYPOGRAPHY */
          --text-01: calc(var(--base-unit) * 1.65);
          --text-02: calc(var(--base-unit) * 2);
          --text-03: calc(var(--base-unit) * 2.5);
          --text-04: calc(var(--base-unit) * 4);
          --text-05: calc(var(--base-unit) * 5);

          /* LAYOUT */
          --header-z: 100;
          --header-height: calc(var(--base-unit) * 10);
          --footer-height: calc(var(--base-unit) * 8);
          --content-width-md: 960px;
          --content-width-lg: ${returnBreakpoint('desktop')};
          --content-width-xl: ${returnBreakpoint('xl')};

          --funky-shadow: 1px 1px 3px #000, 3px 3px 10px purple,
            3px 3px 15px yellow, 3px 3px 30px #ff9050;

          --funky-text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;

          --dark-shadow: 3px 3px 30px #131313;

          --light-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

          --warm-gradient: linear-gradient(
            90deg,
            rgba(131, 58, 180, 1) 0%,
            rgba(253, 29, 29, 1) 50%,
            rgba(252, 176, 69, 1) 100%
          );

          --green-gradient: linear-gradient(
            78deg,
            rgba(69, 253, 29, 1) 45%,
            rgba(69, 252, 245, 1) 100%
          );

          --color-a: #ff1f8c;
          --color-b: yellow;
          --punk-pink: var(--color-a);
        }

        /* MEDIA QUERY MIXIN */
        ${media.laptop`
          :root {
            --base-unit: 12px;
            --text-05: calc(var(--base-unit) * 6);
            --footer-height: calc(var(--base-unit) * 6);
          }
        `}

        ${media.xl`
          :root {
            --base-unit: 15px;
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
          // background: linear-gradient(
          //   180deg,
          //   rgba(0, 0, 0, 1) 0%,
          //   rgba(75, 5, 130, 1) 100%
          // );
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 1) 0%,
            hsl(274deg 93% 16%) 100%
          );
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
          height: auto;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: var(--header-z);
          padding: var(--space-md) var(--space-sm) var(--space-lg);
          gap: var(--space-sm);
          a {
            margin-right: 30px;
            font-family: var(--display-font) !important;
            font-size: var(--text-04);
            &:last-of-type {
              margin-right: 0;
            }
          }
          ${media.laptop`
            height: var(--header-height);
            flex-direction: row;
            justify-content: space-between;
            padding: 0 var(--space-sm);
          `}
          ${media.xl`
            position: sticky;
            top: 0;
          `}
        }

        .flex-row {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        footer {
          height: var(--footer-height);
          position: relative;
          ${media.laptop`
            position: fixed;
            bottom: 0;
            left: 0;
          `}
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

        .funky-header {
          font-size: var(--text-04);
          font-family: var(--display-font) !important;
          text-shadow: var(--funky-text-shadow);
          margin: 0;
          padding-top: 0;
          transform: rotate(-2deg);
        }

        .funky-button {
          ${buttonStyle};
          font-size: var(--text-03);
          font-family: var(--display-font) !important;
          width: 100%;
          max-width: 350px;
          border: 0;
          z-index: 100;
          background-color: pink;
          padding-bottom: 15px;
          ${media.tablet`
            padding-bottom: 20px;
          `}
          ${media.hover`
            background-color: #e7435f;
          `}
        }

        .hero-image-wrapper {
          position: relative;
          z-index: 10;
          filter: drop-shadow(0px 0px 15px #4c015f);
          ${media.laptop` 
            height: 50vh;
          `}
        }

        /* UTIL */
        .code-wrapper {
          text-align: start;
          border-radius: 5px;
          padding: 12px;
          background-color: #f3f3f3;
          * {
            color: var(--black) !important;
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
          font-family: var(--display-font) !important;
          text-shadow: 1px 1px 3px #000, 3px 3px 10px purple,
            3px 3px 15px yellow, 3px 3px 30px #ff9050;
        }

        .funky-shadow {
          box-shadow: 1px 1px 3px #000, 3px 3px 10px purple, 3px 3px 15px yellow,
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

        .subhead {
          padding: 0 0 var(--space-lg);
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          line-height: 1.25;
          font-size: var(--text-02);
          ${media.xl`
            max-width: 1200px;
          `}
        }

        /* ZORA SPECIFIC -- CLEAN UP
           - WALLET MODAL
        */

        .bold {
          font-weight: bold;
        }

        .full-justify {
          display: flex;
          justify-content: space-between;
          text-align: justify;
          align-items: flex-end;
        }

        .center {
          text-align: center;
        }

        .flex-between-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .drop-wrapper {
          max-width: 1140px;
          margin: 0 auto;
        }

        .drop-header {
          display: grid;
          grid-template-columns: 30vw auto;
          grid-gap: 80px;
          margin-bottom: 50px;

          @media (max-width: 1024px) {
            grid-gap: 40px;
          }

          @media (max-width: 690px) {
            grid-template-columns: 1fr;
          }

          img {
            display: block;
            margin: 0 auto;
            max-width: 100%;
          }

          @media (max-width: 690px) {
            .flex-row {
              display: block;
            }
          }

          .flex-row button {
            display: inline-block;
            margin: 0 auto;
            @media (min-width: 691px) {
              margin-left: 32px;
            }
          }
        }

        .drop-footer {
          display: grid;
          grid-template-columns: auto 220px;
          grid-gap: 90px;
          align-items: end;
          margin-top: 50px;

          @media (max-width: 690px) {
            grid-template-columns: 1fr;
            grid-gap: 30px;
          }

          img {
            max-width: 100%;
            margin-bottom: 10px;
          }
        }

        .drop-header-header {
          font-size: 8vw;
          @media (min-width: 1200px) {
            font-size: 96px;
          }
        }

        .drop-header-subheader {
          font-size: 4.9vw;
          @media (min-width: 1200px) {
            font-size: 56px;
          }
        }

        .drop-footer-phone {
          font-size: 3.7vw;
          @media (min-width: 1200px) {
            font-size: 45px;
          }
        }

        .drop-footer-socials {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
          grid-gap: 12px;

          a {
            text-align: center;
          }
        }

        .drop-header {
          dl {
            display: grid;
            grid-template-columns: max-content auto;
            grid-col-gap: 16px;
            grid-row-gap: 8px;
            margin-top: 20px;
            width: 100%;
          }
          dt {
            text-transform: uppercase;
            opacity: 0.4;
          }
          dd {
            text-align: right;
          }
        }

        .token-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          grid-gap: 25px;
          margin-top: 20px;

          img {
            max-width: 100%;
          }
        }

        .token-grid-token {
          min-width: 280px;
          position: relative;
          overflow: hidden;
          text-align: center;

          &:nth-child(1) {
            transform: scale(0.96) rotate(-2.56deg);
            @media (min-width: 1120px) {
              grid-column: 1 / 3;
            }
          }

          &:nth-child(2) {
            transform: rotate(2.06deg);
          }

          &:nth-child(6) {
            transform: rotate(1.06deg);
          }

          &:nth-child(8) {
            transform: rotate(-1.46deg);
          }

          &:nth-child(10) {
            @media (min-width: 1120px) {
              grid-column: 2 / 4;
            }
          }

          a {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            position: absolute;
            text-decoration: none;
            font-size: 2.6em;
            letter-spacing: 0.1em;
            background-blend-mode: multiply;
            background: rgba(0, 0, 0, 0.8);
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 35px;
            overflow: hidden;

            &:hover {
              opacity: 1;
            }
          }

          img {
            aspect-ratio: 1.625;
            object-fit: cover;
            height: 100%;
            width: 100%;
            border-radius: 35px;
            padding: 5px;
            background: conic-gradient(
              from 180deg at 50% 50%,
              #ff1f8c 0deg,
              #00ff37 65.63deg,
              #00aeef 202.5deg,
              #ff1f8c 360deg
            );
          }
        }

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
          border-radius: var(--space-md) !important;
          border: 2px solid var(--color-a);
        }

        .zora-wallet-walletOptionsList {
          padding: 0 0 0px !important;
          background: transparent !important;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .zora-wallet-walletOptionsWrapper {
          padding: 0 !important;
        }

        .zora-wallet-walletOption {
          ${smallPillButton};
          color: var(--color-b) !important;
          ${media.hover`
            color: var(--color-a)!important;
          `}
        }

        .zora-wallet-modalTitleText {
          color: var(--color-a) !important;
          text-transform: uppercase;
        }

        .zora-wallet-modalContent {
          padding: var(--space-sm) !important;
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
          font-size: var(--text-micro) !important;
          max-width: 300px;
          margin: auto;
          color: var(--color-a);
        }

        .zora-wallet-modalHeader {
          padding: 0 0 var(--space-sm) !important;
          display: flex;
          align-items: center;
          border-bottom: 0 !important;
        }

        .zora-wallet-modalClose {
          width: 35px;
          height: 35px;
          background-color: var(--color-a) !important;
          border-radius: 0px !important;
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
          padding: 0 !important;
          background: transparent !important;
          .zora--auction-house-modalHeader {
            display: none;
          }
          .zora--auction-house-modalDescription {
            padding-top: var(--space-sm);
          }
          .zora--auction-house-bidDisclaimerLine {
            font-size: var(--text-micro) !important;
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
