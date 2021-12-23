import { mocks } from "./mock/index";

export const restaurantRequest = (
  location = "37.7749295,-122.4194155pppppppppp"
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not Found");
    }
    resolve(mock);
  });
};

restaurantRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("error");
  });
