const loadUser = async () => {
    const url = `https://randomuser.me/api/?results=54`;
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results);
}
const displayUser = (users) => {
    const photosContainer = document.getElementById('user-photos');
    users.forEach(user => {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');
        photoDiv.innerHTML = `
        <img src="${user.picture.large}"><br>
        <p>Name:<br>
         ${user.name.first} ${user.name.last}</p>
        <p>Location:<br> ${user.location.street.number}, ${user.location.street.name}, ${user.location.city}
        <p> ${user.location.state}, ${user.location.city} ${user.location.country}</p>
        <p>Co-ordinates:<br>
        Latitude: ${user.location.coordinates.latitude}
        Longitude:  ${user.location.coordinates.longitude}
        </p>
        <p>Postcode:<br>
        ${user.location.postcode}<br>
        Timezone: <br>
        ${user.location.timezone.offset}, ${user.location.timezone.description}
        </p>

        <button onclick="loadLocation()">See location</button>`;
        photosContainer.appendChild(photoDiv);

    });
}

loadUser();