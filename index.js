


// Step 2: Javascript Intialization

const quizData = [
  { question: "What is the capital of Andhra Pradesh?", options: ["Amaravati", "Vijayawada", "Visakhapatnam", "Guntur"], correct: 0 },
  {
    question: "Which state is led by Chief Minister Rekha Gupta?",
    options: ["Haryana", "Delhi", "Uttar Pradesh", "Punjab"],
    correct: 1
  },
  { question: "What is the capital of Arunachal Pradesh?", options: ["Ziro", "Itanagar", "Pasighat", "Naharlagun"], correct: 1 },
  { question: "What is the capital of Assam?", options: ["Tezpur", "Silchar", "Guwahati", "Dispur"], correct: 3 },
  {
    question: "Which state is led by Chief Minister M. K. Stalin?",
    options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    correct: 2
  },
  { question: "What is the capital of Bihar?", options: ["Gaya", "Patna", "Bhagalpur", "Muzaffarpur"], correct: 1 },
  { question: "What is the capital of Chhattisgarh?", options: ["Raipur", "Bilaspur", "Korba", "Durg"], correct: 0 },
   {
    question: "Which state is led by Chief Minister Yogi Adityanath?",
    options: ["Uttar Pradesh", "Rajasthan", "Bihar", "Madhya Pradesh"],
    correct: 0
  },
  { question: "What is the capital of Goa?", options: ["Vasco da Gama", "Panaji", "Margao", "Mapusa"], correct: 1 },
  { question: "What is the capital of Gujarat?", options: ["Ahmedabad", "Gandhinagar", "Surat", "Rajkot"], correct: 1 },
   
   {
    question: "Which state is led by Chief Minister Mamata Banerjee?",
    options: ["Jharkhand", "West Bengal", "Assam", "Odisha"],
    correct: 1
  },
  { question: "What is the capital of Haryana?", options: ["Chandigarh", "Gurugram", "Faridabad", "Panipat"], correct: 0 },
  { question: "What is the capital of Himachal Pradesh?", options: ["Dharamshala", "Solan", "Shimla", "Mandi"], correct: 2 },
  {
    question: "Which state is led by Chief Minister Nitish Kumar?",
    options: ["Chhattisgarh", "Bihar", "Jharkhand", "Uttar Pradesh"],
    correct: 1
  },
  { question: "What is the capital of Jharkhand?", options: ["Ranchi", "Dhanbad", "Bokaro", "Jamshedpur"], correct: 0 },
  { question: "What is the capital of Karnataka?", options: ["Mysuru", "Hubli", "Bengaluru", "Mangalore"], correct: 2 },
  {
    question: "Which state is led by Chief Minister Revanth Reddy?",
    options: ["Tamil Nadu", "Andhra Pradesh", "Telangana", "Karnataka"],
    correct: 2
  },
  { question: "What is the capital of Kerala?", options: ["Thiruvananthapuram", "Kozhikode", "Kochi", "Alappuzha"], correct: 0 },
  {
    question: "Which state is led by Chief Minister Pushkar Singh Dhami?",
    options: ["Haryana", "Punjab", "Uttarakhand", "Himachal Pradesh"],
    correct: 2
  },
  { question: "What is the capital of Madhya Pradesh?", options: ["Bhopal", "Jabalpur", "Indore", "Gwalior"], correct: 0 },
  { question: "What is the capital of Maharashtra?", options: ["Pune", "Mumbai", "Nagpur", "Nashik"], correct: 1 },
  { question: "What is the capital of Manipur?", options: ["Imphal", "Ukhrul", "Thoubal", "Churachandpur"], correct: 0 },
   
  {
    question: "Which state is led by Chief Minister Bhupendra Patel?",
    options: ["Rajasthan", "Madhya Pradesh", "Gujarat", "Maharashtra"],
    correct: 2
  },
  { question: "What is the capital of Meghalaya?", options: ["Jowai", "Tura", "Nongpoh", "Shillong"], correct: 3 },
  { question: "What is the capital of Mizoram?", options: ["Aizawl", "Serchhip", "Champhai", "Lunglei"], correct: 0 },
  
  {
    question: "Which state is led by Chief Minister Siddaramaiah?",
    options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    correct: 1
  },
  { question: "What is the capital of Nagaland?", options: ["Dimapur", "Kohima", "Tuensang", "Mokokchung"], correct: 1 },
  {
    question: "Which state is led by Chief Minister Pinarayi Vijayan?",
    options: ["Tamil Nadu", "Kerala", "Goa", "Karnataka"],
    correct: 1
  },
  { question: "What is the capital of Odisha?", options: ["Cuttack", "Bhubaneswar", "Puri", "Rourkela"], correct: 1 },
  { question: "What is the capital of Punjab?", options: ["Jalandhar", "Ludhiana", "Chandigarh", "Amritsar"], correct: 2 },
   
  {
    question: "Which state is led by Chief Minister Vishnu Deo Sai?",
    options: ["Chhattisgarh", "Jharkhand", "Odisha", "Bihar"],
    correct: 0
  },
  { question: "What is the capital of Rajasthan?", options: ["Jaipur", "Kota", "Udaipur", "Jodhpur"], correct: 0 },
  { question: "What is the capital of Sikkim?", options: ["Mangan", "Namchi", "Gangtok", "Geyzing"], correct: 2 },
  
  {
    question: "Which state is led by Chief Minister Mohan Yadav?",
    options: ["Madhya Pradesh", "Rajasthan", "Gujarat", "Uttar Pradesh"],
    correct: 0
  },
  { question: "What is the capital of Tamil Nadu?", options: ["Chennai", "Madurai", "Tiruchirappalli", "Coimbatore"], correct: 0 },
  
 
  {
    question: "Which state is led by Chief Minister Bhajan Lal Sharma?",
    options: ["Punjab", "Haryana", "Rajasthan", "Madhya Pradesh"],
    correct: 2
  },
  {
    question: "Which state is led by Chief Minister Nayab Singh Saini?",
    options: ["Punjab", "Uttar Pradesh", "Delhi", "Haryana"],
    correct: 3
  },
  { question: "What is the capital of Telangana?", options: ["Warangal", "Hyderabad", "Nizamabad", "Karimnagar"], correct: 1 },
  { question: "What is the capital of Tripura?", options: ["Agartala", "Dharmanagar", "Kailashahar", "Udaipur"], correct: 0 },
   {
    question: "Which state is led by Chief Minister Sukhvinder Singh Sukhu?",
    options: ["Uttarakhand", "Punjab", "Himachal Pradesh", "Jammu & Kashmir"],
    correct: 2
  },
  { question: "What is the capital of Uttar Pradesh?", options: ["Lucknow", "Varanasi", "Kanpur", "Agra"], correct: 0 },
  { question: "What is the capital of Uttarakhand?", options: ["Nainital", "Dehradun", "Haldwani", "Haridwar"], correct: 1 },
  { question: "What is the capital of West Bengal?", options: ["Kolkata", "Darjeeling", "Howrah", "Siliguri"], correct: 0 },
  {
    question: "Which state is led by Chief Minister Hemant Soren?",
    options: ["Bihar", "Chhattisgarh", "Jharkhand", "Odisha"],
    correct: 2
  },
  {
    question: "What is the capital of Andaman and Nicobar Islands?",
    options: ["Port Blair", "Havelock", "Diglipur", "Car Nicobar"],
    correct: 0
  },
  
  {
    question: "Which state is led by Chief Minister Conrad Sangma?",
    options: ["Nagaland", "Meghalaya", "Manipur", "Arunachal Pradesh"],
    correct: 1
  },
   
  {
    question: "Which state is led by Chief Minister Manik Saha?",
    options: ["Meghalaya", "Tripura", "Mizoram", "Assam"],
    correct: 1
  },
  {
    question: "What is the capital of Chandigarh?",
    options: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"],
    correct: 0
  },
   {
    question: "Which state is led by Chief Minister Lalduhoma?",
    options: ["Mizoram", "Manipur", "Nagaland", "Tripura"],
    correct: 0
  },
  {
    question: "What is the capital of Dadra and Nagar Haveli and Daman and Diu?",
    options: ["Silvassa", "Daman", "Diu", "Vapi"],
    correct: 0
  },
   {
    question: "Which state is led by Chief Minister Prem Singh Tamang?",
    options: ["Meghalaya", "Arunachal Pradesh", "Sikkim", "Mizoram"],
    correct: 2
  },
  {
    question: "What is the capital of Delhi?",
    options: ["New Delhi", "Delhi Cantt", "Noida", "Faridabad"],
   correct: 0
  },
  {
    question: "Which state is led by Chief Minister Neiphiu Rio?",
    options: ["Manipur", "Nagaland", "Arunachal Pradesh", "Meghalaya"],
    correct: 1
  },
  {
    question: "Which state is led by Chief Minister Pema Khandu?",
    options: ["Nagaland", "Sikkim", "Arunachal Pradesh", "Assam"],
    correct: 2
  },
  {
    question: "What is the capital of Jammu and Kashmir?",
    options: ["Srinagar", "Jammu", "Pahalgam", "Anantnag"],
    correct: 0
  },
  
  {
    question: "Which state is led by Chief Minister Mohan Charan Majhi?",
    options: ["West Bengal", "Odisha", "Chhattisgarh", "Jharkhand"],
    correct: 1
  },
  {
    question: "What is the capital of Ladakh?",
    options: ["Leh", "Kargil", "Padum", "Nubra"],
    correct: 0
  },
   {
    question: "Which state is led by Chief Minister Bhagwant Mann?",
    options: ["Delhi", "Punjab", "Uttar Pradesh", "Haryana"],
    correct: 1
  },
  {
    question: "What is the capital of Lakshadweep?",
    options: ["Kavaratti", "Agatti", "Minicoy", "Amini"],
    correct: 0
  },
  {
    question: "What is the capital of Puducherry?",
    options: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
    correct: 0
  },
  {
    question: "Which UT is led by Chief Minister N. Rangasamy?",
    options: ["Goa", "Puducherry", "Kerala", "Tamil Nadu"],
    correct: 1
  },
  
];


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