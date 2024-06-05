# Weather App

## Overview
This is a simple weather application that displays weather information for a specified location. It fetches data from the OpenWeatherMap API and presents it in a user-friendly interface styled with HTML and CSS.

## Features
- Fetches real-time weather data from the OpenWeatherMap API.
- Displays current temperature, weather conditions, humidity, and wind speed.
- User-friendly interface with responsive design.
- Error handling for invalid location inputs.

## Technologies Used
- HTML
- CSS
- JavaScript
- [OpenWeatherMap API](https://openweathermap.org/api)

## Getting Started

### Prerequisites
- A modern web browser.
- An API key from OpenWeatherMap. You can sign up for a free API key [here](https://home.openweathermap.org/users/sign_up).

### Installation
1. Clone the repository to your local machine:
    sh
    git clone https://github.com/Noel9907/weather_site
    
2. Navigate to the project directory:
    sh
    cd weather-app
    
3. Open `index.html` in your web browser.

### Configuration
1. Open the `script.js` file.
2. Replace `apiKey` with your actual OpenWeatherMap API key:
    javascript
    const apiKey = 'YOUR_API_KEY';
    

## Usage
1. Enter a city name in the input field.
2. Click the "search" button.
3. The app will display the current weather information for the specified city.

## Project Structure
plaintext
weather-app/
│
├── index.html        # Main HTML file
├── styles.css        # CSS file for styling
└── script.js         # JavaScript file for fetching and displaying weather data


## Screenshots
![Weather App Screenshot](https://github.com/Noel9907/weather_site/blob/main/images/Screenshot.png)

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/Noel9907/weather_site/blob/main/LICENSE) file for details.

## Acknowledgements
- [OpenWeatherMap](https://openweathermap.org/) for the API.
- All the open-source contributors whose libraries and resources were used in this project.

## Contact
For any questions or suggestions, please contact me at noeelskocheekaran@gmail.com
