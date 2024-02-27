let count = 0;
const counter = (count) => {
  setTimeout(() => {
    count = count + 1;
    console.log(count);
    counter(count);
  }, 1000);
};

counter(count);
