# react-native-redux-navigator-boilerplate
simple redux+navigator boilerplate


## directories
- `app/` apps src files
    - `actions/`
        - `actionTypes.js` consts of action types
        - `counterActions.js` define action actual function
    - `reducers/` store and state structure definition
        - `index.js` index file
        - `nav.js` navigation
        - `counter.js` counter
    - `assets/` images, styles, etc  indexfile is Images.js
    - `components/` component class files(load from container)
    - `containers/` each container represents one screen
    - `libs/` librarys
    - `navigators/AppNavigator.js` navigator and screens definition
- `index.android.js` setup store and register apps. Finally invokes AppNavigator
