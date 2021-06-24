((sentence) =>{

  let firstLetter = sentence.charAt(0).toUpperCase();
  let slicedSentancePart = sentence.slice(1, 20);
  console.log(firstLetter + slicedSentancePart);
   

  // let uppercase = sentence.charAt(0).toUpperCase();
  // console.log(uppercase + " " + sentence);


})('i am a web developer'); 