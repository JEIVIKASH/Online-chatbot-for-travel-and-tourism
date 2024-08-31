document.getElementById('send-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage(userInput, 'user-message');
        botReply(userInput);
        document.getElementById('user-input').value = '';
    }
});

function appendMessage(text, className) {
    let chatBox = document.getElementById('chat-box');
    let messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + className;
    messageDiv.innerHTML = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userInput) {
    let botResponse = '';

    // Questions for Train Travel
    if (userInput.toLowerCase().includes('book a train')) {
        botResponse = 'Sure! Please provide your departure and destination cities along with the date of travel.';
    } else if (userInput.toLowerCase().includes('train routes')) {
        botResponse = 'You can find major train routes like Mumbai to Delhi, Chennai to Kolkata, etc.';
    } else if (userInput.toLowerCase().includes('train safety')) {
        botResponse = 'Always book in sleeper or AC classes for safer travel.';
    } else if (userInput.toLowerCase().includes('train payment')) {
        botResponse = 'You can use Credit/Debit cards, UPI, and Net Banking for payments.';
    } else if (userInput.toLowerCase().includes('train tips')) {
        botResponse = 'For long journeys, carry essentials like ID proof, water, and snacks.';

    // Questions for Bus Travel
    } else if (userInput.toLowerCase().includes('book a bus')) {
        botResponse = 'Please provide your route and date of travel for bus booking.';
    } else if (userInput.toLowerCase().includes('bus routes')) {
        botResponse = 'Popular bus routes include Delhi to Manali, Bangalore to Goa, etc.';
    } else if (userInput.toLowerCase().includes('bus safety')) {
        botResponse = 'For safety, choose buses with good reviews and avoid overnight travel if possible.';
    } else if (userInput.toLowerCase().includes('bus payment')) {
        botResponse = 'You can pay via online methods like UPI, credit cards, and digital wallets.';
    } else if (userInput.toLowerCase().includes('bus tips')) {
        botResponse = 'Book your bus ticket in advance to get the best seats and prices.';

    // Questions for Flight Travel
    } else if (userInput.toLowerCase().includes('book a flight')) {
        botResponse = 'Sure! Please provide your departure and destination airports along with the date of travel.';
    } else if (userInput.toLowerCase().includes('flight routes')) {
        botResponse = 'Major flight routes include New York to London, Tokyo to Los Angeles, etc.';
    } else if (userInput.toLowerCase().includes('flight safety')) {
        botResponse = 'Ensure you follow all safety protocols, including wearing a mask and following airline guidelines.';
    } else if (userInput.toLowerCase().includes('flight payment')) {
        botResponse = 'You can pay using credit/debit cards, UPI, and international payment options.';
    } else if (userInput.toLowerCase().includes('flight tips')) {
        botResponse = 'Arrive at the airport at least 2 hours before departure for domestic flights and 3 hours for international flights.';

    // Questions for Car Travel
    } else if (userInput.toLowerCase().includes('car travel')) {
        botResponse = 'For a road trip, make sure your car is serviced, and plan your route and stops in advance.';
    } else if (userInput.toLowerCase().includes('car routes')) {
        botResponse = 'Popular road trip routes include Route 66 in the USA, Great Ocean Road in Australia, etc.';
    } else if (userInput.toLowerCase().includes('car safety')) {
        botResponse = 'Always wear seat belts, avoid driving when tired, and keep an emergency kit in the car.';
    } else if (userInput.toLowerCase().includes('car payment')) {
        botResponse = 'Payments for tolls and services can be done via cards or digital wallets.';
    } else if (userInput.toLowerCase().includes('car tips')) {
        botResponse = 'Keep a spare tire, tools, and maps or GPS handy for your road trip.';

    // Tourist Recommendations
    } else if (userInput.toLowerCase().includes('recommend places for staying')) {
        botResponse = 'You can stay at luxury hotels like The Oberoi, budget hotels like Ginger, or opt for Airbnb stays.';
    } else if (userInput.toLowerCase().includes('recommend places for tourism')) {
        botResponse = 'Visit iconic places like the Taj Mahal, explore the backwaters of Kerala, or go trekking in the Himalayas.';

    // Default Response
    } else {
        botResponse = 'I\'m sorry, I didn\'t understand that. You can ask me to book tickets, recommend places, or provide travel tips.';
    }

    setTimeout(() => {
        appendMessage(botResponse, 'bot-message');
    }, 1000);
}
