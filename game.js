let guyHealth = 100;
let totalHits = 0;



let attacks = {
  slap: {
    name: `slap`,
    value: -1,
  },
  punch: {
    name: `punch`,
    value: -5,
  },
  kick: {
    name: `kick`,
    value: -10,
  },
}

// NOTE Update Function
// This needs to Display the Health of GUY on DOM
function update() {
  // debugger
  let healthbar = document.getElementById('health')
  let hitcount = document.getElementById('hitCount')
  document.getElementById('current-health').style.width = `${guyHealth}%`
  healthbar.innerText = `${guyHealth}`
  hitcount.innerText = `${totalHits}`

}


// NOTE Slap function
// this needs to grab the attack input and reduce "GUYS" Health

function slap(input) {
  guyHealth += attacks[input].value
  console.log(attacks[input])
  console.log(`Guyshealth:${guyHealth}`)
  totalHits++
  update()
}





update()