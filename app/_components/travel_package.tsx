"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Location, location } from "./location";

const Travel: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [checkint, setCheckInt] = useState("");
  const [checkout, setCheckOut] = useState("");
  const [passenger, setPassenger] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [flights, setFlights] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSearch = async () => {
    setIsSubmitted(true);
    setError("");

    if (!/^[A-Z]{3}$/.test(origin) || !/^[A-Z]{3}$/.test(destination)) {
      setError("Os códigos de localização devem ser códigos IATA de 3 letras.");
      return;
    }

    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(checkint) ||
      !/^\d{4}-\d{2}-\d{2}$/.test(checkout)
    ) {
      setError("As datas devem estar no formato YYYY-MM-DD.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/flightSearch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          origin,
          destination,
          checkint,
          checkout,
          passengers: passenger,
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.text()
        console.error("Erro na resposta:", errorDetails)
        setError(`Erro ao buscar voos: ${response.statusText}`);
        return;
      }

      const data = await response.json();
      console.log("Flight search result:", data)

      if (data && data.data) {
        setFlights(data.data)
        setError("");
      } else {
        setFlights([]);
        setError("Nenhum voo encontrado.");
      }
    } catch (err) {
      console.error("Erro ao buscar voos:", err);
      setError("Falha ao buscar voos.");
    }
  };

  return (
    <div>
      <div className="flex flex-col bg-white w-[280px] rounded-t-2xl lg:w-[460px]">
        <div className="bg-transparent text-[#FF914D] font-bold text-base lg:text-2xl flex items-center justify-center mt-[20px] gap-6 md:gap-[50px] lg:justify-start lg:ml-[28px]">
          <button>Destino</button>
          <button>Vôos</button>
          <button>Cruzeiros</button>
        </div>
        <div>
          <form
            className="w-[280px] md:w-[680px] lg:w-[1050px] 2xl:w-[1190px] bg-white h-[455px] md:h-[86px] lg:h-[116px] flex flex-col md:flex-row items-center justify-center lg:justify-start lg:gap-[60px] 2xl:gap-[100px] lg:ml-7 rounded-b-2xl md:rounded-2xl"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-normal text-base md:text-sm lg:text-lg text-[#979696]">
                Localização
              </h2>
              <Input
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-[180px] md:w-[86px] lg:w-[150px] bg-transparent mt-2 font-bold text-base"
              />
            </div>
            <div className="flex flex-col items-center md:items-start my-6">
              <h2 className="font-normal text-base md:text-sm lg:text-lg text-[#979696]">
                N° de passageiros
              </h2>
              <Select
                value={passenger.toString()}
                onValueChange={(value) => setPassenger(parseInt(value))}
              >
                <SelectTrigger className="w-[180px] md:w-[86px] lg:w-[150px] bg-transparent mt-2">
                  <SelectValue
                    placeholder="1 passageiro"
                    className="font-bold text-base"
                  />
                </SelectTrigger>
                <SelectContent className="font-bold text-base bg-white">
                  <SelectItem value="1" className="font-bold text-base">
                    1 passageiro
                  </SelectItem>
                  <SelectItem value="2" className="font-bold text-base">
                    2 passageiros
                  </SelectItem>
                  <SelectItem value="3" className="font-bold text-base">
                    3 passageiros
                  </SelectItem>
                  <SelectItem value="4" className="font-bold text-base">
                    4 passageiros
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col items-center md:items-start my-6">
              <h2 className="font-normal text-base md:text-sm lg:text-lg text-[#979696]">
                Destino
              </h2>
              <select  value={destination} onChange={(e) => setDestination(e.target.value)}>
                  {location.map((location: Location) => (
                     <option value={location.code} key={location.name}>{location.name}</option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col md:flex-row md:gap-[20px] lg:gap-[60px] items-center md:items-start mb-6">
              <Input
                value={checkint}
                onChange={(e) => setCheckInt(e.target.value)}
                className="w-[180px] md:w-[86px] lg:w-[150px] bg-transparent mt-2 font-bold text-base"
              />
              <Input
                value={checkout}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-[180px] md:w-[86px] lg:w-[150px] bg-transparent mt-2 font-bold text-base"
              />
            </div>
            <Button
              variant="default"
              type="submit"
              className="bg-[#FF914D] text-white text-base w-[150px] h-[26px] lg:w-[170px] lg:h-[47px] md:w-[118px] md:h-[26px] md:text-xs lg:text-lg md:rounded-lg rounded-xl"
            >
              Procurar pacotes
            </Button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {flights.length > 0 ? (
    <div>
        <h2>Resultado Dos Voos:</h2>
        <div className="flex flex-col bg-transparent absolute mt-14">
        <ul className="space-y-4 grid grid-cols-1"> {/* Adiciona espaçamento entre os itens */}
          
            {flights.map((flight, index) => (
                <li key={flight.id || index} className="bg-black text-white p-4 rounded-md">
                    <strong>Voo:</strong> {flight.itineraries[0].segments[0].departure.iataCode} - {flight.itineraries[0].segments[0].arrival.iataCode} <br />
                    <strong>Data de Partida:</strong> {flight.itineraries[0].segments[0].departure.at} <br />
                    <strong>Preço:</strong> {flight.price.total} {flight.price.currency}
                </li>
            ))}
        </ul>
        </div>
    </div>
) : (
    isSubmitted && <p>Nenhum voo encontrado.</p>
)}
        </div>
      </div>
    </div>
  );
};

export default Travel;
