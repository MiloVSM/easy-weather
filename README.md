# Easy Weather

## Description

Easy weather is a simple and easy to use weather web app that provides real-time weather conditions, air pollution, and a 5-day weather forecast. You can use your current location or search for any other desired location.

## Features

- Current weather conditions
- 5-day weather forecast
- Air pollution data
- Geocoding and reverse geocoding
- Search by city name
- Responsive design for mobile devices

## Technologies Used

- JavaScript (ES6)
- HTML5
- CSS3
- OpenWeatherMap API


<p align="right">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,html,css" />
  </a>
</p>

### Project Structure

- `api.js`: Handles data fetching from the OpenWeatherMap API and generates request URLs.
- `app.js`: Integrates search functionality with the API, updates weather data on the UI, and displays fetched information.
- `module.js`: Provides utility functions for formatting dates, times, and handling air quality index descriptions.
- `route.js`: Manages routing for different locations (current location or searched location) and updates the URL hash accordingly.

<br></br>

## Getting Started

### Pre-requisites

> Before running the project locally, ensure you have the following installed:

- **Node.js** - To run JavaScript code outside the browser environment.
- **npm (Node Package Manager)** - To manage project dependencies and scripts.
- **OpenWeatherMap API Key** - Sign up for an API key at [OpenWeatherMap](https://openweathermap.org/) and replace `your_api_key` in `api.js`.
<br></br>
  ```terminal
    const api_key = "your_api_key"; // Your OpenWeatherMap API key
  ```

### Installation and Usage
   ```bash

    # Clone the repository:
    git clone https://github.com/MiloVSM/easy-weather.git
    cd easy-weather

    # Install dependencies and start the application:
    npm install
    npm run dev

   ```
:)

## How to Use
  **Use Current Location**\
  Click the "Use Current Location" button to fetch weather data based on your current geolocation.
  
  **Searching for Weather**\
  Enter a city name in the search field to view current weather, 5-day forecast, and air quality index information for that location.
<br></br>

## Contributing
- Fork the repository.
- Create a new branch: git checkout -b feature-branch-name.
- Make your changes and commit them: git commit -m 'Add some feature'.
- Push to the branch: git push origin feature-branch-name.
- Submit a pull request.
<br></br>

## License
> This project is licensed under the MIT License - see the LICENSE file for details.
<br></br>

**Don't forget to give the project a star!** ⭐

<br>

> ℹ️ **Did you know?**
>
> In 2012, GitHub launched the starring function.
> Stars were a new way to keep track of repositories that caught your attention.
> In GitHub social etiquette, starring a repo is not only way to bookmark a project but also to express **how much you appreciated and found it interesting!**
## Contact
<img align="left" src="https://avatars.githubusercontent.com/milovsm?size=100">

Made with ❤️ by [Milo](https://github.com/milovsm), get in touch!

<a href="mailto:murilo1.0@outlook.com" target="_blank"><img src="https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white" alt="Email Badge" height="25"></a>&nbsp;
<a href="https://linkedin.com/in/milovsm" target="_blank"><img src="https://img.shields.io/badge/Linkedin-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="25"></a>&nbsp;

<br clear="left"/>
