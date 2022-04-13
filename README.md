# stagger-jobs
## usage:
1. Clone git repo to location of choice
2. Open terminal and `CD` to location of repo
3. Execute `yarn install` (or if using npm: `npm install`)
4. Update environment variables `API_USER` and `API_PASS` with GQL user/pass
5. Adjust `config.js` as needed
  * `maxExecutionRun` - Number of jobs to run before exiting
  * `jobsPerSet` - Number of jobs to run per set
  * `intervalInMinutes` - Number of minutes to delay between sets
  * `clusterId` - Cluster to run jobs
  * `webhook` - Url to report back job data asynchronously (webhook)
  * `url` - Url location of TTML to translate
6. Execute `yarn start` (or if using npm: `npm run start`)

