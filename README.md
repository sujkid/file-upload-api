
# File Upload Back end
File Upload is an app that enables users to upload files from a browser
to express and store them in AWS S3. The app stores information about the
uploaded files in MongoDB via Mongoose.


## Links

The front end is deployed here -
https://sujkid.github.io/file-upload/

The back end is deployed here -
https://shrouded-everglades-61610.herokuapp.com

The front-end repo can be found here -
https://github.com/sujkid/file-upload

The back-end deployed repo can be found here -
https://github.com/sujkid/file-upload-api

## Technologies Used

Install with `npm install`.

-   Express
-   MongoDB
-   AWS
-   Javascript
-   Node
-   Git/Github


## Planning and Development

1.  Read user requirements.
2.  Communicate with client about requirement clarifications.
3.  Write user stories.
4.  Design ERD.
5.  Develop the app by using the analysis and design as input to write code.
6.  Test the app at various levels of development, and after.
7.  Bug fix.

## User Stories

As a user, I can
-  Upload files from my computer to AWS.
-  I can only upload .png, .doc or .pdf files
-  I can only upload files of size greater than 1 GB.

## Unsolved problems

1. The app is  not mobile.
2. I could not do any styling due to time limitations.
3. I had planned to display the files uploaded, so client could see the files.
4. I was not able to test uploading files greater than 1GB, as I do not have
   .doc, .png or .pdf files that large. But I did test with smaller files
   and made sure they could not be uploaded.
5. I couldn't find time to write any unit tests.


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
