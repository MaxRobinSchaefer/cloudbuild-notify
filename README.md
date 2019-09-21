# cloudbuild-notify

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
