


// Step 2: Javascript Intialization

// const quizData = [
//   { question: "What is the capital of Andhra Pradesh?", options: ["Amaravati", "Vijayawada", "Visakhapatnam", "Guntur"], correct: 0 },
//   {
//     question: "Which state is led by Chief Minister Rekha Gupta?",
//     options: ["Haryana", "Delhi", "Uttar Pradesh", "Punjab"],
//     correct: 1
//   },
//   { question: "What is the capital of Arunachal Pradesh?", options: ["Ziro", "Itanagar", "Pasighat", "Naharlagun"], correct: 1 },
//   { question: "What is the capital of Assam?", options: ["Tezpur", "Silchar", "Guwahati", "Dispur"], correct: 3 },
//   {
//     question: "Which state is led by Chief Minister M. K. Stalin?",
//     options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
//     correct: 2
//   },
//   { question: "What is the capital of Bihar?", options: ["Gaya", "Patna", "Bhagalpur", "Muzaffarpur"], correct: 1 },
//   { question: "What is the capital of Chhattisgarh?", options: ["Raipur", "Bilaspur", "Korba", "Durg"], correct: 0 },
//    {
//     question: "Which state is led by Chief Minister Yogi Adityanath?",
//     options: ["Uttar Pradesh", "Rajasthan", "Bihar", "Madhya Pradesh"],
//     correct: 0
//   },
//   { question: "What is the capital of Goa?", options: ["Vasco da Gama", "Panaji", "Margao", "Mapusa"], correct: 1 },
//   { question: "What is the capital of Gujarat?", options: ["Ahmedabad", "Gandhinagar", "Surat", "Rajkot"], correct: 1 },
   
//    {
//     question: "Which state is led by Chief Minister Mamata Banerjee?",
//     options: ["Jharkhand", "West Bengal", "Assam", "Odisha"],
//     correct: 1
//   },
//   { question: "What is the capital of Haryana?", options: ["Chandigarh", "Gurugram", "Faridabad", "Panipat"], correct: 0 },
//   { question: "What is the capital of Himachal Pradesh?", options: ["Dharamshala", "Solan", "Shimla", "Mandi"], correct: 2 },
//   {
//     question: "Which state is led by Chief Minister Nitish Kumar?",
//     options: ["Chhattisgarh", "Bihar", "Jharkhand", "Uttar Pradesh"],
//     correct: 1
//   },
//   { question: "What is the capital of Jharkhand?", options: ["Ranchi", "Dhanbad", "Bokaro", "Jamshedpur"], correct: 0 },
//   { question: "What is the capital of Karnataka?", options: ["Mysuru", "Hubli", "Bengaluru", "Mangalore"], correct: 2 },
//   {
//     question: "Which state is led by Chief Minister Revanth Reddy?",
//     options: ["Tamil Nadu", "Andhra Pradesh", "Telangana", "Karnataka"],
//     correct: 2
//   },
//   { question: "What is the capital of Kerala?", options: ["Thiruvananthapuram", "Kozhikode", "Kochi", "Alappuzha"], correct: 0 },
//   {
//     question: "Which state is led by Chief Minister Pushkar Singh Dhami?",
//     options: ["Haryana", "Punjab", "Uttarakhand", "Himachal Pradesh"],
//     correct: 2
//   },
//   { question: "What is the capital of Madhya Pradesh?", options: ["Bhopal", "Jabalpur", "Indore", "Gwalior"], correct: 0 },
//   { question: "What is the capital of Maharashtra?", options: ["Pune", "Mumbai", "Nagpur", "Nashik"], correct: 1 },
//   { question: "What is the capital of Manipur?", options: ["Imphal", "Ukhrul", "Thoubal", "Churachandpur"], correct: 0 },
   
//   {
//     question: "Which state is led by Chief Minister Bhupendra Patel?",
//     options: ["Rajasthan", "Madhya Pradesh", "Gujarat", "Maharashtra"],
//     correct: 2
//   },
//   { question: "What is the capital of Meghalaya?", options: ["Jowai", "Tura", "Nongpoh", "Shillong"], correct: 3 },
//   { question: "What is the capital of Mizoram?", options: ["Aizawl", "Serchhip", "Champhai", "Lunglei"], correct: 0 },
  
