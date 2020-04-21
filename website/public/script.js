const adjust = (value, fromLow, fromHigh, toLow, toHigh) => {
  if (value <= fromLow) return toLow;
  if (value >= fromHigh) return toHigh;

  return Math.round(
    toLow + ((toHigh - fromLow) * (value - fromLow)) / (fromHigh - fromLow)
  );
};

const sendData = (data) => {
  // TODO: compare values with last values and only send if they're different

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

joystickSpeed.on("move", (e, data) => {
  let speed;

  if (data.direction.y === "up") {
    speed = 1;
  } else {
    speed = -1;
  }

  sendData({ speed: speed });
});

joystickSpeed.on("end", () => {
  sendData({ speed: 0 });
});

joystickDirection.on("move", (e, data) => {
  let direction = data.direction.x;
  let force;

  if (direction === "right") {
    force = data.force;
  } else {
    force = -data.force;
  }

  force = adjust(force * 10, -15, 15, -100, 100);
  sendData({ direction: force });
});
