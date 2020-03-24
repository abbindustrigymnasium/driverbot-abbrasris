# driverbot-abbrasris

En bil som går att styra med hjälp av en hemsida.

## Teknologier

### Hemsida

Hemsidan är skriven i Node.JS där back-end är gjord i Node.JS och front-end i HTML, CSS och JavaScript.

#### Back-end

| Namn | Version | Beskrivning |
|---|---|---|
| [dotenv](https://www.npmjs.com/package/dotenv) | ![](https://img.shields.io/npm/v/dotenv.svg) | Loads environment variables from a .env file into process.env.
| [express](https://www.npmjs.com/package/express) | ![](https://img.shields.io/npm/v/express.svg) | Fast, unopinionated, minimalist web framework for node.
| [body-parser](https://www.npmjs.com/package/body-parser) | ![](https://img.shields.io/npm/v/body-parser.svg) | Body parsing middleware.
| [mqtt](https://www.npmjs.com/package/mqtt) | ![](https://img.shields.io/npm/v/mqtt.svg) | A client library for the MQTT protocol.

#### Front-end

| Namn | Version | Beskrivning |
|---|---|---|
| [nippletjs](https://github.com/yoannmoinet/nipplejs) | ![](https://img.shields.io/npm/v/nipplejs.svg) | A virtual joystick for touch capable interfaces.


## Tidslinje

2020-03-24

- Skapade en hemsida med en styrspak.
- Lade till en funktion som skickar data via MQTT varje gång styrspaken ändras.
- Skapada en kod i Arduino för att styra motorn.
