import React, {useState, useEffect} from "react";
import {Dimensions, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

// Bottom Navigation
import mainTabScreen from "./screens/mainTabScreen";

import {
  ChangePasswordSuccess,
  ForgetPassword,
  Login,
  RegisterStep1,
  RegisterStep2,
  RegistrationSuccess,
  ResetPassword,
} from "./screens/auth/index";
import {
  AboutYou,
  AddChild,
  AddEducation,
  AddExperience,
  ChildList,
  EditChild,
  EditEducation,
  EditExperience,
  EducationList,
  ExperienceList,
  SendOtp,
  Skill,
  UploadDocument,
  VerifyOtp,
} from "./screens/buildProfile/index";

// student screen
import {homeDetailScreen} from "./screens/student/homeDetailScreen";
import filterScreens from "./screens/student/filterScreens";
// Bottom Navigation
import {NotificationScreen} from "./screens/notification";
// import {PreviousClasses} from "./screens/previousClasses";
import filterDetailScreens from "./screens/student/filterScreenDetails";
// student screen
import tutorDetailScreens from "./screens/student/tutorScreenDetails";
import watchRecordClass from "./screens/student/watchRecordClass";
import userOnline from "./screens/student/userOnline";
import Chat from "./screens/student/chat";
import {StudentReport} from "./screens/studentReport";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"login"} headerMode="none">
        <Stack.Screen
          name="rootHome"
          component={mainTabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="forgetPassword" component={ForgetPassword} />
        <Stack.Screen name="resetPassword" component={ResetPassword} />
        <Stack.Screen
          name="changePasswordSuccess"
          component={ChangePasswordSuccess}
        />
        <Stack.Screen name="registerStep1" component={RegisterStep1} />
        <Stack.Screen name="registerStep2" component={RegisterStep2} />
        <Stack.Screen name="addEducation" component={AddEducation} />
        <Stack.Screen name="educationList" component={EducationList} />
        <Stack.Screen name="editEducation" component={EditEducation} />
        <Stack.Screen name="sendOtp" component={SendOtp} />
        <Stack.Screen name="verifyOtp" component={VerifyOtp} />
        <Stack.Screen
          name="registrationSuccess"
          component={RegistrationSuccess}
        />
        <Stack.Screen name="filterScreen" component={filterScreens} />
        <Stack.Screen name="homeDetailScreen" component={homeDetailScreen} />
        <Stack.Screen
          name="filterDetailScreens"
          component={filterDetailScreens}
        />
        <Stack.Screen
          name="tutorDetailScreens"
          component={tutorDetailScreens}
        />
        <Stack.Screen name="userOnline" component={userOnline} />
        <Stack.Screen name="Chat" component={Chat} />

        <Stack.Screen name="watchRecordClass" component={watchRecordClass} />
        <Stack.Screen name="addChild" component={AddChild} />
        <Stack.Screen name="childList" component={ChildList} />
        <Stack.Screen name="editChild" component={EditChild} />
        <Stack.Screen name="aboutYou" component={AboutYou} />
        <Stack.Screen name="addExperience" component={AddExperience} />
        <Stack.Screen name="experienceList" component={ExperienceList} />
        <Stack.Screen name="editExperience" component={EditExperience} />
        <Stack.Screen name="skill" component={Skill} />
        <Stack.Screen name="uploadDocument" component={UploadDocument} />

        <Stack.Screen name="notification" component={NotificationScreen} />
        <Stack.Screen name="studentReport" component={StudentReport} />

        {/* <Stack.Screen
          name="previousClasses"
          component={PreviousClasses}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