//   {
//     question: "Which state is led by Chief Minister Siddaramaiah?",
//     options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
//     correct: 1
//   },
//   { question: "What is the capital of Nagaland?", options: ["Dimapur", "Kohima", "Tuensang", "Mokokchung"], correct: 1 },
//   {
//     question: "Which state is led by Chief Minister Pinarayi Vijayan?",
//     options: ["Tamil Nadu", "Kerala", "Goa", "Karnataka"],
//     correct: 1
//   },
//   { question: "What is the capital of Odisha?", options: ["Cuttack", "Bhubaneswar", "Puri", "Rourkela"], correct: 1 },
//   { question: "What is the capital of Punjab?", options: ["Jalandhar", "Ludhiana", "Chandigarh", "Amritsar"], correct: 2 },
   
//   {
//     question: "Which state is led by Chief Minister Vishnu Deo Sai?",
//     options: ["Chhattisgarh", "Jharkhand", "Odisha", "Bihar"],
//     correct: 0
//   },
//   { question: "What is the capital of Rajasthan?", options: ["Jaipur", "Kota", "Udaipur", "Jodhpur"], correct: 0 },
//   { question: "What is the capital of Sikkim?", options: ["Mangan", "Namchi", "Gangtok", "Geyzing"], correct: 2 },
  
//   {
//     question: "Which state is led by Chief Minister Mohan Yadav?",
//     options: ["Madhya Pradesh", "Rajasthan", "Gujarat", "Uttar Pradesh"],
//     correct: 0
//   },
//   { question: "What is the capital of Tamil Nadu?", options: ["Chennai", "Madurai", "Tiruchirappalli", "Coimbatore"], correct: 0 },
  
 
//   {
//     question: "Which state is led by Chief Minister Bhajan Lal Sharma?",
//     options: ["Punjab", "Haryana", "Rajasthan", "Madhya Pradesh"],
//     correct: 2
//   },
//   {
//     question: "Which state is led by Chief Minister Nayab Singh Saini?",
//     options: ["Punjab", "Uttar Pradesh", "Delhi", "Haryana"],
//     correct: 3
//   },
//   { question: "What is the capital of Telangana?", options: ["Warangal", "Hyderabad", "Nizamabad", "Karimnagar"], correct: 1 },
//   { question: "What is the capital of Tripura?", options: ["Agartala", "Dharmanagar", "Kailashahar", "Udaipur"], correct: 0 },
//    {
//     question: "Which state is led by Chief Minister Sukhvinder Singh Sukhu?",
//     options: ["Uttarakhand", "Punjab", "Himachal Pradesh", "Jammu & Kashmir"],
//     correct: 2
//   },
//   { question: "What is the capital of Uttar Pradesh?", options: ["Lucknow", "Varanasi", "Kanpur", "Agra"], correct: 0 },
//   { question: "What is the capital of Uttarakhand?", options: ["Nainital", "Dehradun", "Haldwani", "Haridwar"], correct: 1 },
//   { question: "What is the capital of West Bengal?", options: ["Kolkata", "Darjeeling", "Howrah", "Siliguri"], correct: 0 },
//   {
//     question: "Which state is led by Chief Minister Hemant Soren?",
//     options: ["Bihar", "Chhattisgarh", "Jharkhand", "Odisha"],
//     correct: 2
//   },
//   {
//     question: "What is the capital of Andaman and Nicobar Islands?",
//     options: ["Port Blair", "Havelock", "Diglipur", "Car Nicobar"],
//     correct: 0
//   },
  
//   {
//     question: "Which state is led by Chief Minister Conrad Sangma?",
//     options: ["Nagaland", "Meghalaya", "Manipur", "Arunachal Pradesh"],
//     correct: 1
//   },
   
