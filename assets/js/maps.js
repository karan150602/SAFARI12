function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: -20.653257, lng: 20.906792 },
    });
    // center: { lat: -28.024, lng: 140.887 },
    // Create an array of alphabetical characters used to label the markers.
    const Okavango = { lat: -19.650833333333, lng: 22.905833333333 };
    const Chobe = { lat: -17.8291147, lng: 25.144448 };
    const labels = ['Okavango Delta', 'Chobe National Park'];

    const locations = [Okavango, Chobe];
    
    const OkavangoHtml = `
       <img src="assets/images/okavango-delta_450_300.png" width=250 height=200>
       <h5 style="text-align:center"> Okavango Delta </h5>
    `;

    const ChobeHtml = `
       <img src="assets/images/chobe-park_450_300.png" width=250 height=200>
       <h5 style="text-align:center"> Chobe National Park </h5>
    `;

    const infowindow1 = new google.maps.InfoWindow({
        content: OkavangoHtml,
    });

    const infowindow2 = new google.maps.InfoWindow({
        content: ChobeHtml,
    });

    const marker1 = new google.maps.Marker({
        position: Okavango,
        map,
        title: labels[0],
    });

    const marker2 = new google.maps.Marker({
        position: Chobe,
        map,
        title: labels[1],
    });

    marker1.addListener('click', () => {
        infowindow1.open({
            anchor: marker1,
            map,
            shouldFocus: false,
        });
    });

    marker2.addListener('click', () => {
        infowindow2.open({
            anchor: marker2,
            map,
            shouldFocus: false,
        });
    });
}
