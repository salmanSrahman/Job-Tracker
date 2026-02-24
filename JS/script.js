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

    if(id =="interview_filter_btn" || id =="rejected_filter_btn"){
         allJobCards.classList.add("hidden");
         filterdJob.classList.remove("hidden");
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
status,
description

    }

    let interviewExist = interviewList.find(item => item.name == jobInfo.name);


    if(!interviewExist){
     interviewList.push(jobInfo)
    }
    renderInterviewList()
    }


})

function renderInterviewList(){
    filterdJob.innerHTML ="";

    for(let job of interviewList){
         let div = document.createElement('div');
         div.className= "mt-10 space-y-6";
         div.innerHTML = `
              
         <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 relative card">

       
        <button class="absolute top-4 right-4 text-red-500 px-3 py-1 border-2 rounded border-red-500 font-semibold">
          Delete
        </button>

       
        <h3 class="text-lg font-semibold text-gray-800 name">
          ${job.name}
        </h3>
        <p class="text-gray-500 position">React Native Developer</p>
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
