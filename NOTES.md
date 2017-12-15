# EMBER.JS NOTES

## What is Ember.js

## Getting Started

### Init Project

```ember new *app-name*```

### Start Ember Server

```ember serve```

### Defining a Route

-   Routes -> The different pages that make up the application
    i.e. webpage.com/scientists = the scientists route
    -   Adds to the Ember router (/app/router.js)
-   Generators -> Automates the boilerplate code for common tasks
    -   Includes generating routes, components, adaptors, utilities, services, ...
-   You can specify a model for a route by editing its corresponding .js file

```ember generate route *route-name*```

-   export default is used so you can just call the file as a method after importing 
    -   (https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript)
    -   add a model() method with a return 

#### The Model Hook

-   *hook* - something that is called at different times during the running of an app

-   Note that here, we are using the ES6 shorthand method definition syntax: `model()` is the same as writing 

    ```model: function()```

-   `{{each}}` helps lets you loop through each item in the returned `model` object

-   ​

#### Index Route

-   handles requests to the root URI "/" of the site
-   you can pick which route is the main page

``` ember g route index ```

-   does not have to be added to the routers mapping
-   to set the main page all we do is add to the index route handler and implement a route lifecycle hook called ```beforeModel``` - runs before a page is rendered
    -   ```replaceWith()``` = will replace the current URL in the browsers history
    -   ```transitionTo()``` = will add to the history
-   ​

### Creating a UI component
-   you can refactor templates into reusable components
  ``` ember generate component *component-name*```
-   components look like html tags but instead of <> use {{}}

### Click Events
-   embers allows you to track events using an action helper on a something e.g. a component

#### Action helper
```<li {{action "*method-name*" variable}}>{{person}}</li>```
-   Uses a *click event* listener by default
-   add actions object (aka. the actions hash) to corresponding .js file

### Building for Production
``` ember build --env production```
-   --env production creates an optimized bundle for uploadig
-   resilt is stored in the /dist

## Core Concepts

![ember-core-concepts](/notes_images/ember-core-concepts.png)



### Router and Router Handlers

-   Helps answer what is the current state of *x*
-   Ember determines this via the URL
-   The ember router will map the current URL to a route handler then it either
    -   renders a template
    -   loads a model that is then available to the template

### Templates

-   Organizes the layout of the HTML in an application
-   Uses Handlebars syntax
-   Can display properties provided to them from their context, which is either a component or a route's controller

### Components

-   Represents the persistent state
-   persists information to a web server, although models can be configured to save to anywhere else, such as *LocalStorage*

### Components

-   Controls how the UI behaves
-   Consists of:
    -   a template (representation)
    -   source JavaScript file (defines components behaviour)

## JavaScript Primer

### Variable Declarations (aka. Bindings)

#### var

-   var myNumber = 42;
-   exists in entire body of the declared function
-   *hoisting* = any var declaration is  moved by JS to the top of the scope it belongs to

#### const & let

-    block-level declarations and not *hoisted*
-    if you try access them before they are declared you will get a *ReferenceError*

#### const

-   constant references = they always refer to the same thing
-   cannot change the value it refers to
-   if you try and change it you will get a *SyntaxError*
-   ==You can however change the properties of an array or object==

#### for loops

-   any variable declared in the *for* syntax belongs to the loop's block
-   if you used *var* it could leak outside of the for loop this cannot happen if you use *let*

## Tutorial

### Ember CLI

#### Directory Structure

-   app
-   config - contains the *environment.js* where you can configure your app settings
-   node_modules
-   public - contains assets such as images and fonts
-   vendor - where front-end dependencies ( such as JS and CSS) that are not managed by Bower go
    -   includes content that gets compiled with the application
-   tests - stores tests - configured with *testem.js*
-   *ember-cli-build.js* - describes how Ember CLI should build the app\

###  

### Navigating with Links

-   uses the {{link-to}} helper

```
{{#link-to '*route-name*' class="button"}}
 Contact Us
{{/link-to}}

```

#### 

## Installing Add-Ons

```
ember install *add-on-name*
```

### Ember-cli-mirage

