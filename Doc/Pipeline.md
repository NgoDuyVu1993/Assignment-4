# CI/CD Pipeline
- To use CircleCI, we must authorized it to access the repo on Github
- The pipeline triggers a build each time we push the main branch
- The pipeline automates the install, build and deploy processes for the app

# Pipeline Overview
The CircleCI Pipeline diagram
![image](https://github.com/NgoDuyVu1993/Assignment-4/blob/main/image/CircleCI%20diagram.png)

After receiving the trigger for code commit, the CircleCI will do following steps:
- Spin up environment
- Preparing environment variables
- Install NodeJS code
- Install NPM
- Checkout code
- Build
- Deploy
