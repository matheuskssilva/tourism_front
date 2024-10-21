export interface Location {
    name: string;
    code: string;

}
export interface Destination {
    name: string;
    code: string;

}

export const location = [
    { name: "Madrid-Barajas", code: "MAD", city: "Madrid", country: "Espanha" },
    { name: "Cidade do México", code: "MEX", city: "Cidade do México", country: "México" },
    { name: "Roma Fiumicino", code: "FCO", city: "Roma", country: "Itália" },
    { name: "Buenos Aires", code: "EZE", city: "Buenos Aires", country: "Argentina" },
    { name: "Miami", code: "MIA", city: "Miami", country: "EUA" },
    { name: "São Francisco", code: "SFO", city: "São Francisco", country: "EUA" },
    { name: "Doha", code: "DOH", city: "Doha", country: "Qatar" },
    { name: "Istanbul", code: "IST", city: "Istambul", country: "Turquia" },
    { name: "Seul Incheon", code: "ICN", city: "Seul", country: "Coreia do Sul" },
    { name: "Kuala Lumpur", code: "KUL", city: "Kuala Lumpur", country: "Malásia" },
    { name: "Bangkok Suvarnabhumi", code: "BKK", city: "Bangkok", country: "Tailândia" },
    { name: "Manchester", code: "MAN", city: "Manchester", country: "Reino Unido" },
    { name: "Dublin", code: "DUB", city: "Dublin", country: "Irlanda" },
    { name: "Zurique", code: "ZRH", city: "Zurique", country: "Suíça" },
    { name: "Viena", code: "VIE", city: "Viena", country: "Áustria" },
    { name: "Estocolmo Arlanda", code: "ARN", city: "Estocolmo", country: "Suécia" },
    { name: "Copenhague", code: "CPH", city: "Copenhague", country: "Dinamarca" },
    { name: "Lisboa", code: "LIS", city: "Lisboa", country: "Portugal" },
    { name: "Praga", code: "PRG", city: "Praga", country: "República Tcheca" },
    { name: "Bruxelas", code: "BRU", city: "Bruxelas", country: "Bélgica" },
    { name: "Montreal", code: "YUL", city: "Montreal", country: "Canadá" },
    { name: "Houston", code: "IAH", city: "Houston", country: "EUA" },
    { name: "Las Vegas", code: "LAS", city: "Las Vegas", country: "EUA" },
    { name: "Newark", code: "EWR", city: "Newark", country: "EUA" },
    { name: "Boston", code: "BOS", city: "Boston", country: "EUA" },
    { name: "Filadélfia", code: "PHL", city: "Filadélfia", country: "EUA" },
    { name: "Washington Dulles", code: "IAD", city: "Washington", country: "EUA" },
    { name: "Phoenix", code: "PHX", city: "Phoenix", country: "EUA" },
    { name: "Seattle", code: "SEA", city: "Seattle", country: "EUA" },
    { name: "Orlando", code: "MCO", city: "Orlando", country: "EUA" },
    { name: "Atlanta", code: "ATL", city: "Atlanta", country: "EUA" },
    { name: "Dallas/Fort Worth", code: "DFW", city: "Dallas", country: "EUA" },
    { name: "Denver", code: "DEN", city: "Denver", country: "EUA" },
    { name: "Minneapolis", code: "MSP", city: "Minneapolis", country: "EUA" },
    { name: "Charlotte", code: "CLT", city: "Charlotte", country: "EUA" },
    { name: "Pittsburgh", code: "PIT", city: "Pittsburgh", country: "EUA" },
    { name: "San Diego", code: "SAN", city: "San Diego", country: "EUA" },
    { name: "Tampa", code: "TPA", city: "Tampa", country: "EUA" },
    { name: "Fort Lauderdale", code: "FLL", city: "Fort Lauderdale", country: "EUA" },
    { name: "Jacksonville", code: "JAX", city: "Jacksonville", country: "EUA" },
    { name: "Nashville", code: "BNA", city: "Nashville", country: "EUA" },
    { name: "Cincinnati", code: "CVG", city: "Cincinnati", country: "EUA" },
    { name: "Kansas City", code: "MCI", city: "Kansas City", country: "EUA" },
    { name: "St. Louis", code: "STL", city: "St. Louis", country: "EUA" },
    { name: "New Orleans", code: "MSY", city: "New Orleans", country: "EUA" },
    { name: "Salt Lake City", code: "SLC", city: "Salt Lake City", country: "EUA" },
    { name: "San Antonio", code: "SAT", city: "San Antonio", country: "EUA" },
    { name: "Austin", code: "AUS", city: "Austin", country: "EUA" },
    { name: "Raleigh-Durham", code: "RDU", city: "Raleigh", country: "EUA" },
    { name: "Honolulu", code: "HNL", city: "Honolulu", country: "EUA" },
    { name: "Anchorage", code: "ANC", city: "Anchorage", country: "EUA" },
    { name: "San Juan", code: "SJU", city: "San Juan", country: "Porto Rico" },
    { name: "Punta Cana", code: "PUJ", city: "Punta Cana", country: "República Dominicana" },
    { name: "Cancún", code: "CUN", city: "Cancún", country: "México" },
    { name: "Acapulco", code: "ACA", city: "Acapulco", country: "México" },
    { name: "Guadalajara", code: "GDL", city: "Guadalajara", country: "México" },
    { name: "Monterrey", code: "MTY", city: "Monterrey", country: "México" },
    { name: "Medellín José María Córdova", code: "MDE", city: "Medellín", country: "Colômbia" },
    { name: "Lima", code: "LIM", city: "Lima", country: "Peru" },
    { name: "Santiago", code: "SCL", city: "Santiago", country: "Chile" },
    { name: "Rio de Janeiro", code: "GIG", city: "Rio de Janeiro", country: "Brasil" },
    { name: "Recife", code: "REC", city: "Recife", country: "Brasil" },
    { name: "Guarulhos", code: "GRU", city: "São Paulo", country: "Brasil" }
]

