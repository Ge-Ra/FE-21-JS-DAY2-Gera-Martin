((sentence) =>{

  let firstLetter = sentence.charAt(0).toUpperCase();
  let slicedSentancePart1 = sentence.slice(1, 20);
  console.log(firstLetter + slicedSentancePart1);
   

  // let uppercase = sentence.charAt(0).toUpperCase();
  // console.log(uppercase + " " + sentence);


})('my name is martin'); 