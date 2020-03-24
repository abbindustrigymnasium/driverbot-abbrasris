# driverbot-abbrasris

En bil som går att styra med hjälp av en hemsida.

## Krav

### Hemsida

Hemsidan är skriven i Node.JS och använder ett flertal bibliotek.

| Namn | Version | Beskrivning |
|---|---|---|
| dotenv | ![](https://img.shields.io/npm/v/dotenv.svg) | Loads environment variables from a .env file into process.env.
| express | ![](https://img.shields.io/npm/v/express.svg) | Fast, unopinionated, minimalist web framework for node.
| body-parser | ![](https://img.shields.io/npm/v/body-parser.svg) | Body parsing middleware.
| mqtt | ![](https://img.shields.io/npm/v/mqtt.svg) | A client library for the MQTT protocol.

## Tidslinje

2020-03-24

- Skapade en hemsida med en styrspak.
- Lade till en funktion som skickar data via MQTT varje gång styrspaken ändras.
- Skapada en kod i Arduino för att styra motorn.
