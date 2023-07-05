export const getRandomNumber = () => {
  let ramdomString = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  for (var i = 0; i < 2; i++) {
    ramdomString += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  const randomNumber = Math.floor(Math.random() * 100000);
  return `${ramdomString}${randomNumber}`;
};
