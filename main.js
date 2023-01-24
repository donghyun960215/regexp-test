const str = `
010-1234-5678
thece@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`


// const regexp = /the/gi
// console.log(str.match(regexp))
// console.log(regexp.test(str))
// console.log(str.replace(regexp,'AAA'))
// console.log(str.match(regexp))
// console.log(str.match(/\.$/gim))

// console.log(
//   str.match(/d$/gm)
//   )

console.log(
  str.match(/(?<=@).{1,}/g)
)
