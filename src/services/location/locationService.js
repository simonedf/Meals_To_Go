import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("location Not Found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {};
