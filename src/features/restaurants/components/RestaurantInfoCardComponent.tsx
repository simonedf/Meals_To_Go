import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import openIcon from "../../../../assets/openIcon";
import { Spacer } from "../../../components/spacer/spacerComponent";
import { Text } from "../../../components/textStyle/textComponent";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Section,
  SectionEnd,
  Icon,
  Address,
} from "./RestaurantInfoCardStyle";

// type Restaurant = { name: string };
// type PropsType = { restaurant: Restaurant };

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  //Create Array for the svg star
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArray);

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={openIcon} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
