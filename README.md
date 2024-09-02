# CI/CD Pipeline Using Jenkins

This repository provides a guide to setting up a CI/CD pipeline using Jenkins for continuous integration, continuous deployment, and code quality testing with SonarQube.

## Key Components

- **Jenkins Installation**: Step-by-step instructions to install and configure Jenkins.
- **Continuous Deployment**: Automate the deployment of applications to various environments.
- **SonarQube Integration**: Use SonarQube to ensure code quality and security through automated testing.

## Getting Started

### Jenkins Installation

Follow these steps to install Jenkins on your server:

1. **Install Java**: Jenkins requires Java to run.
    ```bash
    sudo apt update
    sudo apt install openjdk-11-jdk
    ```
2. **Add Jenkins Repository and Install Jenkins**:
    ```bash
    wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
    sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
    sudo apt update
    sudo apt install jenkins
    ```
3. **Start Jenkins Service**:
    ```bash
    sudo systemctl start jenkins
    sudo systemctl enable jenkins
    ```
4. **Access Jenkins**: Visit `http://localhost:8080` in your browser and complete the setup process.
![image](https://github.com/sanskarupa2003/CICD-pipeline-using-Jenkins/assets/92289612/54e9668b-04a2-419d-bc33-1b711e0fa1c7)

### Setting Up a Jenkins Pipeline

1. **Create a New Pipeline Job**: In Jenkins, create a new job and select "Pipeline."
2. **Connect to Your Source Code Repository**: Set up SCM (e.g., GitHub, GitLab).
3. **Define the Pipeline Script**: Create a `Jenkinsfile` with stages for building, testing, and deployment.

### Continuous Deployment Configuration

1. **Setup Deployment Environment**: Ensure you have access to your target environment.
2. **Add Deployment Steps**: Update the `Jenkinsfile` to include deployment commands.
   ```groovy
   stage('Deploy') {
       steps {
           sh 'deploy.sh'
       }
   }
![image](https://github.com/sanskarupa2003/CICD-pipeline-using-Jenkins/assets/92289612/8041b2ab-f6c1-4785-8a0a-42bbe9b1b4e5)

## Azure Port Rules

![image](https://github.com/sanskarupa2003/CICD-pipeline-using-Jenkins/assets/92289612/f68ba4d0-3187-46a3-92dd-db1fd753722a)

## Continuosly Deployed Project 

![image](https://github.com/sanskarupa2003/CICD-pipeline-using-Jenkins/assets/92289612/9be2f406-47fe-414c-8c5f-51b45a4388e3)

## Sonarqube Code quality Testing
![image](https://github.com/sanskarupa2003/CICD-pipeline-using-Jenkins/assets/92289612/2a64d575-b571-4eae-98f2-cc3114562027)

