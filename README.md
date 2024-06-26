
Overview : The instagram mobilelayout with dynamic updating clock which changes realtime and has videos in the stories.

Data:
statusCarousel: An array of objects representing status items, each containing an img URL and a name.
Avatar Component:
Represents individual avatars.
Handles click events to trigger status viewing.
Carousel Component:
Implements a scrollable carousel of avatars.
Uses mouse events to enable drag-to-scroll functionality.
Usage:
Displays a horizontal carousel of user statuses.
Stories Component (Stories.js):

Data:
stories: An array of story objects with URLs (images or videos) and additional metadata.
SeeMore Component:
A placeholder for a "see more" action.
ReactInstaStories:
A third-party library for displaying Instagram-like stories.
Configured with properties such as defaultInterval, onAllStoriesEnd, width, and height.
IphoneLayout Component (IphoneLayout.js):

State Management:
time: Tracks the current time for display in the status bar.
isStatusClicked: Tracks whether a status has been clicked to toggle between the status carousel and stories view.
Status Bar:
Displays the current time, signal strength, WiFi, and battery icons.
Updates the time every second.
Logo:
Displays the Instagram logo.
Status Avatars Section:
Conditionally renders the Status component or Stories component based on isStatusClicked state.
Detailed Functionality:
Status Carousel:

Users can see a list of status avatars.
Clicking an avatar sets isStatusClicked to true, transitioning to the story view.
Stories View:

Uses the ReactInstaStories component to display a sequence of stories.
Stories can be images or videos, with customizable intervals and additional "see more" functionality.
Automatically returns to the status carousel view when all stories are viewed.
Custom Status Bar:

Displays the current time in a 12-hour format with AM/PM notation.
Includes icons for signal strength, WiFi connectivity, and battery level.
Additional Notes:
The useEffect hook in IphoneLayout updates the time every second, ensuring the status bar displays the current time.
The drag-to-scroll functionality in the Carousel component is implemented using event listeners for mouse events, providing an interactive user experience.
The structure is modular, allowing easy updates and extensions to individual components without affecting the overall layout.