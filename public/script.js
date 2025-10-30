const gd = document.querySelector('.gd')
const dg = document.querySelector('.dg')
const allMotor = document.getElementById('allMotor')
let all1 = 0
let all2 = 0

gd.addEventListener('click', () => {
  all1 = gd.valueAsNumber
  allMotor.innerText = all1 + all2
})

dg.addEventListener('click', () => {
  all2 = dg.valueAsNumber
  allMotor.innerText = all1 + all2
})

