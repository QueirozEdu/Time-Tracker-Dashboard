let time =
{
    
    "work": {
        "current": "1",
        "past": "8"
    },
    "play": {
        "current": "2",
        "past": "4"
    },
    "study": {
        "current": "1",
        "past": "6"
    },
    "exercise": {
        "current": "6",
        "past": "5"
    },
    "social": {
        "current": "1",
        "past": "7"
    },
    "self": {
        "current": "1",
        "past": "3"
    }
};

let timeWeek =
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

let timeMonth = {
    
    "work": {
        "current": "20",
        "past": "220"
    },
    "play": {
        "current": "18",
        "past": "28"
    },
    "study": {
        "current": "15",
        "past": "22"
    },
    "exercise": {
        "current": "12",
        "past": "41"
    },
    "social": {
        "current": "31",
        "past": "55"
    },
    "self": {
        "current": "20",
        "past": "33"
    }
};

let workHours = time.work;
let playHours = time.play;
let studyHours = time.study;
let exerciseHours = time.exercise;
let socialHours = time.social;
let selfHours = time.self;

let workHoursWeekly = timeWeek.work;
let playHoursWeekly = timeWeek.play;
let studyHoursWeekly = timeWeek.study;
let exerciseHoursWeekly = timeWeek.exercise;
let socialHoursWeekly = timeWeek.social;
let selfHoursWeekly = timeWeek.self;

let workHoursMontly = timeMonth.work;
let playHoyrsMontly = timeMonth.play;
let studyHoursMontly = timeMonth.study;
let exerciseHoursMontly = timeMonth.exercise;
let socialHoursMontly = timeMonth.social;
let selfHoursMontly = timeMonth.self;



   


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
changeTimeFrame("daily")

function changeSchedule(id) {
    let time = id
    if (time == "daily") {
        document.getElementById('work-time-information').innerText = workHours.current.concat("hrs");
    }
    else if (time == "weekly") {
        document.getElementById('work-time-information').innerText = workHoursWeekly.current.concat("hrs");
    }
    else {
        document.getElementById('work-time-information').innerText = workHoursMontly.current.concat("hrs")
    }
}

