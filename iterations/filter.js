let sub = ['java','c language','computer','javascript']
let value = sub.forEach((item) =>{
// console.log(item)
return item
})
console.log(value) // forEach() does not return value 

let number = [1,2,3,4,5,6,7]
let max = number.filter((item) =>{
    return item > 3
})
// console.log(max)

let empty = []
number.forEach((item) => {
    if(item > 2){
        empty.push(item)
    }

})
// console.log(empty)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let hbk = books.filter((item) => {
  return  item.publish >= 1981 && item.genre == "Non-Fiction"
  })
//   console.log(hbk)
  let userBooks = books.filter((bk) => (bk.title === 'Book Four'|| bk.edition >=2010))
  console.log(userBooks)