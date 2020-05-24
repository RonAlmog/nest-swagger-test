pipeline {
    agent any
    stages{
      stage('Install') {
        steps {
          sh 'npm install'
        }
      }
      stage('Build') { 
        steps {
          sh 'nest build'
        }
      }
      stage('Deploy') {
        steps {
          sh 'cp -R dist/* /home/ron/plenta/server/'
        }
      }
    }
}