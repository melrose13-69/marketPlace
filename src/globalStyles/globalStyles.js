import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle` 
    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
    }
    
    body {
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
        background-color: #fff;
        color: #000;
        font-family: 'Josefin Sans', sans-serif;
    }
    body a {
        font-weight: 700;
        color: #000;
    }
    main {
        display: block;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
     p {
        font-size: inherit;
        margin: 0;
        font-weight: 400;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        display: block;
    }
    hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
    }
    
    pre {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }
    
    a {
      background-color: transparent;
      text-decoration: none;
      font-weight: 400;
    }
    
    abbr[title] {
      border-bottom: none; /* 1 */
      text-decoration: underline; /* 2 */
      text-decoration: underline dotted; /* 2 */
    }
    
    b,
    strong {
      font-weight: bolder;
    }
    
    code,
    kbd,
    samp {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }
    
    small {
      font-size: 80%;
    }
    
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    
    sub {
    bottom: -0.25em;
    }
    
    sup {
        top: -0.5em;
    }
    
    img {
         border-style: none;
    }
    
    button,
    input,
    optgroup,
    select,
    textarea {
          font-family: inherit; /* 1 */
          font-size: 100%; /* 1 */
          line-height: 1.15; /* 1 */
          margin: 0; /* 2 */
          border: 1px solid #e6ecf5;
          outline: none;
          resize: none;
          color: #515365;
          padding: 10px
    }
    
    button,
    input { 
         overflow: visible;
         outline: none;
    }
    input[disabled] {
        background: transparent;
        border: none;
        user-select: none;
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
    
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
         outline: 1px dotted ButtonText;
    }
    
    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }
    
    legend {
          box-sizing: border-box; /* 1 */
          color: inherit; /* 2 */
          display: table; /* 1 */
          max-width: 100%; /* 1 */
          padding: 0; /* 3 */
          white-space: normal; /* 1 */
    }
    
    progress {
          vertical-align: baseline;
    }
    
    textarea {
          overflow: auto;
    }
    
    [type="checkbox"],
    [type="radio"] {
          box-sizing: border-box; /* 1 */
          padding: 0; /* 2 */
    }
    
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
          height: auto;
    }
    
    [type="search"] {
          -webkit-appearance: textfield; /* 1 */
          outline-offset: -2px; /* 2 */
    }
    
    [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
    }
    
    ::-webkit-file-upload-button {
          -webkit-appearance: button; /* 1 */
          font: inherit; /* 2 */
    }
    
    details {
        display: block;
    }
    
    summary {
        display: list-item;
    }
    
    template {
        display: none;
    }
    
    [hidden] {
        display: none;    
    }
    
    .container {
        max-width: 1250px;
        padding: 0 25px;
        margin: 0 auto;
        height: 100%;
        width: 100%;
    }
    .title {
        font-size: 3rem;
        margin-bottom: 30px;
    }
    
    .product-name {
        font-size: 1.5625rem;
        font-weight: 800;
        margin-bottom: 0.625rem;
    }
    .product-name:hover {
        text-decoration: underline;
    }
    
    .product-price {
        color: #FF2020;
        font-size: 1rem;
    }
    .products-inner {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    
    .section {
        margin-bottom: 100px;
    }
    .sticky-container {
        position: sticky;
        top: 0'
    }
 `;

export default GlobalStyle;