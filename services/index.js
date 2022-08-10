function changeTimeFrame(clicked_id) {
    let element = document.getElementById(clicked_id);

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