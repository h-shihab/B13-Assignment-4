 let currentTab = "all";
   
const tabActive =['bg-[#3B82F6]','border-[#3B82F6]',"text-white"];
const tabInactive =['bg-transparent', 'border-slate-200', 'text-black','text-slate-700'];


const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

 function switchTab(tab){

const tabs = ['all','interview','rejected'];
currentTab = tab
for(const t of tabs){
  const tabName = document.getElementById('tab-'+ t);
  if(t === tab){
    tabName.classList.remove(...tabInactive);
    tabName.classList.add(...tabActive);
  }
  else{
    tabName.classList.remove(...tabActive);
    tabName.classList.add(...tabInactive);
  }
}

const pages = [allContainer,interviewContainer,rejectedContainer];



for(const section of pages){
    section.classList.add("hidden")
}

emptyState.classList.add("hidden")


if(tab === "all"){
    allContainer.classList.remove("hidden");

    if(allContainer.children.length < 1){
    emptyState.classList.remove("hidden")
    }
}
else if(tab === "interview"){
    interviewContainer.classList.remove("hidden")
    if(interviewContainer.classList.length < 1){
      emptyState.classList.remove("hidden")
    }
}
else{
    rejectedContainer.classList.remove("hidden");
    if(rejectedContainer.classList.length < 1){
      emptyState.classList.remove("hidden")
    }
}
updateStat()
}

// stat update

const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejected");
const availableStat = document.getElementById("available")

totalStat.innerText = allContainer.children.length;
 switchTab(currentTab);


 document.getElementById("jobs-container").addEventListener("click", function(event){
  const clickElement = event.target;
  // console.log(clickElement.parentNode.parentNode.parentNode);
  const card = clickElement.closest(".cards");
  console.log(card);

if(clickElement.classList.contains("interview")){
 interviewContainer.appendChild(card);
 
}
if(clickElement.classList.contains("rejected")){
  // console.log("rejected clicked");
  rejectedContainer.appendChild(card)
  
}

if(clickElement.classList.contains("delete")){
  // console.log("delete clicked");
  const parent = card.parentNode;
  parent.removeChild(card);
    
}
updateStat()
 });

 function updateStat() {
  // totalStat.innerText = allContainer.children.length;
  // interviewStat.innerText = interviewContainer.children.length;
  // rejectedStat.innerText = rejectedContainer.children.length;

  const counts = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length
  };

  totalStat.innerText = counts.all;
  interviewStat.innerText = counts.interview;
  rejectedStat.innerText = counts.rejected;
  availableStat.innerText = counts[currentTab]

  if(counts[currentTab] < 1){
     emptyState.classList.remove("hidden")
  }
  else{
     emptyState.classList.add("hidden")
  }
}
 updateStat()