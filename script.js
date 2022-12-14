const stringLength = ((string) => {
  const split=  string.split("")
  let counter = 0;
  split.forEach((element,index) => {
    counter ++
  });
  if( counter >= 1 && counter <= 10 ) {
    return counter;
  }
  else {
     return 'Error';
    }
    
  });

  const reverseString= ((string) => {
    let revStr= "";
    const split=  string.split("")
    split.forEach((element) => {
      revStr = element + revStr 
      
    })
    return revStr
  })


module.exports= reverseString;
module.exports=stringLength;