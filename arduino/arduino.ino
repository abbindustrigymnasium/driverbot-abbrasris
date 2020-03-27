#include ".\conf.h"
#include "EspMQTTClient.h"

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
