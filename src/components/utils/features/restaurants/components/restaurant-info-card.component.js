import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://br24.com/wp-content/uploads/Br24_Blog_FoodPhotography_OverheadAngle.jpg",
    ],
    address = "100 Hamburger allee ",
    openinghours = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "#8A65E3" },
  cover: { padding: 20, backgroundColor: "#8A65E3" },
  title: { padding: 16 },
});