//   {
//     question: "Which state is led by Chief Minister Manik Saha?",
//     options: ["Meghalaya", "Tripura", "Mizoram", "Assam"],
//     correct: 1
//   },
//   {
//     question: "What is the capital of Chandigarh?",
//     options: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"],
//     correct: 0
//   },
//    {
//     question: "Which state is led by Chief Minister Lalduhoma?",
//     options: ["Mizoram", "Manipur", "Nagaland", "Tripura"],
//     correct: 0
//   },
//   {
//     question: "What is the capital of Dadra and Nagar Haveli and Daman and Diu?",
//     options: ["Silvassa", "Daman", "Diu", "Vapi"],
//     correct: 0
//   },
//    {
//     question: "Which state is led by Chief Minister Prem Singh Tamang?",
//     options: ["Meghalaya", "Arunachal Pradesh", "Sikkim", "Mizoram"],
//     correct: 2
//   },
//   {
//     question: "What is the capital of Delhi?",
//     options: ["New Delhi", "Delhi Cantt", "Noida", "Faridabad"],
//    correct: 0
//   },
//   {
//     question: "Which state is led by Chief Minister Neiphiu Rio?",
//     options: ["Manipur", "Nagaland", "Arunachal Pradesh", "Meghalaya"],
//     correct: 1
//   },
//   {
//     question: "Which state is led by Chief Minister Pema Khandu?",
//     options: ["Nagaland", "Sikkim", "Arunachal Pradesh", "Assam"],
//     correct: 2
//   },
//   {
//     question: "What is the capital of Jammu and Kashmir?",
//     options: ["Srinagar", "Jammu", "Pahalgam", "Anantnag"],
//     correct: 0
//   },
  
//   {
//     question: "Which state is led by Chief Minister Mohan Charan Majhi?",
//     options: ["West Bengal", "Odisha", "Chhattisgarh", "Jharkhand"],
//     correct: 1
//   },
//   {
//     question: "What is the capital of Ladakh?",
//     options: ["Leh", "Kargil", "Padum", "Nubra"],
//     correct: 0
//   },
//    {
//     question: "Which state is led by Chief Minister Bhagwant Mann?",
//     options: ["Delhi", "Punjab", "Uttar Pradesh", "Haryana"],
//     correct: 1
//   },
//   {
//     question: "What is the capital of Lakshadweep?",
//     options: ["Kavaratti", "Agatti", "Minicoy", "Amini"],
//     correct: 0
//   },
//   {
//     question: "What is the capital of Puducherry?",
//     options: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
//     correct: 0
//   },
//   {
//     question: "Which UT is led by Chief Minister N. Rangasamy?",
//     options: ["Goa", "Puducherry", "Kerala", "Tamil Nadu"],
//     correct: 1
//   },
  
// ];


