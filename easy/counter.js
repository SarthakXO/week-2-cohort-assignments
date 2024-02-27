const counter = () => {
  seconds = 1000;
  time = 0;
  setInterval(() => {
    time = time + 1;
    console.log(time);
  }, seconds);
};

counter();
