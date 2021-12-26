import { mocks } from "./mock/index";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155ppp") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not Found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = ({ results = [] }) => {
  const newResult = camelize(results.length);
  return newResult;
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log("error");
  });
