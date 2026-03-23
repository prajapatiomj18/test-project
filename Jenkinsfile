pipeline {
    agent any

    tools {
        nodejs 'Node18'  // Make sure you configured Node18 in Jenkins
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'test-results/**', fingerprint: true
            }
        }
    }
}