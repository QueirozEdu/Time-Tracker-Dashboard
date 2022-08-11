let time =
{
    
    "work": {
        "current": "5",
        "past": "36"
    },
    "play": {
        "current": "10",
        "past": "8"
    },
    "study": {
        "current": "4",
        "past": "7"
    },
    "exercise": {
        "current": "4",
        "past": "5"
    },
    "social": {
        "current": "5",
        "past": "10"
    },
    "self": {
        "current": "2",
        "past": "2"
    }
};

let workHours = time.work;
let playHoyrs = time.play;
let studyHours = time.study;
let exerciseHours = time.exercise;
let socialHours = time.social;
let selfHours = time.self;

   


function changeTimeFrame(clicked_id) {
    let element = document.getElementById(clicked_id);
    changeSchedule(clicked_id);
    elementList = document.querySelectorAll("li.time-framer");
    
    for (let index = 0; index < elementList.length; index++) {
        
        if (element.id == elementList[index].id) {
            
            elementList[index].classList.add("active")
        }
        else {
            elementList[index].classList.remove("active")
        }
    }
}

function changeSchedule(id) {
    let time = id
    if (time == "daily") {
        console.log("test");
        document.getElementById('work-time-information').innerText = workHours.current.concat("hrs");
    }
}