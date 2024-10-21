"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Location, location, destinations, Destination } from "./utils";
import { passagers } from "./passagers";
import { Box, FormControl, Input, Select } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";

const Travel: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [checkint, setCheckInt] = useState(new Date());
  const [checkout, setCheckOut] = useState(new Date());
  const [passenger, setPassenger] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [flights, setFlights] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`; // Formato YYYY-MM-DD
  }

  const isValidDate = (date: Date) => !isNaN(date.getTime());

  const formattedCheckIn = isValidDate(checkint) ? formatDate(checkint) : ''
  const formattedCheckOut = isValidDate(checkout) ? formatDate(checkout) : ''

  const handleSearch = async () => {
    setIsSubmitted(true);
    setError("");

    if (!/^[A-Z]{3}$/.test(origin) || !/^[A-Z]{3}$/.test(destination)) {
      setError("Os códigos de localização devem ser códigos IATA de 3 letras.");
      return;
    }

    if (!formattedCheckIn || !formattedCheckOut) {
      setError("As datas devem estar no formato MM/DD/YYYY.");
      return;
    }

    try {
      const response = await fetch(
        "https://tourism-back-3hje.onrender.com/api/flightSearch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            origin,
            destination,
            checkint: formattedCheckIn,
            checkout: formattedCheckOut,
            passengers: passenger,
          }),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Erro na resposta:", errorDetails);
        setError(`Erro ao buscar voos: ${response.statusText}`);
        return;
      }

      const data = await response.json();
      console.log("Flight search result:", data);

      if (data && data.data) {
        setFlights(data.data);
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
    <Box className="absolute lg:right-[140px] 2xl:right-[70px] 2xl:-top-[330px] -top-[650px] lg:-top-[250px] md:right-[40px] md:bottom-20 md:-top-[200px] bottom-0 -right-[165px] justify-center">
      <Box className="h-[600px] md:h-[100px] flex flex-col bg-white w-[330px] rounded-t-2xl lg:w-[460px] rounded-[20px]">
        <Box className="bg-transparent text-[#FF914D] font-bold text-lg lg:text-2xl flex items-center justify-center mt-[22px] gap-12 md:gap-[50px] lg:justify-start  lg:ml-[28px]">
          <button>Destino</button>
          <button>Vôos</button>
          <button>Cruzeiros</button>
        </Box>
        <Box>
          <form
            className="w-[280px] md:w-[720px] lg:w-[1220px] 2xl:w-[1300px] bg-white h-[505px] md:h-[86px] lg:h-[116px] flex flex-col md:flex-row items-center lg:ml-0 justify-center lg:justify-start lg:gap-[30px] 2xl:gap-[60px] rounded-b-2xl md:rounded-2xl"
            onSubmit={(e) => {
              e.preventDefault()
              handleSearch()
            }}
          >
            <Box className="flex flex-col items-center md:items-start mt-10 md:mt-0 lg:ml-3">
              <h2 className="font-normal text-lg ml-5 md:ml-4 md:text-xs lg:text-lg text-[#979696] lg:ml-4">
                Localização
              </h2>
              <FormControl>
                <Box className="w-[180px]  md:w-[86px] lg:w-[150px] ml-12 md:ml-0">
                  <Select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className=" bg-transparent mt-2 font-bold text-lg md:text-xs lg:text-base"
                    style={{border: "none"}}
                  >
                    {location.map((loc: Location) => (
                      <option key={loc.name} value={loc.code} className="font-bold ">
                        {loc.name}
                      </option>
                    ))}
                  </Select>
                </Box>
              </FormControl>
            </Box>
            <Box className="flex flex-col items-center md:items-start my-2">
              <h2 className="font-normal text-lg ml-4 md:ml-4 md:text-xs lg:text-lg text-[#979696] lg:ml-4">
                N° de passageiros
              </h2>
              <Box className="w-[180px] md:w-[120px] lg:w-[180px] ml-12 md:ml-0">
                <Select
                  value={passenger.toString()}
                  onChange={(e) => setPassenger(parseInt(e.target.value))}
                  className="font-bold text-lg md:text-xs lg:text-base bg-transparent mt-2 border-none outline-none"
                  style={{border: "none"}}
                >
                  {passagers.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                      className="font-bold text-lg md:text-xs lg:text-base"
                    >
                      {p.passagers}
                    </option>
                  ))}
                </Select>
              </Box>
            </Box>
            <Box className="flex flex-col items-center md:items-start">
              <Box className="w-[180px] lg:w-[160px] md:w-[72px] ml-12 md:ml-0 flex flex-col gap-2">
                <h2 className="text-center -ml-8 md:ml-4 md:text-left text-lg md:text-xs lg:text-lg text-[#979696] lg:ml-4">
                  Destino
                </h2>
                <Select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="font-bold text-lg"
                  style={{border: "none"}}
                >
                  {destinations.map((dest: Destination) => (
                    <option
                      key={dest.name}
                      value={dest.code}
                      className="font-bold lg:text-base md:text-xs"
                    >
                      {dest.name}
                    </option>
                  ))}
                </Select>
              </Box>
            </Box>
            <Box className="flex flex-col md:flex-row md:gap-[0px] lg:gap-[30px] items-center md:items-start">
              <Box className="flex flex-col gap-2">
                <h2 className="text-lg text-center ml-4 md:ml-4 md:text-left mt-7 md:mt-0 md:text-xs lg:text-lg text-[#979696] lg:ml-4">
                  Check-In
                </h2>
                <Box className="w-[180px] md:w-[155px] lg:w-[160px] ml-12 md:ml-0 bg-transparent font-bold text-base">
                  <Input
                    value={checkint ? checkint.toISOString().split("T")[0] : ""}
                    onChange={(e) => {
                      const newDate = new Date(e.target.value);
                      if (!isNaN(newDate.getTime())) {
                        setCheckInt(newDate);
                      }
                    }}
                    type="date"
                    style={{border: "none"}}
                    className="text-lg md:text-xs lg:text-base"
                  />
                </Box>
              </Box>
              <Box className="flex flex-col gap-2">
                <h2 className="font-normal text-center ml-4 md:ml- md:text-left mt-7 md:mt-0 text-lg md:text-xs lg:text-lg lg:ml-4 text-[#979696]">
                  Check-Out
                </h2>
                <Box className="w-[180px] md:w-[155px] lg:w-[160px]  ml-12 md:ml-0 bg-transparent font-bold text-lg">
                  <Input
                    value={checkout ? checkout.toISOString().split("T")[0] : ""}
                    onChange={(e) => {
                      const newDate = new Date(e.target.value);
                      if (!isNaN(newDate.getTime())) {
                        setCheckOut(newDate);
                      }
                    }}
                    type="date"
                    style={{border: "none"}}
                    className="text-lg lg:text-base md:text-xs"
                  />
                </Box>
              </Box>
            </Box>
            <Button
              variant="default"
              type="submit"
              className="bg-[#FF914D] text-white font-bold text-base w-[150px] h-[30px] lg:w-[170px] lg:h-[47px] md:w-[118px] md:h-[26px] md:text-xs lg:text-lg md:rounded-lg rounded-xl ml-10 md:ml-0 mt-4 lg:mr-11 "
            >
              Procurar pacotes
            </Button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {flights.length > 0 ? (
            <Box>
              <h2>Resultado Dos Voos:</h2>
              <Box className="flex flex-col bg-transparent absolute mt-14">
                <ul className="space-y-4 grid grid-cols-1">
                  {flights.map((flight, index) => (
                    <li
                      key={flight.id || index}
                      className="bg-black text-white p-4 rounded-md"
                    >
                      <strong>Voo:</strong>{" "}
                      {flight.itineraries[0].segments[0].departure.iataCode} -{" "}
                      {flight.itineraries[0].segments[0].arrival.iataCode}{" "}
                      <br />
                      <strong>Data de Partida:</strong>{" "}
                      {flight.itineraries[0].segments[0].departure.at} <br />
                      <strong>Preço:</strong> {flight.price.total}{" "}
                      {flight.price.currency}
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          ) : (
            isSubmitted && <p>Nenhum voo encontrado.</p>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Travel;
