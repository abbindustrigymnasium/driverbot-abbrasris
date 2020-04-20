#include ".\conf.h"
#include "EspMQTTClient.h"
#include <ArduinoJson.h>

#define MOTOR_DIRECTION_PIN 0
#define MOTOR_SPEED_PIN 5

EspMQTTClient client(
    WIFI_SSID,
    WIFI_PWD,
    "maqiatto.com",
    MQTT_USERNAME,
    MQTT_PWD,
    "arduino",
    1883
);

int motorSpeed = 0;
int motorDirection = 0;

void onConnectionEstablished()
{
  client.subscribe(MQTT_TOPIC, [] (const String &payload)  {
    // Serial.println(payload);

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

    motorSpeed = doc["speed"];

    if (motorSpeed > 0) {
      analogWrite(MOTOR_SPEED_PIN, 1023);
    } else {
      analogWrite(MOTOR_SPEED_PIN, 0);
    }

    Serial.println(motorSpeed);
    // Serial.println()
  });
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  pinMode(MOTOR_DIRECTION_PIN, OUTPUT);
  pinMode(MOTOR_SPEED_PIN, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  client.loop();

  /*
  delay(500);
  digitalWrite(MOTOR_DIRECTION_PIN, 0);
  analogWrite(MOTOR_SPEED_PIN, 0);

  delay(500);
  analogWrite(MOTOR_SPEED_PIN, 1024);
  */
}
