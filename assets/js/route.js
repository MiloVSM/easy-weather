import { updateWeather, error404 } from "./app.js"; 


// Localização padrão (Brasília)
const defaultLocation = "#weather?lat=-15.7934036&lon=-47.8823172"


// Função para alterar a URL e fazer a requisição para a localidade atual
const currentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(res => { // Obtém a posição geográfica atual do usuário
        const { latitude, longitude } = res.coords; // Extrai latitude e longitude das coordenadas

        updateWeather(`lat=${latitude}`, `lon=${longitude}`); // Atualiza o clima com as coordenadas atuais
    }), err => { // Caso ocorra um erro ao obter a localização
        window.location.hash = defaultLocation; // Redireciona para a localização padrão
    };
}


/**
 * 
 * @param {string} query Consulta de localização pesquisada
 */

const searchedLocation = query => updateWeather(...query.split("&")); // Atualiza o clima com a consulta de localização pesquisada

const routes = new Map([
    ["/current-location", currentLocation], // Rota para a localização atual
    ["/weather", searchedLocation] // Rota para a localização pesquisada
])


// Função para verificar a URL
const checkHash = () => {
    const requestURL = window.location.hash.slice(1); // Remove o '#' do início da URL

    const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL] // Divide a URL em rota e consulta

    routes.get(route) ? routes.get(route)(query) : error404(); // Chama a função correspondente à rota ou exibe erro 404
}

window.addEventListener("hashchange", checkHash); // Adiciona um ouvinte de evento para mudanças no hash da URL

window.addEventListener("load", () => {
    if (!window.location.hash) { // Se não houver hash na URL
        window.location.hash = "/current-location"; // Define a hash para a localização atual
    } else {
        checkHash(); 
    }
})
