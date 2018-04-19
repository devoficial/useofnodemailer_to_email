# useofnodemailer_to_email using gmail
-  create an express app using npm init or express generator 
- this is a project to show how to use nodemailer for email purposes in your app
- then configure the app or you just can copy paste the code from server.
-  make a views directory where your template will store 
-  make a file index.ejs (we will be using ejs template)
-  copy the code and paste inside the file
-  make sure you are adding boostrp link just for a good contact form
-  now create a .env file and store your gmail and password 
-  you should put them here like below
        ```
        auth{
             user:"your user name",
             pass:"your password"
           }
        ```
         ### use .env file is recomended
-  now just fire up your terminal with 
        ``` $ npm server.js ```
-  if you are using c9 then just preview the app 
-  in local development use a port which could be local:3000
-  now you could see the contact form just fill out the form
-  you should get an email.
### some helpful links for how to set up gmail to recive email from your app
[nodemailer how to change your email settings](https://nodemailer.com/usage/using-gmail/)

