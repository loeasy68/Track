// Global variables
navOptions = `
<button onclick="videos()">Videos</button>
`
content = `
<h1>Content</h1>
`

// Video page
function videos() {
  jelluy().renderPage(`
  <h1>Football videos</h1>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/QhgOikf3AnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `,`
  
  `)
}


// Init site
jelluy().startSite(`
<nav>
  ${navOptions}
</nav>
<div id="content">
  ${content}
</div>
`,`

`)