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
        "past": "1"
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
        document.getElementById('play-time-information').innerText = playHours.current.concat("hrs");
        document.getElementById('exercise-time-information').innerText = exerciseHours.current.concat("hrs");
        document.getElementById('social-time-information').innerText = socialHours.current.concat("hrs");
        document.getElementById('study-time-information').innerText = studyHours.current.concat("hrs");
        document.getElementById('self-care-time-information').innerText = selfHours.current.concat("hrs");

        document.getElementById('work-time-history-information').innerText = "Last Week - ".concat(workHours.past).concat("hrs");
        document.getElementById('play-time-history-information').innerText = "Last Week - ".concat(playHours.past).concat("hrs");
        document.getElementById('exercise-time-history-information').innerText = "Last Week - ".concat(exerciseHours.past).concat("hrs");
        document.getElementById('social-time-history-information').innerText = "Last Week - ".concat(socialHours.past).concat("hrs");
        document.getElementById('study-time-history-information').innerText = "Last Week - ".concat(studyHours.past).concat("hrs");
        document.getElementById('self-care-time-history-information').innerText = "Last Week - ".concat(selfHours.past).concat("hrs");
        

    }
    else if (time == "weekly") {
        document.getElementById('work-time-information').innerText = workHoursWeekly.current.concat("hrs");
        document.getElementById('play-time-information').innerText = playHoursWeekly.current.concat("hrs");
        document.getElementById('exercise-time-information').innerText = exerciseHoursWeekly.current.concat("hrs");
        document.getElementById('social-time-information').innerText = socialHours.current.concat("hrs");
        document.getElementById('study-time-information').innerText = studyHoursWeekly.current.concat("hrs");
        document.getElementById('self-care-time-information').innerText = selfHoursWeekly.current.concat("hrs");

        document.getElementById('work-time-history-information').innerText = "Last Week - ".concat(workHoursWeekly.past).concat("hrs");
        document.getElementById('play-time-history-information').innerText = "Last Week - ".concat(playHoursWeekly.past).concat("hrs");
        document.getElementById('exercise-time-history-information').innerText = "Last Week - ".concat(exerciseHoursWeekly.past).concat("hrs");
        document.getElementById('social-time-history-information').innerText = "Last Week - ".concat(socialHoursWeekly.past).concat("hrs");
        document.getElementById('study-time-history-information').innerText = "Last Week - ".concat(studyHoursWeekly.past).concat("hrs");
        document.getElementById('self-care-time-history-information').innerText = "Last Week - ".concat(selfHoursWeekly.past).concat("hrs");
    }
    else {
        document.getElementById('work-time-information').innerText = workHoursMontly.current.concat("hrs")
    }
}

