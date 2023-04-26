export default function handler (request, response) {
  response.status(200).json({
    name: Tteum,
    age: 20,
    isValid: true
  })
}