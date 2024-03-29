# Grid Circles

## Instructions
- Toggle back and forth between the 'Free spirit', 'Achiever' and 'Caregiver' categories by clicking on the buttons at the top of the page
- The 9 circles will change css clases based on the category changes

## Data Model
- the data model is a json file that holds all of the css class names for each grid position of each circle under each category
- this was generated by just looking through the screenshots and assigning css class names to represent all of the different states the inner circles can be in
- this json file can easily be replaced with another "mapping" of the inner circle states and the application will continue to work with the new mapping 

## Components

### Circle
- functional component that allows each circle to be generated utilizing the same re-usable component
- takes input parameters such as the grid position (represents the position of the circle in CSS grid) as well as the label of how the text should be presented
- this component also takes the 'current category' as a parameter in addition to the data model mapping which allows each individual circle to adjust following the pre-determined mapping of inner-circles based on the category('Free spirit', 'Achiever', 'Caregiver) and the grid position of the circle ('Achievement', 'Conservation', 'Caring' etc...)

### Category Button
- functional component that allows each category button at the top of the page to be generated using the same re-usable component
- features a click-handler that adjusts the global 'current 'category' state when the button is clicked


# Running the App Locally
### `npm install`
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Testing The App
### `npm test a`