[Mirage](http://www.ember-cli-mirage.com/) is a client HTTP stubbing library often used for Ember acceptance testing.
For the case of this tutorial, we'll use mirage as our source of data rather than a traditional backend server.
Mirage will allow us to create fake data to work with while developing our app and mimic an API.
The data and endpoints we setup here will come into play later in the tutorial, when we use Ember Data to make server requests.

-   we configure *configure.js* which is where we can define our API end points and our data
-   Mirage works by overriding the JavaScript code that makes network requests and instead returns the JSON you specify.
    -   We should note that this means you will not see any network requests in your development tools but will instead see the JSON logged in your console.
    -   Our update to `mirage/config.js` configures Mirage so that whenever Ember Data makes a GET request to `/api/rentals`, Mirage will return this JavaScript object as JSON and no network request is actually made.
    -   We also specified a `namespace` of `/api` in our mirage configuration. Without this change, navigation to `/rentals` in our application would conflict with Mirage.
-   In order for this to work, we need our application to default to making requests to the namespace of `/api`.
-   To do this, we want to generate an application adapter.

#### Adapter

-   An [Adapter](https://guides.emberjs.com/v2.17.0/models/customizing-adapters) is an object that [Ember Data](https://guides.emberjs.com/v2.17.0/models) uses to determine how we communicate with our backend.

    ```ember generate adapter application```




### Hiding and Showing an Image

-   you can use the *{{if}}* helper to show the image only under a certain condition
-   add an action that toggles the image size via the wide class given an isWide variable\

### Creating a Handlebars helper

```ember g helper *helper-name*```

-   you can call a helper function in the .hbs file using

    ``` {{helper-name parameters}} ```

### Using Ember Data

-   allows you to manage persistent application data for the web application
-   Ember Data requires you to define the structure of the data you wish to provide to your application by extending [`DS.Model`](https://www.emberjs.com/api/ember-data/2.16/classes/DS.Model).

```ember g model *name*```

-   have to update the model() defined in the route handler we now use the Ember Data store service. The [store service](https://www.emberjs.com/api/ember-data/2.16/classes/DS.Store) is injected into all routes and components in Ember.

### Building a Complex Component

-   an example would be a list-filter component which would allow the user to enter a number of criteria to filter out content

-   Notice that below we "wrap" our rentals markup inside the open and closing mentions of `list-filter`

    This is an example of the [**block form**](https://guides.emberjs.com/v2.17.0/components/wrapping-content-in-a-component) of a component, which allows a Handlebars template to be rendered *inside* the component's template wherever the `{{yield}}` expression appears.

-   In this case we are passing, or "yielding", our filter data to the inner markup as a variable called `rentals`

#### Accepting Input into a component

-   uses a `{{input}}` helper 
-   Tthe `value` property of `input` is [**bound**](https://guides.emberjs.com/v2.17.0/object-model/bindings/) to the `value` property of the component. If the property changes, either by the user typing in the input field, or by assigning a new value to it in our program, the new value of the property is present in both the rendered web page and in the code.

#### Controllers

-   [Controllers](https://guides.emberjs.com/v2.17.0/controllers/) contain actions and properties available to the template of its corresponding route.

`ember g controller *controller-name*`

-   name of the controller should be the same as the route

#### Handling the results coming back at different times

-   "Lets add some protective code to ensure our results do not get out of sync with our filter input.
    To do this we'll simply provide the filter text to the filter function, 
    so that when the results come back we can compare the original filter value with the current filter value.
    We will update the results on screen only if the original filter value  and the current filter value are the same."

## Services and Utilities

### Using google maps

-   `ember i ember-simple-google-maps`

-   Need to generate an API Key

    -   https://developers.google.com/maps/documentation/javascript/get-api-key
    -   SuperRentals Key =       AIzaSyD9zZQT3MsBSl8CkcZocwjRhwnP8KFcqDs
    -   ```GOOGLE_MAPS_API_KEY=<your key here> ember s```

-   Use a Utility to access the API

    -   Utility -> Reusable Code that can be accessed from various parts of the application. (allows for easy refactoring)
    -   `ember g util google-maps`

    ### Benefits of using a service

    -   Injected into the service locator, maps API is abstracted from the code, allowing easier refactoring and maintenance.
    -   Lazy-loading, won't be initialized until it is called for the first time. (Can reduce app's processor load and memory consumption)
    -   It is a singleton, means there is only one instance of the service object in the browser. Allows us to keep map data while the user navigates around the app, therefore when you return to a page you do not have to reload the maps

    ### Creating and Using the service

    -   `ember g service maps`
    -   to display use an additional component
    -   services are commonly made available in components and other Ember objects using "service injection"
        -   `import { inject } from '@ember/service';`
        -   once we have the service element by implement `didInserElement()`

## Nested Routes

-   The `{{outlet}}` helper's position in a template is where the active nested route will be rendered

-   The parent route template will always be displayed as we browse down the different child routes

-   this allows us to ad things like common instructions, navigation, footer or sidebars

-   `ember g route rentals/index` - creates a nested route index with parent rentals

    (index is treated differently to normal sub-routes as seen in `router.js`)

-   move .js and .hbs code as desired and the create a controller for nested route

-   you can re-export the controller from the parent controller instead of copying everything

### Linking to a specific ID Page (Rental)

-   use the `{{link-to}}` helper takes the route name and model object as arguments
-   when you pass a second argument to the `link-to` block helper it will by default serialize the object to the ID of the model into the URL (you could just pass rental.id for clarity)