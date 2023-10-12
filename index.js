/* eslint-disable no-unused-vars */
tarjetas()
function copiar(color){
  navigator.clipboard.writeText(color)
}
function tarjetas(){
  const tarjetasDeColores = document.querySelector('#tarjetasDeColores')
  const sombrasDeColoresSm = document.querySelector('#sombrasDeColoresSm')
  const sombrasDeColoresMd = document.querySelector('#sombrasDeColoresMd')
  const sombrasDeColoresLg = document.querySelector('#sombrasDeColoresLg')
  const sombrasDeColoresBlur = document.querySelector('#sombrasDeColoresBlur')
  const botonesDeColores = document.querySelector('#botonesDeColores')
  const botonesOutlineDeColores = document.querySelector('#botonesOutlineDeColores')
  const textoDeColores = document.querySelector('#textoDeColores')
  const fondosTextosNegros = document.querySelector('#fondosTextosNegros')
  const fondosTextosBlancos = document.querySelector('#fondosTextosBlancos')
  const bordesSection = document.querySelector('#bordesSection')
  const alertasSection = document.querySelector('#alertasSection')
  const hrSection = document.querySelector('#hrSection')
  const colores = [
    {cyan: '#41dfff'},
    {darkblue:'#2b6be1'},
    {darkgray: '#555555'},
    {green: '#199b37'},
    {indigo: '#6610f2'},
    {lemon: '#80eb15'},
    {lightgray: '#DDDDDD'},
    {lightpink:'#e5b1c2'},
    {magenta:'#c20952'},
    {darkmagenta:'#74366F'},
    {orange: '#fd7e14'},
    {pink: '#d63384'},
    {purple: '#6f42c1'},
    {teal: '#20c997'},
    {yellow: '#f5b800'},
    {primary: '#0d6efd'},
    {secondary: '#6c757d'},
    {success: '#198754'},
    {danger: '#dc3545'},
    {warning: '#ffc107'},
    {info: '#0dcaf0'},
    {light: '#f8f9fa'},
    {dark: '#212529'},
    {night: '#00003a'},
  ]
  let tarjetas = '<div class="row p-4 text-center">'
  let sombrasSm = '<div class="row text-center">'
  let sombrasMd = '<div class="row text-center">'
  let sombrasLg = '<div class="row text-center">'
  let sombrasBlur = '<div class="row text-center">'
  let botones = '<div class="row">'
  let botonesOutline = '<div class="row">'
  let texto = '<div class="row">'
  let fondosNegros = '<div class="row">'
  let fondosBlancos = '<div class="row">'
  let bordes = '<div class="row">'
  let alertas = '<div class="row">'
  let hr = '<div class="row">'
  let contador = 0

  for(let color of colores){
    const colorName = String(Object.keys(color))
    const colorHex = color[colorName].toUpperCase()
    const colorRGB = hexToRgb(colorHex)
    const textWhite = colorName.toUpperCase() != 'LIGHT' ?'text-white':'text-dark'
    tarjetas +=  `
        <div class="col">
          <article class="card card-200 shadow-${colorName}-blur border-${colorName}" >
            <section class="card-body bg-${colorName} text-center" >
              <h6 class="${textWhite}">${colorName.toUpperCase()}</h6>
              <h6 class="${textWhite}">${colorHex}</h6>
              <p class="${textWhite} small">rgba(${colorRGB},1)</p>
            </section>
            <section class="card-footer">
              <button class="btn btn-block btn-${colorName}" id="${colorName}" onclick="copiar('${colorHex}')">Copiar</button>
            </section>
          </article>
        </div>`
    sombrasSm +=`<div class="col m-5 mb-2 shadow-${colorName}-sm rounded card-100">shadow-${colorName}-sm</div>`
    sombrasMd +=`<div class="col m-5 mb-2 shadow-${colorName}-md rounded card-100">shadow-${colorName}-md</div>`
    sombrasLg +=`<div class="col m-5 mb-2 shadow-${colorName}-lg rounded card-100">shadow-${colorName}-lg</div>`
    sombrasBlur +=`<div class="col m-5 p-4 shadow-${colorName}-blur rounded card-100">shadow-${colorName}-blur</div>`
    botones +=`<div class="col mb-2 d-grid gap-2"><button class="btn btn-${colorName}">btn-${colorName}</button></div>`
    botonesOutline +=`<div class="col mb-2 d-grid gap-2"><button class="btn btn-outline-${colorName}">btn-outline-${colorName}</button></div>`
    texto +=`<div class="col mb-2 text-${colorName}">text-${colorName}</div>`
    fondosNegros +=`<div class="col m-2 bg-${colorName}">bg-${colorName}</div>`
    fondosBlancos +=`<div class="col m-2 bg-${colorName} text-white">bg-${colorName}</div>`
    bordes +=`<div class="col m-2 border border-${colorName} text-${colorName}">border-${colorName}</div>`
    alertas +=`<div class="col m-2 alert alert-${colorName}">alert-${colorName}</div>`
    hr +=`<div class="col mb-2 text-center"><hr class="hr-${colorName}">hr-${colorName}</div>`
    contador++
    if(contador % 8 == 0){
      tarjetas +='</div><div class="row p-4 text-center">'
      sombrasSm +='</div><div class="row text-center">'
      sombrasMd +='</div><div class="row text-center">'
      sombrasLg +='</div><div class="row text-center">'
      sombrasBlur +='</div><div class="row text-center">'
      texto +='</div><div class="row">'
      fondosNegros +='</div><div class="row">'
      fondosBlancos +='</div><div class="row">'
      botones +='</div><div class="row">'
      bordes +='</div><div class="row">'
      botonesOutline +='</div><div class="row">'
      alertas +='</div><div class="row">'
      hr +='</div><div class="row">'
    }
  }
  tarjetas +='</div>'
  tarjetasDeColores.innerHTML = tarjetas
  sombrasDeColoresSm.innerHTML = sombrasSm
  sombrasDeColoresMd.innerHTML = sombrasMd
  sombrasDeColoresLg.innerHTML = sombrasLg
  sombrasDeColoresBlur.innerHTML = sombrasBlur
  botonesDeColores.innerHTML = botones
  botonesOutlineDeColores.innerHTML = botonesOutline
  textoDeColores.innerHTML = texto
  fondosTextosNegros.innerHTML = fondosNegros
  fondosTextosBlancos.innerHTML = fondosBlancos
  bordesSection.innerHTML = bordes
  alertasSection.innerHTML = alertas
  hrSection.innerHTML = hr
}
function hexToRgb(hex) {
  return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
}

const storedTheme = localStorage.getItem('theme')
const themeIcon = {
  auto:'<i class="fa-regular fa-circle-half-stroke fa-fw"></i>',
  dark:'<i class="fa-regular fa-moon-stars fa-fw"></i>',
  light:'<i class="fa-regular fa-sun fa-fw"></i>'
}

if (storedTheme != null) {
  document.documentElement.setAttribute('data-bs-theme', storedTheme)
  document.querySelector('#btn-theme').innerHTML = themeIcon[storedTheme]
}else{
  document.documentElement.setAttribute('data-bs-theme', 'auto')
  localStorage.setItem('theme', 'auto')
  document.querySelector('#btn-theme').innerHTML = themeIcon['auto']
}

function changeTheme(theme){
  document.documentElement.setAttribute('data-bs-theme', theme)
  localStorage.setItem('theme', theme)
  document.querySelector('#btn-theme').innerHTML = themeIcon[theme]
}
