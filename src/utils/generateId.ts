function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

const generateId = () => {
  const id = getRandomInt(1000000);
  return id;
}

export default generateId;