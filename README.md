# Sample Blog

## Project Setup

In order to get everything up and running, please follow these steps:

1. Clone this repo.
2. Navigate to the cloned folder and open it in your code editor.
3. Run `yarn install` to install all npm packages.
4. Run `yarn start` to start the server.
5. Open Google Chrome and navigate to `http://localhost:3000`.

## The task

This is a POC application for displaying blog posts. It does not currently connect with any apis.

### Out of scope (you can assume these things are ok)

-   How the build / typescript / prettier is configured
-   User authentication: assume that this is yet to be connected up to an auth service, so for now we assume user is signed in

### Requirements

The requirements for the final application are given below.

For these requirements, can you find an example of where the requirement has been met, and an example of where it hasn't?

-   The app, currently in English only, should be capable of supporting additional languages.
-   Basic accessiblity standards should be met.
-   Typescript should be used to ensure data integrity

### Additionally

-   The app will connect to an api to get the posts, and like it does now it will poll regulary to ensure it has the latest posts. How should the data be managed once this is in place?

-   Once the authenication service is in place, it is expected that the signedIn variable will be used in many places across the application. Can you think of an alternative from having to pass it down the component tree wherever it needs to be used?

### Troubleshooting

The app does not meet the organisation's non-functional specification for performance. There is an excessive number of re-rerenders. The function to sort the posts is potentially very expensive for a large number of posts, and it is running more frequently than it needs to. There is also something wrong with how the list behaves when the d

How would you fix these problems?

### Finally

What other problems / opportunities for improvement can you spot?