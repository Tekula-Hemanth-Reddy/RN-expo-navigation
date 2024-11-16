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