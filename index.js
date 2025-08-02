const quizData = [
  {
     question: "What is the capital of Andhra Pradesh?",
      options: ["Visakhapatnam", "Amaravati", "Vijayawada", "Guntur"],
       correct: 1 },
  { question: "What is the capital of Arunachal Pradesh?", options: ["Itanagar", "Naharlagun", "Pasighat", "Ziro"], correct: 1 },
  { question: "What is the capital of Assam?", options: ["Guwahati", "Dispur", "Silchar", "Tezpur"], correct: 1 },
  { question: "What is the capital of Bihar?", options: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"], correct: 0 },
  { question: "What is the capital of Chhattisgarh?", options: ["Bilaspur", "Raipur", "Durg", "Korba"], correct: 1 },
  { question: "What is the capital of Goa?", options: ["Margao", "Panaji", "Vasco da Gama", "Mapusa"], correct: 1 },
  { question: "What is the capital of Gujarat?", options: ["Ahmedabad", "Surat", "Gandhinagar", "Rajkot"], correct: 2 },
//   { question: "What is the capital of Haryana?", options: ["Faridabad", "Gurugram", "Chandigarh", "Panipat"], correct: "Chandigarh" },
//   { question: "What is the capital of Himachal Pradesh?", options: ["Shimla", "Dharamshala", "Mandi", "Solan"], correct: "Shimla" },
//   { question: "What is the capital of Jharkhand?", options: ["Jamshedpur", "Ranchi", "Dhanbad", "Bokaro"], correct: "Ranchi" },
//   { question: "What is the capital of Karnataka?", options: ["Mysuru", "Bengaluru", "Hubli", "Mangalore"], correct: "Bengaluru" },
//   { question: "What is the capital of Kerala?", options: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Alappuzha"], correct: "Thiruvananthapuram" },
//   { question: "What is the capital of Madhya Pradesh?", options: ["Indore", "Bhopal", "Gwalior", "Jabalpur"], correct: "Bhopal" },
//   { question: "What is the capital of Maharashtra?", options: ["Nagpur", "Mumbai", "Pune", "Nashik"], correct: "Mumbai" },
//   { question: "What is the capital of Manipur?", options: ["Imphal", "Thoubal", "Churachandpur", "Ukhrul"], correct: "Imphal" },
//   { question: "What is the capital of Meghalaya?", options: ["Shillong", "Tura", "Jowai", "Nongpoh"], correct: "Shillong" },
//   { question: "What is the capital of Mizoram?", options: ["Aizawl", "Lunglei", "Champhai", "Serchhip"], correct: "Aizawl" },
//   { question: "What is the capital of Nagaland?", options: ["Dimapur", "Kohima", "Mokokchung", "Tuensang"], correct: "Kohima" },
//   { question: "What is the capital of Odisha?", options: ["Cuttack", "Bhubaneswar", "Rourkela", "Puri"], correct: "Bhubaneswar" },
//   { question: "What is the capital of Punjab?", options: ["Amritsar", "Ludhiana", "Chandigarh", "Jalandhar"], correct: "Chandigarh" },
//   { question: "What is the capital of Rajasthan?", options: ["Jaipur", "Jodhpur", "Udaipur", "Kota"], correct: "Jaipur" },
//   { question: "What is the capital of Sikkim?", options: ["Gangtok", "Namchi", "Geyzing", "Mangan"], correct: "Gangtok" },
//   { question: "What is the capital of Tamil Nadu?", options: ["Chennai", "Madurai", "Coimbatore", "Tiruchirappalli"], correct: "Chennai" },
//   { question: "What is the capital of Telangana?", options: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"], correct: "Hyderabad" },
//   { question: "What is the capital of Tripura?", options: ["Agartala", "Dharmanagar", "Udaipur", "Kailashahar"], correct: "Agartala" },
//   { question: "What is the capital of Uttar Pradesh?", options: ["Lucknow", "Kanpur", "Varanasi", "Agra"], correct: "Lucknow" },
//   { question: "What is the capital of Uttarakhand?", options: ["Dehradun", "Haridwar", "Nainital", "Haldwani"], correct: "Dehradun" },
  { question: "What is the capital of West Bengal?", options: ["Kolkata", "Darjeeling", "Siliguri", "Howrah"], correct: 0 }
];

// Step 2: Javascript Intialization
const quiz = document.querySelector("#quiz")
const answerElem = document.querySelectorAll(".answer")

const questionElem= document.querySelector("#question")

const[option_1,option_2,option_3,option_4]=document.querySelectorAll("#option_1,#option_2,#option_3,#option_4")

const submitBtn =document.querySelector("#submit")

let currentQuiz =0;
let score=0;

//LoadQuiz function

const loadQuiz = ()=>{

    const{question,options}=quizData[currentQuiz]  // for getting question
    console.log(options);
    

    questionElem.innerText=`${currentQuiz+1}: ${question}`;

    options.forEach((curOption,index)=>{ //for getting answer
       window[`option_${index+1}`].innerText=curOption
    })

   }

loadQuiz()


// Get selected Answer Function on Button click

const getSelectedOption = ()=>{
    // let ans_index;
    // answerElem.forEach((curOption,index)=>{
    //      if(curOption.checked){ // user clicked in that option
    //     ans_index=index; // ans_index=> userclick index and index=> the quiz data index
    // }

    // })
    // return ans_index;  we can skip this code and code like this
    
    
     let answerElement=Array.from(answerElem)

   return answerElement.findIndex((curElem)=>curElem.checked) // it will say findIndex is  not a function to solve it we can do like this
   
}

// deselectedAnswers

const deselectedAnswers = ()=>{
   answerElem.forEach((curElem)=>curElem.checked=false)
}

submitBtn.addEventListener("click",()=>{
 const selectedOptionIndex = getSelectedOption() // to get the id which user has clicked
 console.log(selectedOptionIndex); // here we get index after selcting the input and clicking on button
 if(selectedOptionIndex===quizData[currentQuiz].correct){
   score=score+1;
 }
  currentQuiz++;  // to get another question

  if(currentQuiz<quizData.length){
   deselectedAnswers();  // here it is problem when we r click a and go the next question in other question it also selected automatically a to remove this we iuse this function
   loadQuiz(); // this for loading the quiz
  }else{
   quiz.innerHTML=`
   <div class="result">
   <h2> 🏆 Your Score : ${score}/${quizData.length} Correct Answers</h2>

   <p>  Congratulations on completing the quiz 🎉 !</p>
   <button class="reload-button" onclick="location.reload()">Play Again <?button>

   `
  }
 
})