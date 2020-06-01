const adjust = (value, fromLow, fromHigh, toLow, toHigh) => {
  if (value <= fromLow) return toLow;
  if (value >= fromHigh) return toHigh;

  return Math.round(
    toLow + ((toHigh - fromLow) * (value - fromLow)) / (fromHigh - fromLow)
  );
};

const sendData = (data) => {
  fetch("/send-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const joystickSpeed = nipplejs.create({
  color: "blue",
  zone: document.getElementById("joystick-speed"),
  position: { left: "30%", top: "50%" },
  mode: "static",
  lockY: true,
});

const joystickDirection = nipplejs.create({
  color: "blue",
  zone: document.getElementById("joystick-direction"),
  position: { right: "30%", top: "50%" },
  mode: "static",
  lockX: true,
});

let lastSpeed;

joystickSpeed.on("move", (e, data) => {
  let direction = data.direction ? data.direction.y : "middle";
  let speed;

  if (direction === "up") {
    speed = 1;
  } else if (direction === "down") {
    speed = -1;
  } else {
    speed = 0;
  }

  // Check if speed hasn't changed since last time
  if (speed === lastSpeed) {
    lastSpeed = speed;
    return;
  }

  lastSpeed = speed;

  sendData(["speed", speed]);
});

joystickSpeed.on("end", () => {
  sendData(["speed", 0]);
});

let lastForce;

joystickDirection.on("move", (e, data) => {
  let direction = data.direction ? data.direction.x : "middle";
  let force;

  if (direction === "right") {
    force = data.force;
  } else if (direction === "left") {
    force = -data.force;
  } else {
    force = 0;
  }

  force = adjust(force * 10, -15, 15, -100, 100);

  // Chek if force is different from last time
  if (force === lastForce) {
    lastForce = force;
    return;
  }

  lastForce = force;

  sendData(["direction", force]);
});
