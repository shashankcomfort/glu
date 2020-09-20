import React from "react";
import {FlatList, Image, Text, View, TouchableHighlight} from "react-native";
import {G, Line, Svg} from "react-native-svg";
import {BarChart, LineChart} from "react-native-svg-charts";
import {ColorConstant, Images} from "../../constants";
import {heightToDp as hp, widthToDp as wp} from "../../utils/ResponsiveUI";
import styles from "./StudentReportStyle";

const CustomGrid = ({x, y}) => {
  return (
    <G>
      {[0, 50, 40, 75, 50, 60].map((_, index) => {
        if (index === [0, 50, 40, 75, 50, 60].length - 1) {
          return null;
        }
        return (
          <Line
            key={index}
            y1={"0%"}
            y2={"100%"}
            x1={x(index)}
            x2={x(index)}
            stroke={ColorConstant.GREY2}
          />
        );
      })}
    </G>
  );
};

export const RenderTheReportData = (props) => {
  let {data, resultData, updateLayout, recommendedTagList} = props;
  return (
    <>
      <View style={styles.topViewContainer}>
        <View style={styles.chartHeader}>
          <Text style={styles.bigText}>{"Overall Average"}</Text>
          <Text style={styles.bigText}>{"Mar-Aug"}</Text>
        </View>
        <LineChart data={data} style={styles.lineChart}>
          <Svg belowChart={true}>
            <Line
              x1="0"
              y1={(hp(65) * hp(204)) / hp(100)}
              x2={wp(316)}
              y2={(hp(65) * hp(204)) / hp(100)}
              stroke={ColorConstant.GREY2}
              strokeWidth="1"
              strokeDasharray={(wp(8), wp(8))}
            />
            <Line
              x1="0"
              y1={(hp(50) * hp(204)) / hp(100)}
              x2={wp(316)}
              y2={(hp(50) * hp(204)) / hp(100)}
              stroke={ColorConstant.GREY2}
              strokeWidth="1"
              strokeDasharray={(wp(8), wp(8))}
            />
          </Svg>
          <CustomGrid belowChart={true} />
        </LineChart>
        <View style={styles.chartSummaryContainer}>
          <View style={styles.flexOne}>
            <View style={styles.chartDesc} />
            <View style={styles.flexDirectionRow}>
              <Text style={styles.chartPercentage}>56%</Text>
              <Text style={styles.extraPercentage}> +3%</Text>
            </View>
            <Text style={styles.blackSmallFont}>Your average</Text>
          </View>
          <View style={styles.flexOne}>
            <View style={[styles.chartDesc, styles.studentAverage]} />
            <View style={styles.flexDirectionRow}>
              <Text style={styles.chartPercentage}>45%</Text>
              <Text style={styles.extraPercentage}> -9%</Text>
            </View>
            <Text style={styles.blackSmallFont}>Student average</Text>
          </View>
        </View>
      </View>

      <View style={styles.examResultsContainer}>
        <Text style={styles.dashboardText}>Exam Results</Text>
        {resultData.map((mResult, mResultIndex) => (
          <View key={mResult.month + mResultIndex} style={{marginTop: hp(74)}}>
            <Text style={[styles.chartPercentage, {marginBottom: hp(45)}]}>
              {mResult.month}
            </Text>
            {mResult.data.map((subResult, subResultIndex) => (
              <ExpandableItemComponent
                key={subResult.subjectName + mResultIndex + mResultIndex}
                onClickFunction={() =>
                  updateLayout(mResultIndex, subResultIndex)
                }
                item={subResult}
              />
            ))}
          </View>
        ))}
        <Text style={styles.seeAllText}>See all</Text>

        <View style={styles.recommenedTagsContainer}>
          <View style={[styles.timeLineStyle]} />
          <View style={{paddingLeft: wp(21)}}>
            <Text style={styles.blackSmallFont}>Recommended Tags</Text>

            <View style={styles.recommendedTagContainer}>
              {recommendedTagList.map((tagDet) => (
                <TouchableHighlight style={styles.recommended} key={tagDet.tag}>
                  <Text style={styles.recommendedTagText}>{tagDet.tag}</Text>
                </TouchableHighlight>
              ))}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.recommendedTutorContainer}>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.chartPercentage}>Recommended Tutors</Text>
          <Text style={styles.seeAllReccomText}>See all</Text>
        </View>
      </View>
      <FlatList
        data={[1, 2, 45, 643]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(det) => <RecommendedTutor {...det} />}
        // extraData={childList}
      />
    </>
  );
};

