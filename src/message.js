export function message(msg) {
  const El = document.createElement('p')
  El.innerHTML = msg
  document.body.append(El)
}
