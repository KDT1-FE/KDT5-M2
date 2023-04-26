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

const Number = [
  {
    id:"1",
    name:"10"
  },
  {
    id:"2",
    name:"20"
  },
  {
    id:"3",
    name:"30"
  },
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
  Number,
  Year  
}