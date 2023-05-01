const CategoryBox = [
  {
    id:"1",
    name:"movie"
  },
  {
    id:"2",
    name:"series"
  },
  {
    id:"3",
    name:"episode"
  }
]

const Year = () => {
  let num = [];
    for (let i = 1985; i < 2024; i++ ){
      num.push(i)
    }
  return num.reverse();
}

export {
  CategoryBox,
  Year  
}