const loadData = async () => {
    const inputField = document.getElementById('input-field');
    inputValue = inputField.value;
    inputField.value = '';
    if (!inputValue) {
        console.log('Please write someThing in the search box');
    } else {
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=${inputValue}`;
        const res = await fetch(url);
        const data = await res.json();
        displayData(data.event);
    }

}
const displayData = (events) => {
    const eventContainer = document.getElementById('event-container');
    eventContainer.textContent = '';
    console.log(events);
    events.forEach(event => {
        console.log(event.strVideo);
        const eachEvent = document.createElement('div');
        eachEvent.classList.add('event');
        eachEvent.innerHTML = `
        ${event.strEvent}<br>
        ${event.strLeague}<br>
        ${event.strLeague}<br>
        ${event.dateEventLocal} <br>
            
        <button onclick="loadVideo('${event.strVideo}')" target="_blank">See event</button>
        
        `;
        eventContainer.appendChild(eachEvent);
    });
}
const loadVideo = (url) => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `
    <video  width="320" height="240" controls>
        <source src="url" type="video/mp4">
        <source src="url" type="video/ogg">
        Your browser does not support the video tag.
    </video>
    `;
}