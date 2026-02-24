let allJobCards = document.getElementById("all_job_cards");
let totalCount = document.getElementById("total_count");
let interviewCount = document.getElementById("interview_count");
let rejectedCount = document.getElementById("rejected_count");
let allFilterBtn = document.getElementById("all_filter_btn");
let interviewFilterBtn = document.getElementById("interview_filter_btn");
let rejectedFilterBtn = document.getElementById("rejected_filter_btn");

let mainPart = document.querySelector("main");
const filterdJob = document.getElementById("filterd_job")

let currentStatus = "";
let interviewList = [];
let rejectedList = [];

// calculate counted for all job, interview & rejected job
function calculateCount (){
    totalCount.innerText = allJobCards.children.length
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()


// function for toggling filter button
function toggleStyle(id){
    currentStatus=id;

    allFilterBtn.classList.remove("bg-blue-600", "text-white");
    interviewFilterBtn.classList.remove("bg-blue-600", "text-white");
    rejectedFilterBtn.classList.remove("bg-blue-600", "text-white");

    allFilterBtn.classList.add ("bg-gray-200", "text-gray-700");
    interviewFilterBtn.classList.add ("bg-gray-200", "text-gray-700");
    rejectedFilterBtn.classList.add ("bg-gray-200", "text-gray-700");

    const selected = document.getElementById(id)

    selected.classList.remove("bg-gray-200", "text-gray-700");
    selected.classList.add("bg-blue-600", "text-white");

    if(id =="interview_filter_btn"){
         allJobCards.classList.add("hidden");
         filterdJob.classList.remove("hidden");
         renderInterviewList()
    }
    else if(id =="rejected_filter_btn"){
         allJobCards.classList.add("hidden");
         filterdJob.classList.remove("hidden");
        renderRejectedList()
    }
    else{
       allJobCards.classList.remove("hidden");
         filterdJob.classList.add("hidden"); 
    }
}

mainPart.addEventListener("click", function(e){
    if(e.target.classList.contains("interview_btn")){
         let job = e.target.parentNode.parentNode;
    
    let name = job.querySelector(".name").innerText
    let position = job.querySelector(".position").innerText
    let location = job.querySelector(".location").innerText
    let status = job.querySelector(".status").innerText
    let description = job.querySelector(".description").innerText;

    job.querySelector(".status").innerText= "Applied";

    let jobInfo = {
name,
position,
location,
status: "Applied",
description

    }

    let interviewExist = interviewList.find(item => item.name == jobInfo.name);

 rejectedList = rejectedList.filter(item => item.name != jobInfo.name);

    if(!interviewExist){
     interviewList.push(jobInfo)
    }

    if (currentStatus === "interview_filter_btn") {
      renderInterviewList();
    }

    if (currentStatus === "rejected_filter_btn") {
      renderRejectedList();
    }

    
calculateCount()

    }

    else if(e.target.classList.contains("rejected_btn")){
             let job = e.target.parentNode.parentNode;
            
    
    let name = job.querySelector(".name").innerText
    let position = job.querySelector(".position").innerText
    let location = job.querySelector(".location").innerText
    let status = job.querySelector(".status").innerText
    let description = job.querySelector(".description").innerText;

    job.querySelector(".status").innerText= "Rejected";

    let jobInfo = {
name,
position,
location,
status: "Rejected",
description

    }

    let rejectedExist = rejectedList.find(item => item.name == jobInfo.name);


    if(!rejectedExist){
     rejectedList.push(jobInfo)
    }

      interviewList = interviewList.filter(item => item.name != jobInfo.name);

calculateCount()
if (currentStatus === "rejected_filter_btn") {
      renderRejectedList();
    }
    if (currentStatus === "interview_filter_btn") {
      renderInterviewList();
    }

    }

   else if(e.target.classList.contains("delete_btn")){

  
   let jobCard = e.target.parentNode
  let name = jobCard.querySelector(".name").innerText.trim();

  
  interviewList = interviewList.filter(item => item.name.trim() != name);
  rejectedList = rejectedList.filter(item => item.name.trim() != name);

  for(let card of allJobCards.children){
    let cardName = card.querySelector(".name").innerText.trim();
    if(cardName == name){
      card.remove();
      break;
    }
  }

  if(currentStatus == "interview_filter_btn" || currentStatus == "rejected_filter_btn"){
      jobCard.parentNode.remove();
  }

  calculateCount();

  if(currentStatus == "interview_filter_btn"){
      renderInterviewList();
  }
  else if(currentStatus == "rejected_filter_btn"){
      renderRejectedList();
  }
}


})


// function for render interview job list
function renderInterviewList(){
    filterdJob.innerHTML ="";

    if(interviewList.length === 0){
        filterdJob.innerHTML = `
          <div class="bg-white rounded-2xl shadow p-6 text-center text-gray-500">
            <h2 class="mt-6 text-xl md:text-2xl font-semibold text-gray-800">
        No jobs available
      </h2>

     
      <p class="mt-2 text-gray-500 text-sm md:text-base">
        Check back soon for new job opportunities
      </p>
          </div>
        `;
        return;
    }

    for(let job of interviewList){
         let div = document.createElement('div');
         div.className= "mt-10 space-y-6";
         div.innerHTML = `
              
         <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 relative card">

       
        <button class="absolute top-4 right-4 text-red-500 px-3 py-1 border-2 rounded border-red-500 font-semibold delete_btn">
          Delete
        </button>

       
        <h3 class="text-lg font-semibold text-gray-800 name">
          ${job.name}
        </h3>
        <p class="text-gray-500 position">${job.position}</p>
        <p class="text-sm text-gray-400 mt-1 location">
         ${job.location}
        </p>

        <span class="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 status">
          ${job.status}
        </span>

        <p class="text-gray-600 text-sm mt-4 description">
         ${job.description}
        </p>

       
        <div class="flex flex-col sm:flex-row gap-3 mt-6">
          <button class="flex-1 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition text-sm interview_btn">
            Interview
          </button>

          <button class="flex-1 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition text-sm rejected_btn">
            Rejected
          </button>
        </div>

      </div>
         
         `

         filterdJob.appendChild(div)

    }
}

// function for rejected job
function renderRejectedList(){
    filterdJob.innerHTML ="";

    if(rejectedList.length === 0){
        filterdJob.innerHTML = `
          <div class="bg-white rounded-2xl shadow p-6 text-center text-gray-500">
            <h2 class="mt-6 text-xl md:text-2xl font-semibold text-gray-800">
        No jobs available
      </h2>

     
      <p class="mt-2 text-gray-500 text-sm md:text-base">
        Check back soon for new job opportunities
      </p>
          </div>
        `;
        return;
    }

    for(let job of rejectedList){
         let div = document.createElement('div');
         div.className= "mt-10 space-y-6";
         div.innerHTML = `
              
         <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 relative card">

       
        <button class="absolute top-4 right-4 text-red-500 px-3 py-1 border-2 rounded border-red-500 font-semibold delete_btn">
          Delete
        </button>

       
        <h3 class="text-lg font-semibold text-gray-800 name">
          ${job.name}
        </h3>
        <p class="text-gray-500 position">${job.position}</p>
        <p class="text-sm text-gray-400 mt-1 location">
         ${job.location}
        </p>

        <span class="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 status">
          ${job.status}
        </span>

        <p class="text-gray-600 text-sm mt-4 description">
         ${job.description}
        </p>

       
        <div class="flex flex-col sm:flex-row gap-3 mt-6">
          <button class="flex-1 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition text-sm interview_btn">
            Interview
          </button>

          <button class="flex-1 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition text-sm rejected_btn">
            Rejected
          </button>
        </div>

      </div>
         
         `

         filterdJob.appendChild(div)

    }
}


