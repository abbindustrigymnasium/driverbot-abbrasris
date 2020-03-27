#include ".\conf.h"
#include "EspMQTTClient.h"
#include <ArduinoJson.h>

EspMQTTClient client(
    WIFI_SSID,
    WIFI_PWD,
    "maqiatto.com",
    MQTT_USERNAME,
    MQTT_PWD,
    "arduino",
    1883
);

void onConnectionEstablished()
{
  client.subscribe(MQTT_TOPIC, [] (const String &payload)  {
    Serial.println(payload);

    // Allocate the JSON document
    StaticJsonDocument<200> doc;

    // Deserialize the JSON document
    DeserializationError error = deserializeJson(doc, payload);
  
    // Test if parsing succeeds.
    if (error) {
      Serial.print(F("deserializeJson() failed: "));
      Serial.println(error.c_str());
      return;
    }

    double force = doc["force"];
  });
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  client.loop();
}
