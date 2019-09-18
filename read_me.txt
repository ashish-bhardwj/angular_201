I have used mongodb as backend database

Database name is Library 
I have used 3 collections

* Books(for storing book details)
*sample data is shown below

{
_id:5c8a77e3a7ae134deccb6d89
bookTitle:"Into the Wild"
topic:"Biography"
author:"Jon Krakauer"
cost:400
description:"a young man from a well-to-do family hitchhiked to Alaska and walked a..."
rating:4
count:3
issued:true
__v:0
}

*Users(for storing user details)
*sample data is shown below

{
_id:5c8557713e45fc4c40c30e19
firstName:"Ashish"
lastName:"Bhardwaj"
email:"ashish2horizon@gmail.com"
password:"$2a$10$eDyUYQcfQ6/UtpvKgpOPG.gqdyDcwXL1Hds5pGxL3kSo3KQM1pWw."
__v:0
}

* Issue(for storing books and user relation)
*sample data is shown below

{
_id:5c883b55889d59432405fd7b
user_id:"5c8557713e45fc4c40c30e19"
firstName:"ambika"
email:"ambika@gmail.com"
book_id:"5c85710c09459721ecdba270"
bookTitle:"Train to Pakistan"
__v:0
}


Instructions to start application-

install node modules in client and server both appliations by using cmd:
npm install

*Start the backend server using command-

node server/server.js

*start frontend using command-

ng serve


Login credentials as admin

username-admin
password-admin

Login credentials for a user-

email-ashish2horizon@gmail.com
password-aaaaaa
 