# AppsyncAngular

## Initialize the project

`amplify init`

```sh
amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project appsync-angular
? Enter a name for the environment js
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using angular? Source Directory Path:  src
? Distribution Directory Path: dist/appsync-angular

? Build Command:  npm.cmd run-script build
? Start Command: ng serve
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use amplify-todo
- Initializing project in the cloud...
```


## Add Auth

```sh
pp\appsync-angular> amplify add auth
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito. 

 Do you want to use the default authentication and
security configuration? Default configuration
 Warning: you will not be able to edit these selections. How do you want users to be able to sign in when using your Cognito User Pool? Username
 Warning: you will not be able to edit these selections.
 What attributes are required for signing up? (Press <space> to select, <a> to toggle all, <i> to invert selection)Email
Successfully added resource appsyncangular98c1c87blocally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

## Add API ( GraphQAL )

```sh
 amplify add api? Please select from one of the below mentioned services GraphQL? Provide API name: (appsync-angular)>> You can use the following characters: a-z A-Z 0-9
? Provide API name: appsyncAngular
? Choose an authorization type for the API API key? Do you have an annotated GraphQL schema? No
? Do you want a guided schema creation? Yes? What best describes your project: Single object with fields
(e.g., “Todo” with ID, name, description)? Do you want to edit the schema now? YesPlease edit the file in your editor: C:\Rupesh\Github\my-first-asws-amplify-angular-app\appsync-angular\amplify\backend/api/appsyncAngular/schema.graphql
? Press enter to continue

GraphQL schema compiled successfully.
Edit your schema at C:\Rupesh\Github\my-first-asws-amplify-angular-app\appsync-angular\amplify\backend/api/appsyncAngular/schema.graphql or place .graphql files in a directory at C:\Rupesh\Github\my-first-asws-amplify-angular-app\appsync-angular\amplify\backend/api/appsyncAngular/schema
Successfully added resource appsyncAngular locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

```
## PUSH

it will create dynamo db table with the given schema.


```sh
? Are you sure you want to continue? Yes

GraphQL schema compiled successfully.
Edit your schema at C:\Rupesh\Github\my-first-asws-amplify-angular-app\appsync-angular\amplify\backend\api\appsyncAngular/schema.graphql or place .graphql files in a directory at C:\Rupesh\Github\my-first-asws-amplify-angular-app\appsync-angular\amplify\backend\api\appsyncAngular/schema
? Do you want to generate code for your newly created GraphQL
API Yes
? Choose the code generation language target angular
? Enter the file name pattern of graphql queries, mutations and subscriptions src\graphql\**\*.graphql
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
? Enter the file name for the generated code src\app\API.service.ts
| Updating resources in the cloud. This may take a few minutes...

```

## Add Hosting


```sh

         amplify add hosting? Select the environment setup: DEV (S3 only with HTTP)
? hosting bucket name my-appsync-todo-app? index doc for the website index.html
? error doc for the website index.html
You can now publish your app using the following command:Command: amplify publish



```

### Publish App over Cloud

Run below script

`amplify publish`

