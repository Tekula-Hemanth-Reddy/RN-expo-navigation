# RN-expo-navigation
React Native Project with Expo Routing Set Up

Process:

1. Create Expo App
    Command: npx create-expo-app RN-expo-navigation --template (select TypeScript one)
2. Install the dependencies, 
    Command: npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
3. add "scheme": "app-name" // unique recognition name for url,
4. Setup entry point of the APP in package.json from 'index.ts' to 'expo-router/entry'. so that entry point will become 'app/_layout.js.'
    "main": "index.ts" -> "main": "expo-router/entry"
    (you can do step 3 in this way as well rename index.ts to index.js and change main to 'index.js' and add this import 'import "expo-router/entry";')
5. Create a folder named 'app'
6. Create _layout.tsx initially in any folder expo router looks for _layout.tsx if not found it will go to index.tsx
7. Create index.tsx
8. add a new file babel.config.js and add this code 
        module.exports = function (api) {
            api.cache(true);
            return {
                presets: ['babel-preset-expo'],
            };
        };
9. Move app.json to app.config.ts and create one more file app.config.js and import and export app.config.ts in app.config.js
10. To use External font you need to download those fonts
    go to 'https://fonts.google.com/' and download fonts which are suitable
11. Load those fonts in _layout.tsx for loading use 'useFonts' from 'expo-font'
12. Add Error boundary (error-boundary.tsx) to catch errors in code
13. Add any Context or interceptor or any other things in _layout.tsx
14. Add config module which consist of colors, constants, styles, css-constants, strings, metrics
15. Add 'react-native-device-detection' for what kind of device we are using ios, android, tablet, ipad
16. Add helper functions
17. Install 'moment' for dates
18. Add place-holder files and assests and AppHeader
19. Adding Redux 'npm install redux react-redux redux-thunk --save'
20. Create Redux Folder and Set Action Types, Actions, Reducer and Store
