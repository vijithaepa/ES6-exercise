## Useful notes
### Pros on Micro Libraries :
 * Easy to develop
 * Easy to test
 * Reusable

### Cons on Micro Libraries :
 * Difficulty to manage many number of micro services

## NPM [Configurations](https://docs.npmjs.com/misc/config) used :
 * npm set init-author-name
 * npm set init-author-email
 * npm set init-author-url
 * npm set init-license
 * npm set save-exact

 * npm adduser -- will add authorised [npm user](https://www.npmjs.com) to the project
 * npm init -- will create package JSON

## Release steps
 * git add -A -- Will stash all to local repository
 * npm run commit -- Commit stash files with git standards
 * git push -- Will initialise travisCI build, release to gihub, publish to npm on new releases
 * npm info -- Gives a detailed information about he library


> * Release management has implemented with [Travis](travis-ci.org)
> * Published to [npm](www.npmjs.com)
> * If you find issues running Sementic-release installation, refer [Issue resolution] (https://github.com/nodejs/node-gyp#installation) for semantic-release-cli