const quizData = [
  {
    question: "Which country has the highest population in the world?",
    options: ["China", "India", "USA", "Indonesia"],
    correct: 1
  },
  {
    question: "Urbanization refers to the growth of what?",
    options: ["Forests", "Villages", "Cities", "Industries"],
    correct: 2
  },
  {
    question: "Which continent has the highest urbanization rate?",
    options: ["Asia", "Europe", "North America", "Africa"],
    correct: 2
  },
  {
    question: "What does population density measure?",
    options: ["People per household", "Children per family", "People per square kilometer", "Income per capita"],
    correct: 2
  },
  {
    question: "Which type of farming is common in deserts?",
    options: ["Aquaculture", "Commercial farming", "Nomadic herding", "Subsistence farming"],
    correct: 2
  },
  {
    question: "Which factor influences the location of human settlements?",
    options: ["Water availability", "Fashion trends", "Political leaders", "Cultural beliefs"],
    correct: 0
  },
  {
    question: "What is a megacity?",
    options: ["City near the coast", "City with advanced infrastructure", "City with a million people", "City with more than 10 million people"],
    correct: 3
  },
  {
    question: "Which sector includes transportation services?",
    options: ["Primary", "Tertiary", "Quaternary", "Secondary"],
    correct: 1
  },
  {
    question: "What does demography study?",
    options: ["Climate", "Culture", "Population", "Geology"],
    correct: 2
  },
  {
    question: "Which country is known for floating settlements?",
    options: ["Norway", "Thailand", "Egypt", "USA"],
    correct: 1
  },
  {
    question: "Which region has a declining population due to aging?",
    options: ["Europe", "Africa", "Asia", "Australia"],
    correct: 0
  },
  {
    question: "What is the main cause of rural to urban migration?",
    options: ["Family disputes", "Cultural exchanges", "Climate change", "Job opportunities"],
    correct: 3
  },
  {
    question: "What kind of settlement is designed for temporary living?",
    options: ["Village", "Camp", "City", "Hamlet"],
    correct: 1
  },
  {
    question: "Which type of settlement has closely packed houses?",
    options: ["Linear", "Isolated", "Compact", "Dispersed"],
    correct: 2
  },
  {
    question: "Which country has the highest population density?",
    options: ["Bangladesh", "Canada", "Russia", "Brazil"],
    correct: 0
  },
  {
    question: "Which term describes population movement into cities?",
    options: ["Migration", "Emigration", "Commutation", "Urbanization"],
    correct: 3
  },
  {
    question: "Which activity falls under primary economic activities?",
    options: ["Teaching", "Banking", "Mining", "Software development"],
    correct: 2
  },
  {
    question: "Which economic activity is classified as secondary?",
    options: ["Fishing", "Manufacturing", "Retail", "Research"],
    correct: 1
  },
  {
    question: "Which group is most impacted by housing shortages?",
    options: ["Migrants", "Middle class", "Politicians", "Tourists"],
    correct: 0
  },
  {
    question: "Which element is part of the human development index?",
    options: ["Ethnicity", "Age", "Income", "Height"],
    correct: 2
  },
  {
    question: "Why are settlements near rivers common?",
    options: ["Scenic views", "Water supply", "Cold weather", "Wildlife"],
    correct: 1
  },
  {
    question: "What defines compact settlements?",
    options: ["Scattered houses", "Circular layout", "Close buildings", "Isolated homes"],
    correct: 2
  },
  {
    question: "Which is a push factor for migration?",
    options: ["Political instability", "Education", "Cultural diversity", "Job offers"],
    correct: 0
  },
  {
    question: "Which housing is common in urban slums?",
    options: ["Luxury apartments", "Farmhouses", "Suburban homes", "Informal shelters"],
    correct: 3
  },
  {
    question: "What sector includes software research?",
    options: ["Quaternary", "Primary", "Tertiary", "Secondary"],
    correct: 0
  },
  {
    question: "What term describes expansion of cities outward?",
    options: ["Urban bloom", "Urban shift", "Urban sprawl", "Urban jump"],
    correct: 2
  },
  {
    question: "Where do linear settlements typically occur?",
    options: ["Mountain peaks", "City centers", "Near rivers/roads", "Dense forests"],
    correct: 2
  },
  {
    question: "Which factor does NOT affect population distribution?",
    options: ["Soil fertility", "Hair color", "Climate", "Topography"],
    correct: 1
  },
  {
    question: "Which settlement pattern is energy-efficient?",
    options: ["Compact", "Isolated", "Linear", "Dispersed"],
    correct: 0
  },
  {
    question: "What’s a reason people settle near coasts?",
    options: ["Cold temperature", "Dense vegetation", "Fishing and trade", "TV networks"],
    correct: 2
  },
  {
    question: "Why do squatter settlements develop?",
    options: ["Illegal migration", "Floods", "Tourism boom", "Lack of affordable housing"],
    correct: 3
  },
  {
    question: "What determines urban land use planning?",
    options: ["Moon phases", "Rainfall", "Ethnicity", "Topography"],
    correct: 3
  },
  {
    question: "What causes traffic congestion in cities?",
    options: ["Roadside trees", "High vehicle volume", "Wildlife", "Weather"],
    correct: 1
  },
  {
    question: "Which factor discourages settlement in tundra?",
    options: ["Open land", "Rainfall", "Sunlight", "Permafrost"],
    correct: 3
  },
  {
    question: "Why is infrastructure important for cities?",
    options: ["Replaces culture", "Supports economy", "Preserves nature", "Entertains citizens"],
    correct: 1
  },
  {
    question: "Which of these is NOT a reason for migration?",
    options: ["Better jobs", "Family reunion", "Political conflict", "Hair color"],
    correct: 3
  },
  {
    question: "Which region has most refugee settlements?",
    options: ["Middle East", "Western Europe", "South America", "Antarctica"],
    correct: 0
  },
  {
    question: "Which housing style is typical in rural India?",
    options: ["Skyscrapers", "Mud houses", "Floating homes", "Igloos"],
    correct: 1
  },
  {
    question: "What drives modern cultural diffusion?",
    options: ["Trade routes", "Internet", "Agriculture", "Isolation"],
    correct: 1
  },
  {
    question: "Which population pyramid indicates growth?",
    options: ["Inverted", "Oval", "Stationary", "Expansive"],
    correct: 3
  },
  {
    question: "Which country has floating urban farms?",
    options: ["India", "USA", "Russia", "Netherlands"],
    correct: 3
  },
  {
    question: "Which country is an example of planned urban development?",
    options: ["Brasilia", "Tokyo", "Mumbai", "Cairo"],
    correct: 0
  },
  {
    question: "Which city is famous for underground homes?",
    options: ["Delhi", "Coober Pedy", "Jakarta", "Reykjavík"],
    correct: 1
  },
  {
    question: "What defines sustainable cities?",
    options: ["Restrict migration", "Rapid growth", "Balance environment & development", "Ban technology"],
    correct: 2
  },
  {
    question: "What kind of activity is farming?",
    options: ["Tertiary", "Primary", "Quaternary", "Secondary"],
    correct: 1
  },
  {
    question: "What causes slum growth in cities?",
    options: ["Cultural heritage", "Lack of employment", "Floods", "Rapid migration"],
    correct: 3
  },
   {
    question: "Which settlement type is common in tribal areas?",
    options: ["Linear", "Clustered", "Compact", "Isolated"],
    correct: 3
  },
  {
    question: "What kind of farming feeds one's family?",
    options: ["Commercial farming", "Subsistence farming", "Organic farming", "Cooperative farming"],
    correct: 1
  },
  {
    question: "Which element attracts coastal settlement?",
    options: ["Fishing and trade", "Cold temperature", "Dense forest", "TV signal"],
    correct: 0
  },
  {
    question: "Which country has advanced eco-settlement programs?",
    options: ["India", "Germany", "Nigeria", "Brazil"],
    correct: 1
  },
  {
    question: "Which pattern is seen in open plain settlements?",
    options: ["Linear", "Circular", "Isolated", "Dispersed"],
    correct: 1
  },
  {
    question: "What causes uneven population distribution?",
    options: ["Hair color", "Spatial imbalance", "Equal opportunities", "Flat terrain"],
    correct: 1
  },
  {
    question: "Which human activity leads to deforestation?",
    options: ["Urban gardening", "Mining", "Eco-tourism", "Sustainable farming"],
    correct: 1
  },
  {
    question: "Which region faces serious overpopulation issues?",
    options: ["Scandinavia", "Sub-Saharan Africa", "Australia", "Greenland"],
    correct: 1
  },
  {
    question: "What defines a cultural region?",
    options: ["Political leaders", "Shared customs", "Building designs", "Technology exports"],
    correct: 1
  },
  {
    question: "Which of these limits settlement in deserts?",
    options: ["River access", "Rainfall", "Sandstorms", "Permafrost"],
    correct: 2
  },
  {
    question: "Which factor does NOT attract settlement?",
    options: ["Water", "Fertile soil", "Internet speed", "Security"],
    correct: 2
  },
  {
    question: "What is the main function of green belts?",
    options: ["Control urban sprawl", "Preserve wildlife", "Limit population growth", "Improve air quality"],
    correct: 0
  },
  {
    question: "Which transportation is common in rural areas?",
    options: ["Metro", "Airplane", "Elevator", "Bullock cart"],
    correct: 3
  },
  {
    question: "Why is topography important for settlements?",
    options: ["Determines height", "Shows culture", "Impacts land use", "Changes weather"],
    correct: 2
  },
  {
    question: "Which settlement type lacks basic services?",
    options: ["City", "Hamlet", "Slum", "Suburb"],
    correct: 2
  },
  {
    question: "Which country faces challenges with overcrowded housing?",
    options: ["Scandinavia", "South Asia", "New Zealand", "Greenland"],
    correct: 1
  },
  {
    question: "What’s the purpose of urban land zoning?",
    options: ["Color code buildings", "Allocate functions", "Restrict trees", "Measure rainfall"],
    correct: 1
  },
  {
    question: "Which activity belongs to tertiary sector?",
    options: ["Coal mining", "Teaching", "Carpentry", "Plumbing"],
    correct: 1
  },
  {
    question: "Where are floating farms gaining popularity?",
    options: ["USA", "Thailand", "Netherlands", "Brazil"],
    correct: 2
  },
  {
    question: "Which factor leads to housing scarcity?",
    options: ["Wildlife", "Tourism", "Migration", "High rainfall"],
    correct: 2
  },
  {
    question: "Which region experiences nomadic herding?",
    options: ["Forests", "Urban centers", "River valleys", "Deserts"],
    correct: 3
  },
  {
    question: "Which settlement type provides best public services?",
    options: ["Nomadic", "Urban", "Tribal", "Isolated"],
    correct: 1
  },
  {
    question: "Which area often has circular settlements?",
    options: ["Open plains", "River banks", "Mountains", "Forest edges"],
    correct: 0
  },
  {
    question: "Which activity falls under secondary sector?",
    options: ["Teaching", "Fishing", "Manufacturing", "Retail services"],
    correct: 2
  },
  {
    question: "What is the impact of overpopulation?",
    options: ["Economic boost", "Resource strain", "Tourism growth", "Increased forests"],
    correct: 1
  },
  {
    question: "Which city is known for sustainable housing below ground?",
    options: ["Delhi", "Jakarta", "Coober Pedy", "Oslo"],
    correct: 2
  },
  {
    question: "Which factor encourages migration?",
    options: ["Poor sanitation", "Conflict", "Language barrier", "Lack of tourism"],
    correct: 1
  },
  {
    question: "Which activity is quaternary?",
    options: ["Banking", "Software research", "Farming", "Mining"],
    correct: 1
  },
  {
    question: "What do population pyramids show?",
    options: ["Forest coverage", "Economic trends", "Age distribution", "Soil fertility"],
    correct: 2
  },
  {
    question: "Which activity is most data-driven?",
    options: ["Demography", "Architecture", "Geology", "Agronomy"],
    correct: 0
  },
  {
    question: "What contributes to population growth?",
    options: ["High death rates", "High birth rates", "Low fertility", "Climate change"],
    correct: 1
  },
  {
    question: "Why do people migrate for education?",
    options: ["Safety", "Climate", "Schooling", "Religion"],
    correct: 2
  },
  {
    question: "Which landform restricts dense settlement?",
    options: ["Plateau", "Valley", "Plain", "Mountain"],
    correct: 3
  },
  {
    question: "Which city was built from scratch?",
    options: ["London", "Brasilia", "Cairo", "New York"],
    correct: 1
  },
  {
    question: "What does the HDI measure?",
    options: ["Age", "Income", "Ethnicity", "Region"],
    correct: 1
  },
  {
    question: "What drives eco-settlements?",
    options: ["Rapid industry", "Sustainability", "Politics", "Tourism"],
    correct: 1
  },
  {
    question: "Which factor impacts rural economy?",
    options: ["Export tariffs", "Retail hubs", "Agriculture", "Cloud services"],
    correct: 2
  },
  {
    question: "What does spatial imbalance imply?",
    options: ["Equal population spread", "Overpopulation only", "Uneven population spread", "Migration trend"],
    correct: 2
  },
  {
    question: "What defines urban sprawl?",
    options: ["City center growth", "Vertical expansion", "Horizontal spread", "Wildlife migration"],
    correct: 2
  },
  {
    question: "Which country uses solar-powered homes widely?",
    options: ["India", "Germany", "Australia", "Japan"],
    correct: 1
  },
  {
    question: "Which economic sector is growing in cities?",
    options: ["Fishing", "Retail services", "Forestry", "Farming"],
    correct: 1
  },
  {
    question: "What is a refugee settlement?",
    options: ["Tourist center", "Planned city", "Temporary shelter", "Historic village"],
    correct: 2
  },
  {
    question: "Why do some cities plan green zones?",
    options: ["Celebrate culture", "Improve air quality", "Store fuel", "Host concerts"],
    correct: 1
  },
  {
    question: "Which of these is a cultural migration barrier?",
    options: ["Temperature", "Language", "Altitude", "Rainfall"],
    correct: 1
  },
  {
    question: "Which pattern offers least contact among homes?",
    options: ["Dispersed", "Linear", "Compact", "Clustered"],
    correct: 0
  },
  {
    question: "Where are clustered settlements common?",
    options: ["Tribal regions", "River delta", "Polar zones", "Isolated islands"],
    correct: 0
  },
  {
    question: "What defines subsistence farming?",
    options: ["Profit motive", "Market access", "Feeding own family", "Export goods"],
    correct: 2
  },
  {
    question: "Which mode of transport suits mountainous regions?",
    options: ["Airplane", "Train", "Cable car", "Metro"],
    correct: 2
  },
  {
    question: "Which city uses underground metro widely?",
    options: ["Tokyo", "Bangkok", "Lagos", "Rome"],
    correct: 0
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