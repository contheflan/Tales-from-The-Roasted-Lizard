# Tales-from-The-Roasted-Lizard

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
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

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

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

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
