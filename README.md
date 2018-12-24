Project Overview

This app was created in response to a code challenge described here:

You're going to be building a Ruby Gems search feature. Hit the search API and have the relevant gems show with the description of them, and links to their listed dependencies within this interface. Your app should be able to keep track of “favorites”, which are Gems the user has starred.

There are a few other notes and requirements:

You should be able to add a search result to favorites in your UI. There should be some way to review and remove favorites. localStorage is fine for storage

Overview

App Description

This app is designed to fetch ruby gems from the rubygem api depending on what is inputed in the search bar. The application is built with an emphasis for a user to enjoy and navigate smoothly.

The app run on React, Redux and firebase cloud firestore which manages the data structure.

Features / selling point

· The application can be used without signing up or logging in. Once logged in, the user can save specific ruby gem to their favorite page where they can navigate to, in order to manage their favorite page by either going back to that specific ruby gem or remove it from their favorites page.

· The UI makes use of CSS, materialize-ui framework and media queries to provide a design that is visually pleasing on mobile or desktop devices.

· The UI can easily be maintained since the flows of information are managed between props and our redux store.

· Redux was used in this project for its ability to not only organizes data but also for his single source of truth to manage our data.

. The application help you in finding specifics ruby gem but also let you add it as a favorite in order to come back to it by going to your favorite page.

· The application allows you to not only check for specifics ruby gems but also to find out more about their dependencies for more info about what was used to build the gem.

. The app also make use of react router for a smooth transition between pages and also allows us to make use of router specific property such as match params and push to redirect to specific pages.

Area for improvement

Testing: I am not comfortable enough with testing React component. Therefore, the app building part came first with some testing after.
