document.getElementById('flightSearchForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                origin: document.getElementById('origin').value,
                destination: document.getElementById('destination').value,
                departureDate: document.getElementById('departureDate').value,
                passengers: document.getElementById('passengers').value,
                currency: document.getElementById('currency').value,
            };

            localStorage.setItem('flightDetails', JSON.stringify(formData));
            window.location.href = 'flight_details.html';
        });
 