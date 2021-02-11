# Ravn-Challenge-V2-EdsonLipa
## Project description.
This is a small challenge project that uses React js and Graphql to access and list the details of the characters from The Star Wars series.
For this project [the Star Wars GraphQL API](https://swapi-graphql.netlify.app/.netlify/functions/index) and [Apollo Client](https://www.apollographql.com/) were used.


<img src="/images/img1.jpg" width="200" height="400"/>|
<img src="/images/img2.jpg" width="200" height="400"/>|
<img src="/images/img3.jpg" width="200" height="400"/>
<img src="/images/img4.PNG" width="200" height="400"/>

###### In the images we can see the main functions:
1. Show loading indicator when necessary.
2. Indicate when a query has failed.
3. Uses the allPeople field to load all people from the API.
4. Shows details of a person.

## Setup

- [x]  npm: 6.14.9
- [x]  bootswatch: 4.6.0
- [x]  graphql: 15.5.0
- [x]  react: 17.0.1
    
## Running instructions
To run the project you just have to follow the following command lines (`npm` is the minimum requirement)
```
git clone https://github.com/edsonlipa/Ravn-Challenge-V2-EdsonLipa.git
cd star-wars-app/
npm start
```


## Additional information.
I have assumed that all people with a null species are human, even though there are exceptions like 'R4-P17'
