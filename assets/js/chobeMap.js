//This method is called from google map API after load
function initChobeMap() {
    //Create a map object using map element
    const map = new google.maps.Map(document.getElementById('chobe-map'), {
        zoom: 6,
        center: { lat: -19.653257, lng: 25.906792 },
    });

    //Creating list of places array for all the map markers
    const places = [
        {
            name: 'Cresta Mowana Hotel',
            type: 'Accomodation',
            coords: { lat: -18.2286385, lng: 24.3632235 },
        },
        {
            name: 'Garden Lodge',
            type: 'Accomodation',
            coords: { lat: -17.8022269, lng: 25.1553267 },
        },
        {
            name: 'Chobe Game Lodge',
            type: 'GameReserve',
            coords: { lat: -17.84083, lng: 22.6738693 },
        },
        {
            name: 'Linyanti Wildlife Reserve',
            type: 'GameReserve',
            coords: { lat: -18.2278243, lng: 25.3632207 },
        },
        {
            name: 'The Coffee Buzz',
            type: 'Restaurant',
            coords: { lat: -19.2274172, lng: 24.4632192 },
        },
        {
            name: 'Nandos restaurant Kasane',
            type: 'Restaurant',
            coords: { lat: -20.2270102, lng: 24.5642178 },
        },
    ];

    //Iterating over all the places to create the marker
    places.forEach(place => {
        //Tooltip text of the marker
        const infohtml = `
            <h5 style="text-align:center">${place.name}</h5>
       `;
        //Create a info window which will hold the tooltip text
        const infowindow = new google.maps.InfoWindow({
            content: infohtml,
        });
        //Create the map marker which will be shown on google map
        const marker = new google.maps.Marker({
            position: place.coords,
            map,
            title: place.name,
        });
        //Attaching the click event on marker to show the info window when clicked
        marker.addListener('click', () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });
    });
}
