/* eslint-disable prettier/prettier */
import camelize from "camelize";
import { mocks, mockImages } from "./mock/index";

export const restaurantsRequest = ( location = "37.7749295,-122.4194155" ) => {
  return new Promise((resolve, reject) =>{
    const mock = mocks[location];
    if (!mock){
      reject("Not found");
    }
    resolve(mock);
  });
};
export const restaurantsTransform = ({ results = [] }) =>{
  const mappedResults = results.map((restaurant) =>{
    restaurant.photos = restaurant.photos.map((p)=> {
      return mockImages[Math.ceil(Math.random() * ( mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpeningnow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });


  return camelize(mappedResults);
};
restaurantsRequest()
.then(restaurantsTransform)
.then(transformResponse =>{
  console.log(transformResponse);
})
.catch((_err) =>{
  console.log("error");
});
