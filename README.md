# driverbot-abbrasris

En bil som går att styra med hjälp av en hemsida.

## Installation

### Hemsida

Skapa en fil `.env` i mappen `website` och fyll i uppgifter till MQTT.

```
MQTT_HOST = ""
MQTT_USERNAME = ""
MQTT_PASSWORD = ""
MQTT_TOPIC = ""
```

Installera de bibliotek som används.

```
npm i
```

Starta servern.

```
node app.js
```

### Arduino

Skapa en fil `conf.h` i mappen `arduino` och fyll i uppgifter till WiFi och MQTT.

```
#define WIFI_SSID ""
#define WIFI_PWD ""

#define MQTT_USERNAME ""
#define MQTT_PWD ""
#define MQTT_TOPIC ""
```

Ladda upp till mikrokontrollern.

## Teknologier

### Hemsida

Hemsidan består av en back-end och en front-end där back-end är gjord i Node.JS och front-end i HTML, CSS och JavaScript.

#### Back-end

| Namn                                                     | Version                                           | Beskrivning                                                    |
| -------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------- |
| [dotenv](https://www.npmjs.com/package/dotenv)           | ![](https://img.shields.io/npm/v/dotenv.svg)      | Loads environment variables from a .env file into process.env. |
| [express](https://www.npmjs.com/package/express)         | ![](https://img.shields.io/npm/v/express.svg)     | Fast, unopinionated, minimalist web framework for node.        |
| [body-parser](https://www.npmjs.com/package/body-parser) | ![](https://img.shields.io/npm/v/body-parser.svg) | Body parsing middleware.                                       |
| [mqtt](https://www.npmjs.com/package/mqtt)               | ![](https://img.shields.io/npm/v/mqtt.svg)        | A client library for the MQTT protocol.                        |

#### Front-end

| Namn                                                | Version                                        | Beskrivning                                      |
| --------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ |
| [nipplejs](https://github.com/yoannmoinet/nipplejs) | ![](https://img.shields.io/npm/v/nipplejs.svg) | A virtual joystick for touch capable interfaces. |

### Bil

Bilen består av en NodeMCU där koden är skriven i Arduino.

| Namn                                                | Version                                        | Beskrivning                                      |
| --------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ |
| [EspMQTTClient](https://github.com/plapointe6/EspMQTTClient) | ![](https://www.ardu-badge.com/badge/EspMQTTClient.svg) | Wifi and MQTT handling for ESP8266 and ESP32. |
| [ArduinoJson](https://github.com/bblanchon/ArduinoJson) | ![](https://www.ardu-badge.com/badge/ArduinoJson.svg) | A C++ JSON library for Arduino and IoT (Internet Of Things). |

## Tidslinje

2020-03-24

- Skapade en hemsida med en styrspak.
- Lade till en funktion som skickar data via MQTT varje gång styrspaken ändras.
- Skapada en kod i Arduino för att styra motorn.

2020-03-27

- Lade till en funktion som tar emot MQTT-värdena på mikrokontrollen.


2020-03-31

- Ändrade vilka värden som skickas till mikrokontrollen.
- Lade till information om installation.
