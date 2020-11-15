pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('BUILD IMAGE'){
            steps{
                sh '''
                if test ! -z "$(sudo docker ps -af name=nest | grep -w nest$)"; then
                    sudo docker stop nest && sudo docker rm nest
                fi
                sudo docker build -t nest-app .
                sudo docker run -itd --name nest -p 3000:3000 nest-app:latest
                '''
            }
        }
    }
}