export const ExpandableItemComponent = (props) => {
  let expandableStyle = {
    height: props.item.isExpanded ? null : 0,
    overflow: "hidden",
  };
  const data = [
    {
      value: 75,
      svg: {
        fill: ColorConstant.SKY_BLUE,
      },
    },
    {
      value: 20,
      svg: {},
    },
    {
      value: 40,
      svg: {},
    },
    {
      value: 60,
      svg: {},
    },
    {
      value: 92,
      svg: {
        fill: ColorConstant.SKY_BLUE,
        opacity: 0.25,
      },
    },
    {
      value: 80,
      svg: {},
    },
    {
      value: 100,
      svg: {},
    },
  ];

  return (
    <>
      <View
        style={{
          borderWidth: hp(0.5),
          borderColor: ColorConstant.GREY2,
        }}
      />
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={() => props.onClickFunction()}
        style={[styles.expandlableHeader]}>
        <View style={styles.flexDirectionRow}>
          <View style={styles.expandlableHeaderText}>
            <Text style={[styles.chartPercentage, {width: wp(248)}]}>
              {props.item.subjectName}
            </Text>
          </View>
          <Image
            source={props.item.isExpanded ? Images.Close : Images.Plus}
            style={styles.plusIcon}
            resizeMode={"contain"}
          />
        </View>
      </TouchableHighlight>
      <View style={expandableStyle}>
        <View style={[styles.flexDirectionRow, {marginTop: hp(42)}]}>
          <View style={styles.flexOne}>
            <Text style={styles.chartPercentage}>Date</Text>
            <Text style={styles.chartPercentage}>{props.item.date}</Text>
          </View>
          <View style={styles.flexOne}>
            <Text style={styles.chartPercentage}>Tutor</Text>
            <Text style={styles.chartPercentage}>{props.item.tutor}</Text>
          </View>
        </View>
        <Text style={[styles.expandlableDesc]}>{props.item.desc}</Text>
        <BarChart
          style={styles.barChart}
          data={data}
          gridMin={0}
          yAccessor={({item}) => item.value}
          horizontal
          spacingOuter={0.7}
          spacingInner={0.02}>
          <Svg belowChart={true}>
            {data.map((item) => {
              let lineProps = {
                x1: (wp(item.value) * wp(352)) / wp(100),
                y1: hp(150),
                x2: (wp(item.value) * wp(352)) / wp(100),
                stroke: ColorConstant.GREY2,
                strokeWidth: 1,
              };
              if ([20, 40, 60, 80, 100].indexOf(item.value) < 0) {
                lineProps = {
                  ...lineProps,
                  strokeDasharray: wp(8) + "," + wp(8),
                };
              }
              return <Line {...lineProps} />;
            })}
          </Svg>
        </BarChart>
        <View style={styles.barChartDetContainer}>
          <View style={styles.flexOne}>
            <View style={styles.chartDesc} />
            <Text style={styles.chartPercentage}>56%</Text>
            <Text style={styles.blackSmallFont}>Your average</Text>
          </View>
          <View style={styles.flexOne}>
            <View style={[styles.chartDesc, styles.studentAverage]} />
            <Text style={styles.chartPercentage}>45%</Text>
            <Text style={styles.blackSmallFont}>Student average</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export const RecommendedTutor = (props) => {
  const {item, index} = props;
  return (
    <View
      key={"" + item + index}
      style={[
        styles.recommendedTutorList,
        index === 0 && {marginLeft: hp(31)},
      ]}>
      <Image source={Images.test} style={{width: wp(228), height: wp(165)}} />
      <Text style={[styles.blackSmallFont, {marginTop: hp(16)}]}>
        Sarah Smith
      </Text>
      <Text style={styles.blackSmallFont}>History, Maths, Art + more</Text>
      <View style={styles.ratingContainer}>
        <Image
          source={Images.Star}
          style={styles.starMark}
          resizeMode={"contain"}
        />
        <Text style={[styles.blackSmallFont, {color: ColorConstant.GREY}]}>
          4/5{"  "}AED200/h
        </Text>
      </View>
    </View>
  );
};

export const NoDataFound = (props) => {
  return (
    <>
      <View style={styles.nodataContainer}>
        <Text style={[styles.bigText, {paddingTop: hp(66)}]}>
          {"Looks like you have no data yet."}
        </Text>
      </View>
      <View style={[{marginHorizontal: wp(31)}]}>
        <View style={styles.flexOne}>
          <View
            style={[styles.chartDesc, {backgroundColor: ColorConstant.BLACK}]}
          />
          <View style={styles.flexDirectionRow}>
            <Text style={styles.chartPercentage}>0%</Text>
          </View>
          <Text style={styles.blackSmallFont}>Your average</Text>
        </View>
        <View style={styles.flexOne}>
          <View
            style={[
              styles.chartDesc,
              styles.studentAverage,
              {backgroundColor: ColorConstant.BLACK},
            ]}
          />
          <View style={styles.flexDirectionRow}>
            <Text style={styles.chartPercentage}>0%</Text>
          </View>
          <Text style={styles.blackSmallFont}>Student average</Text>
        </View>
      </View>
    </>
  );
};
