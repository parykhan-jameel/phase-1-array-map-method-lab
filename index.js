const tutorials = [
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  'The Test Driven Development Workflow',
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
];

const titleCased = () => {
  return tutorials
  function titleCased (){
    const rslt = tutorials.map((e) => {
     const string=e.split(' ');
     const eFixed=string.map((s)=>{
       let rslt="";
       if(s[0]==s[0].toUpperCase()){
         rslt+=s;
       }
       else{
         rslt+=s[0].toUpperCase()+s.substring(1);
       }
       return rslt;
     });
     return eFixed.join(" ");
   });
   return rslt;
 }
}
