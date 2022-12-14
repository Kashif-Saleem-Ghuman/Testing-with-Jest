const reverseString= ((string) => {
  let revStr= "";
  const split=  string.split("")
  split.forEach((element) => {
    revStr = element + revStr 
    
  })
  return revStr
})


module.exports= reverseString;