let allJobCards = document.getElementById("all_job_cards");
let totalCount = document.getElementById("total_count");
let interviewCount = document.getElementById("interview_count");
let rejectedCount = document.getElementById("rejected_count");
let allFilterBtn = document.getElementById("all_filter_btn");
let interviewFilterBtn = document.getElementById("interview_filter_btn");
let rejectedFilterBtn = document.getElementById("rejected_filter_btn");

let mainPart = document.querySelector("main");

let currentStatus = "";
let interviewList = [];
let rejectedList = [];


function calculateCount (){
    totalCount.innerText = allJobCards.children.length
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()

function toggleStyle(id){
    currentStatus=id;

    allFilterBtn.classList.add ("bg-gray-200", "text-gray-700");
    interviewFilterBtn.classList.add ("bg-gray-200", "text-gray-700");
    rejectedFilterBtn.classList.add ("bg-gray-200", "text-gray-700");

    allFilterBtn.classList.remove("bg-blue-600", "text-white");
    interviewFilterBtn.classList.remove("bg-blue-600", "text-white");
    rejectedFilterBtn.classList.remove("bg-blue-600", "text-white");

    const selected = document.getElementById(id)

    selected.classList.remove("bg-gray-200", "text-gray-700");
    selected.classList.add("bg-blue-600", "text-white");
}
