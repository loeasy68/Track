//Actuall game enigne
toolScreenContent = `
<button onclick="add_background()">Add background</button>
<button onclick="add_character">Add character</button>
`

function back() {
  tool.innerHTML = `
  ${toolScreenContent}
  `
}

function add_background() {
  tool.innerHTML = `
  <input id="backgroundFile" type="file">
  <button onclick="back()">Back</button>
  `
  backgroundFile.addEventListener('change', (e) => {
        // Get a reference to the file
        const file = e.target.files[0];

        // Encode the file using the FileReader API
        const reader = new FileReader();
        reader.onloadend = () => {
            game_box.innerHTML = game_box.innerHTML + `<img src="${reader.result}" width="323rem">`
        };
        reader.readAsDataURL(file);
    });
}

function start() {
  jelluy().renderPage(`
  <div id="game_box" class="game-div">
  </div>
  <div class="tools" id="tool">
    ${toolScreenContent}
  </div>
  `,`
  
  `)
}



jelluy().startSite(
  `
<h1 class="center">Game enigne</h1>
<button onclick="start()">Go to enigne</button>
`,`

  `
);
