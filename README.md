# cloudbuild-notify

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e8b71e6046a649e28788eefad8e6559b)](https://www.codacy.com/manual/maxrs/cloudbuild-notify?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MaxRobinSchaefer/cloudbuild-notify&amp;utm_campaign=Badge_Grade)

Notify services about the status of the Cloud Build pipeline

## How to use these Google Cloud Function?

### Setup

**Example ```npm run gcp-deploy``` config:**
* *cloudbuildNotify*
* **runtime**: *nodejs8*
* **memory**: *128*
* **timeout**: *30*
* **region**: *europe-west1*
* **trigger-topic**: *cloud-builds*
* **set-env-vars**:
    * **SERVICES** = *#;#*
    * **GITHUB_TOKEN** = *#*
    * **PUSHOVER_API_TOKEN** = *#*
    * **PUSHOVER_USER_TOKEN** = *#;#;#*
###### Before run ```gcp-deploy```, edit the section in the package.json!    
    
### Available services

Below you can find informations about available services and their requirements:
 
* **github**
    * GITHUB_TOKEN
* **pushover**
    * USER_TOKEN
    * API_TOKEN
###### Set name and tokens like environment variables
