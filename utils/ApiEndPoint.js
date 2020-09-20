/*
|-----------------------------------------------------------------------------------------|
|                     Changes history table                                               |
|-----------------------------------------------------------------------------------------|
|   Date         |      Changes By       |   Changes Description                          |
|-----------------------------------------------------------------------------------------|
|   06-SEP-2020  |      Raushan Ranjan   |  Newly created file.                           |
|-----------------------------------------------------------------------------------------|
*/

export const USER_LOGIN = "/api/v1/auth/login";
export const USER_REGISTER = "/api/v1/auth/register";
export const FORGET_PASSWORD = "/api/v1/auth/forget/password";
export const RESET_PASSWORD = "/api/v1/auth/reset/password";
export const STUDENT_QUALIFICATION = "/api/v1/student/qualification";
export const ADD_PHONE = "/api/v1/user/phone/";
export const VERIFY_PHONE_NUMBER = "/api/v1/user/verify/phone/";
export const ABOUT_TEACHER_DETAIL = "/api/v1/auth/teacher/bio";
export const TEACHER_QUALIFICATION = "/api/v1/teacher/qualification";
export const TEACHER_EXPERIENCE = "/api/v1/teacher/experience";
export const TEACHER_SKILL = "/api/v1/teacher/skill";
export const CHILD_DETAIl = "/api/v1/guardian/children";
export const USER_PROFILE = "/api/v1/user/profile";
export const CHANGE_PASSWORD = "/api/v1/user/password";
export const UPLOAD_PROFILE = "/api/v1/file-upload/signed-url";
export const UPLOAD_PROFILE_IMAGE = "/api/v1/file-upload/uploads";
export const UPLOAD_TEACHER_DOCUMENTS = "/api/v1/file-upload/uploads/documents";

export const SEND_PUSH_NOTIFICATION = "/api/v1/school/notification";

export const GET_USER_PROFILE_DETAIL = "/api/v1/user/profile";
export const UPDATE_USER_EMAIL = "/api/v1/user/email";

//Student Dashboard
export const GET_SCHOOL_INFORMATION = "/api/v1/student/school";
export const GET_STUDENT_CLASS_ROUTINE = "/api/v1/student/routines";
export const GET_ALL_ACTIVITY_STUDENT_ENROLLED =
  "/api/v1/student/activities/enrolled";
export const GET_EXTRA_CURRICULAR_ACTIVITY_DETAIL =
  "/api/v1/student/activities";
export const GET_ALL_ACTIVITY_PROVIDED_BY_SCHOOL =
  "/api/v1/student/activities/";
export const ENROLL_TO_ACTIVITY = "/api/v1/student/activities";
export const GET_ALL_EVENTS = "/api/v1/student/events";
export const GET_EVENT_DETAIL = "/api/v1/student/events";
export const GET_STUDENT_HOMEWORK_LIST = "/api/v1/student/homeworks";
export const GET_HOMEWORK_DETAIL = "/api/v1/student/homeworks";
export const UPDATE_HOMEWORK_STATUS = "/api/v1/student/homeworks";

//Student Home
export const GET_ALL_SUBJECT_LIST = "/api/v1/freelancer/student/subject";
export const GET_INDIVIDUAL_TUTOR_PROFILE =
  "/api/v1/freelancer/student/profile";
export const GET_ALL_FREELANCER_TUTOR = "/api/v1/student/freelancher/teacher";
export const GET_ALL_FREELANCER_TUTOR_BY_SUBJECT =
  "/api/v1/student/freelancher/teacher/subject";
export const GET_ALL_FAVORITE_TUTOR = "/api/v1/teachers/favourite";
export const SET_TUTOR_AS_FAVORITE = "/api/v1/teachers";
export const GET_TOP_RATED_TUTOR = "/api/v1/review/featured/teachers";
export const GET_TOP_RATED_TUTOR_BY_SUBJECT =
  "/api/v1/review/topRated/teachers";
export const GET_FEATURED_TUTOR = "/api/v1/teachers/freelancer";
export const GET_PRE_RECORDED_SESSION =
  "/api/v1/freelancer/student/session/previous";
export const GET_PRE_RECORDED_SESSION_BY_SUBJECT =
  "/api/v1/freelancer/student/previousSession";
export const GET_ALL_SESSIONS = "/api/v1/freelancer/student/session";
export const GET_INDIVIDUAL_SESSION_DETAIL =
  "/api/v1/freelancer/student/session";
export const GET_FEATURED_TUTOR_BY_SUBJECT = "/api/v1/teachers/freelancer";
export const GET_UPCOMING_SESSION_BY_SUBJECT =
  "/api/v1/freelancer/student/upcomingSession";
export const GET_INDIVIDUAL_TUTOR_PREVIOUS_SESSION =
  "/api/v1/freelancer/student/session/previous";
export const GET_INDIVIDUAL_TUTOR_UPCOMING_SESSION =
  "/api/v1/freelancer/student/session/upcoming";
export const SET_SESSION_AS_FAVORITE = "/api/v1/freelancer/student/favourite";
export const GET_FAVORITE_PREVIOUS_SESSION =
  "/api/v1/freelancer/student/favourite/previous";
export const GET_FAVORITE_UPCOMING_SESSION =
  "/api/v1/freelancer/student/favourite/upcoming";
export const SEARCH_SUBJECT = "/api/v1/freelancer/student/search/subject";
export const SEARCH_PREVIOUS_SESSION =
  "/api/v1/freelancer/student/search/session/subject";
export const SEARCH_TOP_RATED_TUTOR =
  "/api/v1/freelancer/student/search/teacher/subject";

//Teacher
export const GET_TEACHER_TIME_TABLE = "/api/v1/teacher/routines";
export const GET_TEACHER_PROFILE = "/api/v1/schools/teachers";
export const UPDATE_TEACHER_PERSONAL_DETAIL = "/api/v1/user/profile";
export const UPDATE_TEACHER_EMAIL = "/api/v1/user/email";
export const TEACHER_REVIEW = "/api/v1/review/teachers";
export const CHALLENGE_REVIEW = "/api/v1/freelancer/teacher/challenge";
export const GET_CLASS_LIST = "/api/v1/schools/classes";
export const GET_SECTION_BASED_ON_CLASS = "/api/v1/schools/sections";
export const CREATE_SESSION_BY_SCHOOL_ONBOARDED_TEACHER =
  "/api/v1/session/create";
export const CREATE_SESSION_BY_FREELANCER_TEACHER =
  "/api/v1/freelancer/teacher/session";
export const GET_TEACHER_AVAILABILITY = "/api/v1/freelancer/student/teacher";
export const UPDATE_TEACHER_AVAILABILITY = "/api/v1/session/availability";
export const DELETE_TEACHER_AVAILABILITY = "/api/v1/session/availability";
export const SET_TEACHER_AVAILABILITY =
  "/api/v1/freelancer/teacher/availability";
export const GET_UPCOMING_SESSION_BY_TEACHER =
  "/api/v1/freelancer/student/session/upcoming";
export const GET_PREVIOUS_SESSION_BY_TEACHER =
  "/api/v1/freelancer/teacher/session/previous";

//Parent
export const SET_SESSION_AS_FAVORITE_FOR_PARENT =
  "/api/v1/freelancer/guardian/session/favourite";
export const GET_FAVORITE_PREVIOUS_SESSION_OF_PARENT =
  "/api/v1/freelancer/guardian/session/favourite/previous";
export const GET_FAVORITE_UPCOMING_SESSION_OF_PARENT =
  "/api/v1/freelancer/guardian/session/favourite/upcoming";
