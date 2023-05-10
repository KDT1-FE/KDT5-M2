export default function handler(request, response) {
  response.status(200).json({
    name: 'Dragon',
    age: 100,
    isValid: true
  })
}