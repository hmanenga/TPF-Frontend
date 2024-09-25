Here’s the updated `README.md` file with your specified additions:

---

# Comprehensive To-Do List App

This project is a React Native To-Do List application that allows users to create, edit, delete, and manage tasks. The app supports user authentication, offline functionality, data synchronization, responsive design, and other advanced features such as animations, gestures, and API integration.

## Features

- **User Authentication**: Login and registration with email and password validation.
- **Task Management**: Add, edit, delete tasks with support for titles, descriptions, due dates, and priority levels.
- **Offline Support**: Save tasks locally and sync data when back online.
- **Weather Integration**: Fetch and display weather information using a public API.
- **Form Validation**: Input validation for both registration and task management forms.
- **Responsive Design**: Works well on different device sizes and orientations.
- **Animations and Gestures**: Interactive task management with animations and swipe gestures.
- **Error Handling**: Network errors are handled with user feedback and error messages.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher) and **npm**
- **React Native CLI**
- **Android Studio** or **Vs code** for emulating devices or testing on real devices. However, the app was not tested on iOS devices.

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone  https://github.com/your-username/TPF-Frontend/
cd TPF-Frontend
```

### Step 2: Install Dependencies

Run the following command to install all the necessary dependencies:

```bash
# Using npm
npm install
```

### Step 3: Configure JWT AUTH Server

Run the following command to configure the local JWT server for authentication ,A local JWT server is used for authentication with tokens.

```bash
cd jwt-server
npm install
nodemon --watch

```

### Step 4: Configure json-server which acts as a Mock API Server

Run the following commands to configure the json-server for task synchronization.When you add, update, or delete tasks using your React Native app, the changes should be reflected in the db.json in the root of the application

```bash	
 json-server --watch db.json --port 3001

```	

### Step 6: Running the App

For **Android**:

```bash
npm run start or npm run android

```

Ensure that you have the necessary emulators or physical devices running.

## Features Breakdown

### 1. User Authentication

- Users can register and log in using email and password.
- React Stack Navigation is used for routing between the login/registration screens and the main app.
- Authentication status is persisted using React Native Keychain for security purposes and React Context for Auth state management.

### 2. Task Management

- Users can create, update, and delete tasks. Each task has a title, description, due date, and priority.
- Redux Toolkit is used to manage task states and save tasks to a local Realm database, ensuring that all updates are reflected properly.

### 3. Offline Support

- Tasks are stored locally using Realm and a mock JSON server as a backend API.
- NetInfo is used to manage internet connectivity and sync tasks when it is suitable.
- The app is fully functional offline and synchronizes with the backend once a connection is re-established.

### 4. API Integration

- The home screen fetches and displays weather information based on the user's location (latitude and longitude) using the **OpenWeatherMap API**.
- Weather data is updated in real-time, and users can see the current weather conditions and 7-day forecast.

### 5. Form Validation

- Registration and task creation/editing forms are validated for proper input.
- Forms include checks for valid email format, required fields, and password strength.

### 6. Responsive Design

- The app is responsive and works seamlessly across different screen sizes and orientations.
- Flexbox and StyleSheet are used to create a responsive layout.

### 7. Animations and Gestures

- Swipe gestures are implemented for deleting tasks from the list.
- Animations enhance the user experience when creating, deleting, or updating tasks using the **Reanimated** library.

### 8. Error Handling

- The app gracefully handles network errors, providing appropriate feedback messages to the user.
- Error states such as failed logins, task synchronization errors, and more are handled with user notifications.

## Tech Stack

- **React Native**: Core framework for building the app.
- **Redux**: For managing global state and tasks.
- **Axios**: For making HTTP requests to the backend and weather APIs.
- **Realm**: For offline storage and persistence.
- **React Stack Navigation**: For navigation between different screens.
- **OpenWeatherMap API**: To fetch and display weather information.
- **Reanimated**: For handling animations and gestures.

## Package.json Overview

```json
{
  "name": "comprehensive-todo-list-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.73.0",
    "axios": "^1.4.0",
    "react-redux": "^8.0.5",
    "redux": "^4.2.1",
    "redux-thunk": "^2.4.2",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/stack": "^6.3.16",
    "react-native-reanimated": "^3.2.0",
    "@react-native-async-storage/async-storage": "^1.18.2",
    "realm": "^11.0.0", 
    "react-native-gesture-handler": "^2.9.0",
    "react-native-safe-area-context": "^4.7.1",
    "react-native-screens": "^3.21.1",
    "react-native-vector-icons": "^9.2.0",
    "react-native-keychain": "^8.1.0", 
    "openweathermap-api-client": "^1.0.1" 
  },
  "devDependencies": {
    "@babel/core": "^7.21.0",
    "@babel/runtime": "^7.21.0",
    "babel-jest": "^29.5.0",
    "jest": "^29.5.0",
    "react-test-renderer": "18.2.0",
    "@testing-library/react-native": "^13.1.0",
    "redux-mock-store": "^1.5.4",
    "eslint": "^8.35.0",
    "eslint-plugin-react": "^7.32.2",
    "react-native-testing-library": "^8.0.0"
  },
  "jest": {
    "preset": "react-native",
    "setupFiles": ["./jest/setup.js"]
  },
  "private": true
}
```

## Additional Notes

- For **offline storage**, I have choosen json-server as the Mock API Backend and   **Realm** as a local database.
for weather data I have integrated the application with the OpenWeatherMap API key with actual values in the `.env` file.

- **Testing**:Unit tests were not included in the application scope; however, they would be important if time and scope allowed. I would utilize Jest and React Native Testing Library for this purpose.

-**Pus Notiications and Calendar**: It would be desirable for the application to be able to send alerts by integrating with Google Calendar to send notifications or even push notifications.

--**Team tasks**:In a broader perspective, the application could serve for team task management, handling interdependent tasks and potential conflicts.

## License

This project is licensed under the TPF License.

---