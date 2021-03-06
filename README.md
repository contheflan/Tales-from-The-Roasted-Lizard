# Tales-from-The-Roasted-Lizard

http://tales-from-the-roasted-lizard.surge.sh/

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
| Fill out Migration Tables    |    H   |     3 hrs      |    3 hrs   |    3 hrs   |
| Create Seed Data |    H     |     3 hrs      |    3 hrs   |     3 hrs    |
| Create Controller Routes |    H     |     3 hrs      |     3 hrs   |     3 hrs    |
| Implement User Authentication Routes |    H     |     3 hrs     |     3 hrs  |     3 hrs     |
| Migration Debugging |    M   |     6 hrs      |    6 hrs   |     6 hrs     |
| Troubleshooting Migration data |    H     |     1 hr    |     1 hr   |     1 hr     |
| Connecting Backend with Frontend |    H     |     2 hrs      |     2 hrs    |     2 hrs     |
| Creating React App |    H     |     1 hr    |     1 hr    |     1 hr    |
| Filling out React Boilerplate |    H     |     3 hrs      |     3 hrs  |     3 hrs     |
| Render Website Front-end Components |    H     |     7 hrs      |     7 hrs    |     7 hrs     |
| Styling Components w/ CSS |    H     |     10 hrs      |     10 hrs  |    10 hrs    |
| Media Queries for Phone/Tablet|    L   |     3 hrs      |     3 hrs    |     3 hrs    |
| Deployment |    H     |     1 hr   |     1 hr   |    1 hr     |
| TOTAL               |          |     46 hrs      |     46 hrs    |    46 hrs    |

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

```
<div>
      <Layout />
      <h2>Here There Be Postings</h2>
      <img className="christmas" src={Christmas}></img>
    <Link to="/CreatePosting">
    <button className="posting-button">Add Posting</button>
    </Link>
    <div className="postings-container" >
    {
      props.postings.map(posting => (
        <div className="postings" key={posting.id}>
          <Link to={`/Postings/${posting.id}`}>
            <p className="posting-title">{posting.title}</p>
            <img className="posting-img" src={posting.img_url} />
          </Link>
        </div>
        ))
      }
      <br />
      </div>
      </div>
 ```

## Code Issues & Resolutions

> Had a lot of trouble getting the backend to cooperate with the front end update. In one instance it turns out whenever I thought I was updating a post it was actually creating a new post with the previous edits to the new post! (prevState strikes again!)
