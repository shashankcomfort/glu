import React, {Component} from "react";
import {View, Text, Image, Dimensions} from "react-native";
import styles from "./header-Slider-styles";
import Carousel, {Pagination} from "react-native-snap-carousel";
const horizontalMargin = 50;
const slideWidth = 280;
const sliderWidth = Dimensions.get("window").width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

class MenuSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      data: [
        {
          id: 1,
          name: "Brown Brim",
          imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
          Time: "ADE/25",
          descripation: "An introduce to trigonometry Maths",
        },
        {
          id: 2,
          name: "Blue Beanie",
          imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
          Time: "ADE/25",
          descripation: "An introduce to trigonometry Maths",
        },
        {
          id: 3,
          name: "Brown Cowboy",
          imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
          Time: "ADE/25",
          descripation: "An introduce to trigonometry Maths",
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View>
        <Image
          source={{uri: item.imageUrl}}
          style={{width: "100%", height: 350}}
        />
        <View
          style={{
            position: "absolute",
            top: 100,
            left: 30,
          }}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.timeText}>{item.Time}</Text>
          <Text style={styles.descripationsText}>{item.descripation}</Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          autoplay={true}
          loop={true}
          autoplayInterval={8000}
          data={this.state.data}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={(index) => this.setState({activeSlide: index})}
        />
        <Pagination
          dotsLength={this.state.data.length}
          activeDotIndex={this.state.activeSlide}
          containerStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            paddingTop: 0,
            paddingBottom: 0,
            bottom: 15,
            left: 0,
            right: 0,
          }}
          dotStyle={{
            width: 50,
            height: 1.5,
            marginHorizontal: 8,
            backgroundColor: "rgba(255, 255, 255, 0.92)",
          }}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
}

export default MenuSlider;
