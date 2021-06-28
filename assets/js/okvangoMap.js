//This method is called from google map API after load
function initOkavangoMap() {
    //Create a map object using map element
    const map = new google.maps.Map(document.getElementById('okavango-map'), {
        zoom: 8,
        center: { lat: -19.653257, lng: 22.906792 },
    });

    //Creating list of places array for all the map markers
    const places = [
        {
            name: 'Motsentsela Tree Lodge',
            type: 'Accomodation',
            coords: { lat: -20.0112396, lng: 23.4153301 },
        },
        {
            name: 'Maun Lodge',
            type: 'Accomodation',
            coords: { lat: -20.0048179, lng: 23.426011 },
        },
        {
            name: 'Moremi Game Reserve',
            type: 'GameReserve',
            coords: { lat: -19.435872, lng: 22.490276 },
        },
        {
            name: 'Camp Xakanaxa',
            type: 'GameReserve',
            coords: { lat: -19.1849423, lng: 22.9373825 },
        },
        {
            name: 'Hilarys Restaurant',
            type: 'Restaurant',
            coords: { lat: -19.9777666, lng: 23.4248807 },
        },
        {
            name: 'Miguels Taco Shack Restaurant',
            type: 'Restaurant',
            coords: { lat: -19.9757143, lng: 23.4314571 },
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
