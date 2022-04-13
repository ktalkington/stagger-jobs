const axios = require('axios');
const _ = require('lodash');
const config = require('./config.js');

const gqlURL = 'https://api.us-1.veritone.com/v3/graphql';

const sendQuery = async (token) => {
    const query = `mutation AutomateDAG (
        $tdo: ID,
        $url: String!,
        $lang: String!,
        $webhook: String,
        $clusterId: ID,
        $debug: Boolean
    ) {
      createJob(input: {
        target: { status:"downloaded" },
        clusterId: $clusterId
        tasks: [
           {
            # Igniter-V3F
            engineId: "5305265c-d566-4716-8904-debf7e0ac857"
             payload: {
                        tdo: $tdo,
                        url: $url,
                        lang: $lang,
                        webhook: $webhook,
                        clusterId: $clusterId,
                        debug: $debug
                        }
             ioFolders: [
                { referenceId: "igniteOutputFolder", mode: chunk, type: output }
              ]
            executionPreferences: { priority: -99 }
          }
          {
             # Automate Studio Flow
             engineId: "481e2749-1c23-498d-bb51-9a7d94f78da0"
             ioFolders: [
                { referenceId: "engineInputFolder", mode: chunk, type: input }
                { referenceId: "engineOutputFolder", mode: chunk, type: output }
              ]
            executionPreferences: { priority: -99 }
          }
        ]
        routes: [
            {
              # Input --> Engine
              parentIoFolderReferenceId: "igniteOutputFolder"
              childIoFolderReferenceId: "engineInputFolder"
              options: {}
            }
          ]
      }) {
        id
        tasks{
          records{
            id
            output
          }
        }
      }
    }
    `;
    const variables = {
        "tdo": "",
        "url": config.url,
        "lang": "pt-PT",
        "webhook": config.webhook,
        "debug": config.debug,
        "clusterId": config.clusterId
    };
    let body = JSON.stringify({
        query,
        variables
    });
    return await axios.post(gqlURL,
        body,
        {
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}` 
            }
        }
    ).then(res => {
        console.log(res.data);
        return res.data;
    })
};

let authBody = {
    query: `mutation userLogin (
        $user: String!,
        $pass: String!
    ) {
      userLogin(input: {userName: $user password: $pass}) {
        token
      }
    }`,
    variables: {
        "user": config.apiUser,
        "pass": config.apiPass
    }
};

( async () => {
    let response = await axios.post(gqlURL, authBody)
        .then(res => {
            return res.data;
        });
    let token = response.data.userLogin.token;
    const jobs = [];
    
    _.times(config.jobsPerSet, () => jobs.push(sendQuery(token)));
    let results = await Promise.all(jobs).then(result => { if (config.debug) console.log(result) });
    const staggerJobs = setInterval(async () => {
        let response = await axios.post(gqlURL, authBody)
            .then(res => {
                return res.data;
            });
        let token = response.data.userLogin.token;
        _.times(config.jobsPerSet, () => jobs.push(sendQuery(token)));
        results = await Promise.all(jobs).then(result => { if (config.debug) console.log(result) });
        if (jobs.length >= config.maxExecutionRun) clearInterval(staggerJobs);
    }, 1000 * 60 * config.intervalInMinutes);
})();

