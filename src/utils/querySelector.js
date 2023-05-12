export const $ = selector => {
  const result = document.querySelector(selector)
  return result
}
