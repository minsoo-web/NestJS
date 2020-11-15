pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('BUILD IMAGE'){
            steps{
                sh '''
                if test ! -z "$(docker ps -af name=nest | grep -w nest$)"; then
                    docker stop nest && docker rm nest
                fi
                docker build -t nest-app .
                docker run -itd --name nest -p 3000:3000 nest-app:latest
                '''
            }
        }
        stage('RUN UNITTEST'){
            steps{
                sh '''
                docker exec -t npm run test               
                '''
            }
        }
    }
}