export const destinations = [
    { name: "Cidade do México", code: "MEX", city: "Cidade do México", country: "México" },
    { name: "Madrid-Barajas", code: "MAD", city: "Madrid", country: "Espanha" },
    { name: "Roma Fiumicino", code: "FCO", city: "Roma", country: "Itália" },
    { name: "Buenos Aires", code: "EZE", city: "Buenos Aires", country: "Argentina" },
    { name: "Miami", code: "MIA", city: "Miami", country: "EUA" },
    { name: "São Francisco", code: "SFO", city: "São Francisco", country: "EUA" },
    { name: "Doha", code: "DOH", city: "Doha", country: "Qatar" },
    { name: "Istanbul", code: "IST", city: "Istambul", country: "Turquia" },
    { name: "Seul Incheon", code: "ICN", city: "Seul", country: "Coreia do Sul" },
    { name: "Kuala Lumpur", code: "KUL", city: "Kuala Lumpur", country: "Malásia" },
    { name: "Bangkok Suvarnabhumi", code: "BKK", city: "Bangkok", country: "Tailândia" },
    { name: "Manchester", code: "MAN", city: "Manchester", country: "Reino Unido" },
    { name: "Dublin", code: "DUB", city: "Dublin", country: "Irlanda" },
    { name: "Zurique", code: "ZRH", city: "Zurique", country: "Suíça" },
    { name: "Viena", code: "VIE", city: "Viena", country: "Áustria" },
    { name: "Estocolmo Arlanda", code: "ARN", city: "Estocolmo", country: "Suécia" },
    { name: "Copenhague", code: "CPH", city: "Copenhague", country: "Dinamarca" },
    { name: "Lisboa", code: "LIS", city: "Lisboa", country: "Portugal" },
    { name: "Praga", code: "PRG", city: "Praga", country: "República Tcheca" },
    { name: "Bruxelas", code: "BRU", city: "Bruxelas", country: "Bélgica" },
    { name: "Montreal", code: "YUL", city: "Montreal", country: "Canadá" },
    { name: "Houston", code: "IAH", city: "Houston", country: "EUA" },
    { name: "Las Vegas", code: "LAS", city: "Las Vegas", country: "EUA" },
    { name: "Newark", code: "EWR", city: "Newark", country: "EUA" },
    { name: "Boston", code: "BOS", city: "Boston", country: "EUA" },
    { name: "Filadélfia", code: "PHL", city: "Filadélfia", country: "EUA" },
    { name: "Washington Dulles", code: "IAD", city: "Washington", country: "EUA" },
    { name: "Phoenix", code: "PHX", city: "Phoenix", country: "EUA" },
    { name: "Seattle", code: "SEA", city: "Seattle", country: "EUA" },
    { name: "Orlando", code: "MCO", city: "Orlando", country: "EUA" },
    { name: "Atlanta", code: "ATL", city: "Atlanta", country: "EUA" },
    { name: "Dallas/Fort Worth", code: "DFW", city: "Dallas", country: "EUA" },
    { name: "Denver", code: "DEN", city: "Denver", country: "EUA" },
    { name: "Minneapolis", code: "MSP", city: "Minneapolis", country: "EUA" },
    { name: "Charlotte", code: "CLT", city: "Charlotte", country: "EUA" },
    { name: "Pittsburgh", code: "PIT", city: "Pittsburgh", country: "EUA" },
    { name: "San Diego", code: "SAN", city: "San Diego", country: "EUA" },
    { name: "Tampa", code: "TPA", city: "Tampa", country: "EUA" },
    { name: "Fort Lauderdale", code: "FLL", city: "Fort Lauderdale", country: "EUA" },
    { name: "Jacksonville", code: "JAX", city: "Jacksonville", country: "EUA" },
    { name: "Nashville", code: "BNA", city: "Nashville", country: "EUA" },
    { name: "Cincinnati", code: "CVG", city: "Cincinnati", country: "EUA" },
    { name: "Kansas City", code: "MCI", city: "Kansas City", country: "EUA" },
    { name: "St. Louis", code: "STL", city: "St. Louis", country: "EUA" },
    { name: "New Orleans", code: "MSY", city: "New Orleans", country: "EUA" },
    { name: "Salt Lake City", code: "SLC", city: "Salt Lake City", country: "EUA" },
    { name: "San Antonio", code: "SAT", city: "San Antonio", country: "EUA" },
    { name: "Austin", code: "AUS", city: "Austin", country: "EUA" },
    { name: "Raleigh-Durham", code: "RDU", city: "Raleigh", country: "EUA" },
    { name: "Honolulu", code: "HNL", city: "Honolulu", country: "EUA" },
    { name: "Anchorage", code: "ANC", city: "Anchorage", country: "EUA" },
    { name: "San Juan", code: "SJU", city: "San Juan", country: "Porto Rico" },
    { name: "Punta Cana", code: "PUJ", city: "Punta Cana", country: "República Dominicana" },
    { name: "Cancún", code: "CUN", city: "Cancún", country: "México" },
    { name: "Acapulco", code: "ACA", city: "Acapulco", country: "México" },
    { name: "Guadalajara", code: "GDL", city: "Guadalajara", country: "México" },
    { name: "Monterrey", code: "MTY", city: "Monterrey", country: "México" },
    { name: "Medellín José María Córdova", code: "MDE", city: "Medellín", country: "Colômbia" },
    { name: "Lima", code: "LIM", city: "Lima", country: "Peru" },
    { name: "Santiago", code: "SCL", city: "Santiago", country: "Chile" },
    { name: "Rio de Janeiro", code: "GIG", city: "Rio de Janeiro", country: "Brasil" },
    { name: "Recife", code: "REC", city: "Recife", country: "Brasil" },
    { name: "Guarulhos", code: "GRU", city: "São Paulo", country: "Brasil" }
]