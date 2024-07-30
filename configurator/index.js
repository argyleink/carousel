// import { getHighlighter } from 'shiki'

import {update} from '../polyfill/polyfill.js'

import './js/navigation-buttons.js'

import './js/pagination-buttons.js'
import './js/pagination-button-type.js'
import './js/pagination-by.js'

import './js/scrollbar-visibility.js'

document.addEventListener('DOMContentLoaded', update);

// const highlighter = await getHighlighter({
//   themes: ['nord'],
//   langs: ['css'],
// })

// const code = highlighter.codeToHtml(carouselSnippet.innerText, {
//   lang: 'css',
//   theme: 'nord'
// })

// carouselSnippet.innerHTML = code