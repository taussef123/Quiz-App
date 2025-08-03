


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
    question: "What is the scientific study of living organisms called?",
    options: ["Zoology", "Biology", "Ecology", "Botany"],
    correct: 1
  },
  {
    question: "Which term refers to the classification of organisms?",
    options: ["Taxonomy", "Anatomy", "Physiology", "Morphology"],
    correct: 0
  },
  {
    question: "Who is regarded as the father of taxonomy?",
    options: ["Darwin", "Aristotle", "Linnaeus", "Mendel"],
    correct: 2
  },
  {
    question: "Binomial nomenclature was proposed by?",
    options: ["Robert Hooke", "Carl Linnaeus", "Haeckel", "Lamarck"],
    correct: 1
  },
  {
    question: "Which is the correct format for scientific names?",
    options: ["Genus species", "GENUS species", "genus SPECIES", "Species genus"],
    correct: 0
  },
  {
    question: "What does ICZN stand for?",
    options: ["International Code of Zoological Nomenclature", "Indian Council for Zoological Naming", "Institute for Classification of Zoos and Nature", "International Convention of Zoology and Nature"],
    correct: 0
  },
  {
    question: "Which domain contains prokaryotic organisms?",
    options: ["Eukarya", "Protista", "Archaea", "Plantae"],
    correct: 2
  },
  {
    question: "Which of the following is not a characteristic of living organisms?",
    options: ["Metabolism", "Growth", "Reproduction", "Inertia"],
    correct: 3
  },
  {
    question: "Which process involves all biochemical reactions in an organism?",
    options: ["Digestion", "Metabolism", "Circulation", "Excretion"],
    correct: 1
  },
  {
    question: "What is the sum total of all chemical reactions in the body called?",
    options: ["Anabolism", "Catabolism", "Metabolism", "Respiration"],
    correct: 2
  },
  {
    question: "Which statement is true about growth in living organisms?",
    options: ["Only plants grow", "Growth stops after maturity", "Growth is reversible", "Growth involves increase in mass and number"],
    correct: 3
  },
  {
    question: "What distinguishes living from non-living?",
    options: ["Movement", "Respiration", "Growth", "Consciousness"],
    correct: 3
  },
  {
    question: "Which kingdom includes unicellular prokaryotes?",
    options: ["Monera", "Protista", "Plantae", "Fungi"],
    correct: 0
  },
  {
    question: "Which is NOT part of binomial nomenclature?",
    options: ["Genus", "Family", "Species", "Italicization"],
    correct: 1
  },
  {
    question: "Which taxon has the highest number of organisms?",
    options: ["Species", "Order", "Phylum", "Kingdom"],
    correct: 0
  },
  {
    question: "What is the basic unit of classification?",
    options: ["Order", "Family", "Genus", "Species"],
    correct: 3
  },
  {
    question: "Systematics is the study of:",
    options: ["Evolution", "Classification", "Structure", "Reproduction"],
    correct: 1
  },
  {
    question: "Which taxonomic category comes after genus?",
    options: ["Family", "Species", "Order", "Class"],
    correct: 1
  },
  {
    question: "Which is NOT a domain of life?",
    options: ["Archaea", "Eukarya", "Bacteria", "Fungi"],
    correct: 3
  },
  {
    question: "Which taxonomic category is broader than order?",
    options: ["Family", "Class", "Genus", "Species"],
    correct: 1
  },
  {
    question: "What is a herbarium used for?",
    options: ["Growing plants", "Storing seeds", "Preserving plant specimens", "Animal taxonomy"],
    correct: 2
  },
  {
    question: "A biological museum primarily preserves:",
    options: ["Live animals", "Fossils", "Human tissues", "Specimens"],
    correct: 3
  },
  {
    question: "Which book lists all known species?",
    options: ["Botanical Survey of India", "Flora of India", "Manual of Species", "Catalogue of Life"],
    correct: 3
  },
  {
    question: "Which is not a plant kingdom feature?",
    options: ["Autotrophic nutrition", "Cell wall", "Multicellularity", "Nervous system"],
    correct: 3
  },
  {
    question: "Which characteristic is shared by all living organisms?",
    options: ["Growth", "Consciousness", "Metabolism", "Locomotion"],
    correct: 2
  },
  {
    question: "An example of a taxonomic aid is:",
    options: ["Chromosome", "Herbarium", "DNA", "Mitochondria"],
    correct: 1
  },
  {
    question: "Which taxonomic level comes after class?",
    options: ["Order", "Genus", "Species", "Phylum"],
    correct: 0
  },
  {
    question: "Who coined the term ‘taxonomy’?",
    options: ["Linnaeus", "Aristotle", "Candolle", "Haeckel"],
    correct: 2
  },
  {
    question: "Which term refers to a group of similar organisms capable of interbreeding?",
    options: ["Species", "Genus", "Family", "Order"],
    correct: 0
  },
  {
    question: "ICBN stands for:",
    options: ["International Code of Botanical Nomenclature", "Indian Council of Botanical Names", "Institute for Cataloging Botanical Names", "International Convention for Botanical Naming"],
    correct: 0
  },
  {
    question: "The first word in binomial nomenclature indicates:",
    options: ["Order", "Family", "Genus", "Species"],
    correct: 2
  },
  {
    question: "The second word in binomial nomenclature indicates:",
    options: ["Class", "Species", "Phylum", "Genus"],
    correct: 1
  },
  {
    question: "What defines a genus?",
    options: ["Group of families", "Group of species", "Group of orders", "Group of phyla"],
    correct: 1
  },
  {
    question: "Taxonomy helps in:",
    options: ["Disease prevention", "Classification", "Energy conservation", "Cooking"],
    correct: 1
  },
  {
    question: "What does ‘flora’ refer to?",
    options: ["Plant diseases", "Plant life", "Fungus classification", "Animal behavior"],
    correct: 1
  },
  {
    question: "Which kingdom includes yeast?",
    options: ["Plantae", "Fungi", "Monera", "Protista"],
    correct: 1
  },
  {
    question: "Which of the following organisms is autotrophic?",
    options: ["Fungi", "Algae", "Bacteria", "Protozoa"],
    correct: 1
  },
  {
    question: "Which taxonomic category includes similar genera?",
    options: ["Order", "Family", "Class", "Species"],
    correct: 1
  },
  {
    question: "Taxonomy is essential for:",
    options: ["Science fiction", "Understanding biodiversity", "Telecommunication", "Architecture"],
    correct: 1
  },
  {
    question: "Which is NOT a characteristic of life?",
    options: ["Respiration", "Growth", "Reproduction", "Decorrelation"],
    correct: 3
  },
  {
    question: "Which one is a unicellular eukaryote?",
    options: ["E. coli", "Amoeba", "Mushroom", "Yeast"],
    correct: 1
  },
  {
    question: "Species name of man is:",
    options: ["Homo sapiens", "Homo erectus", "Homo habilis", "Homo neanderthalensis"],
    correct: 0
  },
  {
    question: "In binomial nomenclature, names are written in:",
    options: ["Bold", "Capital letters", "Italics", "Underlined"],
    correct: 2
  },
  {
    question: "Living organisms respond to stimuli due to:",
    options: ["Intelligence", "Consciousness", "External forces", "Internal forces"],
    correct: 1
  },
  {
    question: "Which of these is an example of metabolic activity?",
    options: ["Sleeping", "Thinking", "Digestion", "Singing"],
    correct: 2
  },
  {
    question: "Which living characteristic is least evident in viruses?",
    options: ["Growth", "Reproduction", "Metabolism", "Mutation"],
    correct: 2
  },
  {
    question: "Which kingdom includes blue-green algae?",
    options: ["Protista", "Plantae", "Monera", "Fungi"],
    correct: 2
  },
  {
    question: "Which statement is true about nomenclature?",
    options: ["Same name can be given to multiple organisms", "Binomial names are optional", "Scientific names follow international codes", "Names change based on habitat"],
    correct: 2
  },
  {
    question: "Which taxonomic category is most specific?",
    options: ["Family", "Genus", "Order", "Species"],
    correct: 3
  },
  {
    question: "What is the role of taxonomy in biology?",
    options: ["Naming organisms", "Studying cells", "Increasing population", "Monitoring climate"],
    correct: 0
  },
  {
    question: "Which one is an example of a scientific name?",
    options: ["Homo sapien", "Canis lupus", "Felidae", "Animalia"],
    correct: 1
  },
  {
    question: "Taxonomic hierarchy includes which of the following?",
    options: ["Earth, country, state", "Kingdom, phylum, class", "Atom, molecule, compound", "Planet, species, genus"],
    correct: 1
  },
  {
    question: "Which level comes immediately above species?",
    options: ["Genus", "Family", "Order", "Class"],
    correct: 0
  },
  {
    question: "Which taxon represents the largest grouping?",
    options: ["Species", "Genus", "Order", "Kingdom"],
    correct: 3
  },
  {
    question: "‘Animalia’ refers to which classification level?",
    options: ["Phylum", "Order", "Kingdom", "Class"],
    correct: 2
  },
  {
    question: "Which of the following is not a taxonomic aid?",
    options: ["Keys", "Manuals", "DNA test", "Flora"],
    correct: 2
  },
  {
    question: "What does 'keys' refer to in taxonomy?",
    options: ["Organism locator", "Coding standard", "Identification tool", "Scientific algorithm"],
    correct: 2
  },
  {
    question: "Which taxonomic tool provides information about habitat and distribution?",
    options: ["Monograph", "Flora", "Manual", "Key"],
    correct: 1
  },
  {
    question: "What helps in identification of organisms?",
    options: ["Climate data", "Taxonomic keys", "Soil sample", "Genetic algorithm"],
    correct: 1
  },
  {
    question: "Which living trait is shown by plants?",
    options: ["Locomotion", "Metabolism", "Intelligence", "Speech"],
    correct: 1
  },
  {
    question: "Which taxonomic category includes similar families?",
    options: ["Phylum", "Order", "Class", "Genus"],
    correct: 1
  },
  {
    question: "Which domain includes multicellular organisms?",
    options: ["Bacteria", "Archaea", "Eukarya", "Monera"],
    correct: 2
  },
  {
    question: "What is true about scientific names?",
    options: ["Always capitalized", "Written in Hindi", "Italicized or underlined", "Never used in publications"],
    correct: 2
  },
  {
    question: "Which characteristic is unique to living organisms?",
    options: ["Color", "Shape", "Consciousness", "Density"],
    correct: 2
  },
  {
    question: "Which taxonomic category is broader than species?",
    options: ["Genus", "Class", "Order", "Kingdom"],
    correct: 0
  },
  {
    question: "Which is the lowest category in classification?",
    options: ["Genus", "Species", "Family", "Order"],
    correct: 1
  },
  {
    question: "Living organisms grow by:",
    options: ["Decreasing size", "Increasing matter", "Cell division", "DNA loss"],
    correct: 2
  },
  {
    question: "Which term applies to a group of related species?",
    options: ["Family", "Genus", "Order", "Kingdom"],
    correct: 1
  },
  {
    question: "Which organelle is most related to metabolism?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Centrosome"],
    correct: 1
  },
  {
    question: "Which category includes only unicellular organisms?",
    options: ["Plantae", "Fungi", "Monera", "Animalia"],
    correct: 2
  },
  {
    question: "‘Species’ represents:",
    options: ["A group that cannot interbreed", "Genetic diversity", "Similar individuals capable of breeding", "A classification error"],
    correct: 2
  },
  {
    question: "Which scientist introduced the five kingdom system?",
    options: ["Linnaeus", "Whittaker", "Darwin", "Haeckel"],
    correct: 1
  },
  {
    question: "Which is NOT an example of Plantae?",
    options: ["Algae", "Moss", "Ferns", "Mushrooms"],
    correct: 3
  },
  {
    question: "Taxonomic hierarchy is arranged in:",
    options: ["Alphabetical order", "Descending biological complexity", "Random groups", "Color codes"],
    correct: 1
  },
  {
    question: "Which one is a preserved plant specimen?",
    options: ["Herbarium", "Morgue", "Botanic tube", "Flora vault"],
    correct: 0
  },
  {
    question: "The second part of a scientific name is:",
    options: ["Genus", "Family", "Order", "Species"],
    correct: 3
  },
  {
    question: "Growth is measurable by:",
    options: ["Emotion", "Color", "Mass and number", "Scent"],
    correct: 2
  },
  {
    question: "What is true for non-living things?",
    options: ["They reproduce", "They have metabolism", "They grow by accumulation", "They feel emotions"],
    correct: 2
  },
  {
    question: "Which category includes man?",
    options: ["Order Primates", "Genus Panthera", "Kingdom Fungi", "Family Canidae"],
    correct: 0
  },
  {
    question: "Which organism is used in taxonomy as model?",
    options: ["Drosophila", "Yeast", "Cactus", "Penguin"],
    correct: 0
  },
  {
    question: "Which term best defines biodiversity?",
    options: ["Population count", "Variety of life forms", "Animal migration", "Plant nutrition"],
    correct: 1
  },
  {
    question: "Who proposed the term ‘species’?",
    options: ["Aristotle", "Linnaeus", "Darwin", "Mendel"],
    correct: 1
  },
  {
    question: "Which is true about classification?",
    options: ["It’s random", "It helps in naming", "It reduces confusion", "Both B and C"],
    correct: 3
  },
  {
    question: "Flora represents:",
    options: ["Animal species", "Human cells", "Plant species", "Microbial species"],
    correct: 2
  },
  {
    question: "All organisms reproduce for:",
    options: ["Fun", "Survival", "Population control", "Food production"],
    correct: 1
  },
  {
    question: "Scientific names help in:",
    options: ["Global communication", "Hiding species identity", "Local usage", "Poetic writing"],
    correct: 0
  },
  {
    question: "Which aid is used to identify a new plant?",
    options: ["Monograph", "Manual", "Key", "Botanic chart"],
    correct: 2
  },
  {
    question: "What does 'ICBN' relate to?",
    options: ["Zoology", "Botany", "Genetics", "Cell Biology"],
    correct: 1
  },
  {
    question: "Who established binomial system?",
    options: ["Whittaker", "Linnaeus", "Mendel", "Darwin"],
    correct: 1
  },
  {
    question: "Living organisms show:",
    options: ["Rusting", "Metabolism", "Corrosion", "Evaporation"],
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