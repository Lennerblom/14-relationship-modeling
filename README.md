[![Build Status](https://travis-ci.org/Lennerblom/14-relationship-modeling.svg?branch=master)](https://travis-ci.org/Lennerblom/14-relationship-modeling)

# 14 Relationship Modeling
___
###### TRAVIS: https://travis-ci.org/Lennerblom/14-relational-modeling
###### HEROKU: https://relationship-modeling14.herokuapp.com/
###### PR: https://github.com/Lennerblom/14-relationship-modeling/pull/2
___
This server was created using Express and incorporated a Mongo database to store data.  The home route URL is: `https://.herokuapp.com/api/v1/chores/` will display all the chores and `/people` will show people in the database. Currently that route in the browser will display an empty array []. I'm still working on how to add to the mLab database.  Otherwise, `http://localhost:3014/` will work if you fork the repo as described below.

### **In order to run my app, do the following:**

Fork this repo and clone it to your system so you can run the below commands.  In the terminal cd into the root folder of the cloned repo.  Type `npm init -y` then `npm i` to load the dependencies. Type `npm run watch` to start the server with nodemon.

Open another tab in the terminal and run the following commands with HTTPie

* Using HTTPie run the following commands in the terminal in order:

  1. `http POST :3014/api/v1/chores chore=dishes assignedTo=Lydia`

    `http POST :3024/api/v1/people Name=Joe Age=29`

  You should receive a JSON object in the terminal and you'll need to copy and paste the long id and replace the id in the GET, PUT, and DELETE commands below.

  2. `http GET :3014/api/v1/chores/829c4c60-6df0-11e8-8bb8-8f5a2fd3ddda`

  3. `http PUT :3014/api/v1/chores/829c4c60-6df0-11e8-8bb8-8f5a2fd3ddda chore=dishes assignedTo=Elizabeth`

  4. `http DELETE :3014/api/v1/chores/829c4c60-6df0-11e8-8bb8-8f5a2fd3ddda`