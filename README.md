# Tales-from-The-Roasted-Lizard

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Tales from The Roasted Lizard** 

*The wind howls and the drains swell with the heavy rainfall. You pull your collar up over your face as the cold bites your nose. Pushing your way through an especially crowded market district, your eyes level on your destination. A steady stream of patrons flow in and out of the large wooden doors under a bright green and yellow sign. "THE ROASTED LIZARD INN: Drink and Quests inquire within" You tighten your grip on your sword and mutter a protection ward as you push through the rainsoaked flow of patrons into the smoke filled tavern.*

Ever need a quest? Have an interesting plot hook, story premise, or a fun campaign idea for your next DND game? Let the notice board at the Lizard satisfy your hunger for adventure (and food)! The idea is simple, post a quest idea or story premise and have your fellow tavern patrons (or users) comment on which ones spark their imagination! Maybe you can collaborate together to fine-tune some interesting story ideas.

<br>

## MVP

- Have a working interactive React App
- 8, Fully styled components 
- Have a database with 3 seperate tables (posts, users and comments)
- Implement Patrons (users) to allow posting and commenting on posts
- Link backend to database (postgresql)
- Demonstrate Full CRUD capabilities 

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end Framework |
|   React Router   | Routes/Links/withRouter |
| Axios | API |
|     Rails      | Backend |
|  Postgresql  | Connecting Database |

<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/JvQD3Nf5NfkiCpUpcZhOtC/Tales-from-the-Roasted-Lizard?node-id=0%3A1

#### Component Tree

https://whimsical.com/tales-from-the-roasted-lizard-ADP6L71gTYxJ1EywiVkjd

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ textures
      |__ images
|__ components/
      |__ Header.jsx
      |__ Header.css
      |__ Footer.jsx
      |__ Footer.css
|__ containers/
      |__ MainContainer.jsx
      |__ MainContainer.css
|__ layouts/
      |__ Layout.jsx
      |__ Layout.css
|__ screens/
      |__ Intro.jsx
      |__ Intro.css
      |__ Login.jsx
      |__ Login.css
      |__ Register.jsx
      |__ Register.css
      |__ Posts.jsx
      |__ Posts.css
      |__ PostDetails.jsx
      |__ PostDetails.css
      |__ EditPost.jsx
      |__ EditPost.css
      |__ CreatePost.jsx
      |__ CreatePost.css
      |__ Comment.jsx
      |__ Comment.css
|__ services/
      |__ apiConfig.js
      |__ posts.js
      |__ users.js
|__ App.js
|__ App.css
|__ index.js
|__ index.css
|__ reportWebVitals.js
|__ .gitignore
|__ package-lock.json
|__ package.json
|__ README.md

```


#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Fill out Migration Tables    |    H   |     3 hrs      |     TBD     |    TBD   |
| Create Seed Data |    H     |     3 hrs      |     TBD    |     TBD     |
| Create Controller Routes |    H     |     3 hrs      |     TBD    |     TBD     |
| Implement User Authentication Routes |    H     |     3 hr     |     TBD    |     TBD     |
| Migration Debugging |    M   |     6 hrs      |     TBD    |     TBD     |
| Troubleshooting Migration data |    H     |     1 hr    |     TBD    |     TBD     |
| Connecting Backend with Frontend |    H     |     2 hrs      |     TBD    |     TBD     |
| Creating React App |    H     |     1 hr    |     TBD    |     TBD     |
| Filling out React Boilerplate |    H     |     3 hrs      |     TBD    |     TBD     |
| Render Website Front-end Components |    H     |     7 hrs      |     TBD    |     TBD     |
| Styling Components w/ CSS |    H     |     10 hrs      |     TBD    |     TBD     |
| Media Queries for Phone/Tablet|    L   |     3 hrs      |     TBD    |     TBD     |
| Deployment |    H     |     1 hr   |     TBD    |     TBD     |
| TOTAL               |          |     46 hrs      |     TBD     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

https://drive.google.com/file/d/1wkrSFbzqiZcz7-2maaHpdKjUKAPGOcbF/view?usp=sharing

![ERD](https://i.imgur.com/3tJOZoY.png)
<br>

***

## Post-MVP

-Favoriting posts
<br>
-Adding favorited posts/comments to user accounts pages.
<br>
-Adding an additional table, DM tools, which streamlines importing dnd dm specific tools (hazards, monster blocks, items etc.)
-Categories (puzzles, stories, characters, villains etc.)

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
