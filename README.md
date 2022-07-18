# bpa-api

This is the API for the Basic Plugin Architecture.

This uses serverless to build an API on AWS, using Lambda functions.

### Instructions for building a new repo/API with this code

1. Change name, version, description and repository in package.json
    1. npm i -c
    1. npm update (if necessary)
    

2. [TODO: Add instructions for installing serverless if not installed]


3. in aws_resources folder, edit serverless.yml.
    1. change name of service
    1. Under 'resources', change the 'Name' property of the ApiGatewayRestApi resource to the name of the API you want to create.
    1. Under 'UserPool', change the UserPoolName to the name of the user pool you want to create.
    1. on the command line, run the command 'sls deploy --stage dev'.


4. In AWS, modify the User Pool and Create the Identity Pool.
    1. Go into AWS and create the Admin, Editor and User groups under your new user pool.
        1. [TODO: do this through serverless]
    1. Create an app client at the bottom of the user pool page.  Use the default settings.
        1. [TODO: do this through serverless]
    1. Create the identity pool.
       1. Connect your user pool as an authenticator for the identity pool by assigning the user pool id and 
          the app client id to it on the first page.
       1. Set up Auth and unauth roles for it on the second page.  You will need to go into the IAM section in a 
          different tab, and find the IAM roles that were created for mapapp.  "Edit" the roles and copy their 
          permissions into the IAM roles you're creating for your new identity pool.
       1. Go into the API Gateway section in a different tab, and find the API gateway that you created with serverless.
          Copy the id for the API into the IAM permissions for the new roles you're creating, so that they can 
          execute the API.
       1. [TODO: do all of this through serverless]
   1. Copy the new user pool id, app client id and identity pool id into the config.js file of the client repo.


5. In AWS, set up a new DB.
    1. [TODO: Instructions]

5. In AWS, go to Systems manager -> Parameter Store.
    1. Create parameters for each of the parameters needed for the 
       environment variables in the top-level serverless.yml.
        1. Use a string identifying your app in place of 'mapapp'.
        1. Use 'dev' in place of ${opt:stage}.
        1. Copy the DB variables from the .env file in your db repo 
           (cloned from mapapp-db).


6. At the top level, edit serverless.yml.
    1. change the service name.
    1. Under provider -> environment, change the instances of 'mapapp' 
       to the string you used when creating the environment variables.
    1. on the command line, run the command 'sls deploy --stage dev'.

    
7. Edit constants.js.
    1. Change the appName to the name of your app.
