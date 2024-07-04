const api_key = "6670f0313b0337594571f11d66e81aba"; // Chave da API

/**
 * Função assíncrona para buscar dados da API
 * 
 * @param {string} url API url
 * @param {Function} callback função callback
 */

export const fetchData = async function (url, callback) {
    try {
        const response = await fetch(`${url}&lang=pt&appid=${api_key}`)
        const data = await response.json();
        await callback(data);
    
        return data;
    } catch (e) {
        console.log(`Error fetching data: ${e}`);
    }
    
}

// Objeto que contém as funções para gerar as URLs das requisições

export const url = {
    // URL para obter o tempo atual com base na latitude e longitude
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    // URL para obter dados de poluição do ar com base na latitude e longitude
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    // URL para obter dados de geocodificação reversa com base na latitude e longitude
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    // URL para obter dados de geocodificação reversa com base na latitude e longitude
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&`
    },


    /**
     * URL para buscar a geocodificação de uma cidade
     * @param {string} city Nome da cidade para busca, por exemplo: "London", "New York"
     * @returns URL formatada para a busca da cidade
     */
    geo(city) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&`
    }

}