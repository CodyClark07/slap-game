let guyHealth = 100;
let totalHits = 0;
let guyIdleImg = './assests/guy-idle.png'
let guyDeadImg = './assests/guy-dead.png'

let attacks = {
  slap: {
    name: `slap`,
    value: -1,
    img: './assests/guy-slap.png'
  },
  punch: {
    name: `punch`,
    value: -5,
    img: './assests/guy-punch.png'
  },
  kick: {
    name: `kick`,
    value: -10,
    img: './assests/guy-kick.png'
  },
}


// NOTE Update Function
// This needs to Display the Health of GUY on DOM
function update(input) {
  // debugger
  let healthbar = document.getElementById('health')
  let hitcount = document.getElementById('hitCount')
  document.getElementById('current-health').style.width = `${guyHealth}%`
  healthbar.innerText = `${guyHealth}`
  hitcount.innerText = `${totalHits}`
  drawGuy(input)
  checkForDead()
}

// NOTE Draw the Dude
function drawGuy(input) {
  let guy = attacks[input].img;
  let guyImage = document.getElementById('guy-image')
  let seconds = 1000
  // @ts-ignore
  guyImage.src = `${guy}`
  let imageClear = function () {
    guyImage.src = `${guyIdleImg}`
  }
  setTimeout(imageClear, (seconds * .25));
}


// NOTE Slap function
// this needs to grab the attack input and reduce "GUYS" Health

function slap(input) {
  guyHealth += attacks[input].value
  console.log(attacks[input])
  console.log(`Guyshealth:${guyHealth}`)
  totalHits++
  update(input)
}

function checkForDead()
if guyHealth





update()