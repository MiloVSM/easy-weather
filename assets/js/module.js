export const weekDayNames = [
    "Domingo",
    "Segunda-feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
];

export const monthNames = [
    "Jan",
    "Fev",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
];

/**
 * 
 * @param {number} dateUnix Data Unix em segundos
 * @param {number} timezone Diferença de fuso horário em relação ao UTC em segundos
 * @returns {string} String da data. formato: "Domingo 10, Jan"
 */

export const getDate = (dateUnix, timezone) => {
    const date = new Date((dateUnix + timezone) * 1000); // Cria uma data ajustada para o fuso horário fornecido
    const weekDayName = weekDayNames[date.getUTCDay()]; // Obtém o nome do dia da semana e do mês
    const monthName = monthNames[date.getUTCMonth()];
    return `${weekDayName} ${date.getUTCDate()}, ${monthName}` // Retorna a data formatada como string
}


/**
 * 
 * @param {number} timeUnix Data Unix em segundos
 * @param {number} timezone Diferença de fuso horário em relação ao UTC em segundos
 * @returns {string} String do horário. formato: "HH:MM AM/PM"
 */

export const getTime = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000); // Cria uma data ajustada para o fuso horário fornecido
    const hours = date.getUTCHours();  // Obtém horas e minutos ajustados para o formato 12 horas
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minutes} ${period}` // Retorna o horário formatado como string
} 


/**
 * 
 * @param {number} timeUnix Data Unix em segundos
 * @param {number} timezone Diferença de fuso horário em relação ao UTC em segundos
 * @returns {string} String do horário. formato: "HH AM/PM"
 */

export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000); // Cria uma data ajustada para o fuso horário fornecido
    const hours = date.getUTCHours(); // Obtém horas ajustadas para o formato 12 horas
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12} ${period}` // Retorna a hora formatada como string
} 


/**
 * Função para converter metros por segundos por kilometros por hora 
 * 
 * @param {number} mps Metros por segundo
 * @returns {number} Quilômetros por hora
 */

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}


// Texto para os níveis de qualidade do ar
export const aqiText = {
    1: {
        level: "Bom",
        message: "A qualidade do ar é considerada satisfatória e a poluição do ar apresenta pouco ou nenhum risco."
    },
    2: {
        level: "Okay",
        message: "A qualidade do ar é aceitável; No entanto, para alguns poluentes, pode haver uma preocupação moderada com a saúde para um número muito pequeno de pessoas que são excepcionalmente sensíveis à poluição do ar."
    },
    3: {
        level: "Moderado",
        message: "Membros de grupos sensíveis podem experimentar efeitos na saúde. O público em geral não é provável que seja afetado."
    },
    4: {
        level: "Ruim",
        message: "A maioria das pessoas pode começar a experimentar efeitos na saúde. Membros de grupos sensíveis podem experimentar efeitos mais graves na saúde."
    },
    5: {
        level: "Muito Ruim",
        message: "Alertas de condições de emergência de saúde. Toda a população é provável que sofra efeitos na saúde."
    }
}
