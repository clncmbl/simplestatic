'use strict'

document.head.innerHTML += `
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="main.css?v=1">`

async function wrapArticle() {

  const docfrag = document.createDocumentFragment()

  // Move the article element from under body to the new docfrag.
  docfrag.appendChild(document.querySelector('body>article'))

  // Try using fetch to get the wrapper html.
  const response = await fetch('wrapper.html')
  const html = await response.text()
  // TODO: Use response.ok, response.status, others(?) to help with error handling.
  document.body.innerHTML = html

  // Now move the original article (in the docfrag) to
  // contentcontainer.
  document.getElementById('contentcontainer').appendChild(docfrag)
}

window.addEventListener('DOMContentLoaded', async ev => {

  // Add classes before wrapping to avoid any complications
  // associated with wrapper.
  //addClasses()

  await wrapArticle()
})
