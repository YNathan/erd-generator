exports.generateGitCommandsFile = function () {
    let generatorHelperText = `'use strict';

const git = require('simple-git/promise');
const rimraf = require('rimraf');
var config = require('config');

var fs = require('fs');
const USER = config.get("gitConfig.username");
const PASS = config.get("gitConfig.password");
const REPO = config.get("gitConfig.gitRepo");
const GIT_SSH_COMMAND = "ssh -o UserKnownHostsFile=.GitRsaKey -o StrictHostKeyChecking=no";
git().env({ ...process.env, GIT_SSH_COMMAND })
.status()
.then(status => {console.log(status) })
.catch(err => {console.log(err)});

// .addConfig(key, value[, handlerFn])
const remote = \`https://\${REPO}\`;
let gitWsPath = '.';

module.exports.gitStaff = function (tableNameAsKababCase, newOrEdit) {
    deleteGeneratorHelperChildProcessAndConfigs();
    git().add("*").then(() => {
        console.log(\`files added successfuly\`);
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        const branchName = \`feature-\${newOrEdit}-\${tableNameAsKababCase}\`;
        console.log(\`start checkout to new branch: \${branchName}\`);
        git().checkoutLocalBranch(branchName).then(() => {
            console.log(\`checkout successfuly for local branch: \${branchName}\`);
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            git().status().then((res) => { 
               console.log('files added:',res.created.join(',\\n'));
               console.log('files modified:',res.modified.join(',\\n'));
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                git().commit(\`initial commit from generator, do not trust commit!!!\`).then(() => {
                    console.log(\`commit successfuly\`);
                }).catch((err) => {
                    console.log(err)
                }).finally(() => {
                    git().push('origin', branchName).then(() => {
                        console.log(\`push successfuly\`);
                    }).catch((err) => {
                        console.log(err)
                    }).finally(() => {
                        git().log('--format="%h"').then((res) => {
                            let commitHashId = res.latest.hash.split('"')[1];
                            //res = res.split('\\n')[0];
                            console.log('commit id:',commitHashId);
                        }).catch((err) => {
                            console.log(err)
                        });
                    });
                });
            });
        });
    });
}


module.exports.init = function () {
    git().init().then(() => {
        console.log('init success');
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        git().remote(['add','-t', '\*', '-f', 'origin',remote]).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            console.log('pull: start')
            git().pull('origin', 'master', {}).then(() => {
                console.log('pull: finished')
            }).catch((err) => {
                console.log('failed: ', err)
            }).finally(() => {
            });
        });
    });
}
 


module.exports.status = function () {

    git().status().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err)
    });
}

module.exports.checkoutLocalBranch = function (tableNameAsKababCase, newOrEdit) {

    const branchName = \`feature-\${newOrEdit}-\${tableNameAsKababCase}\`;
    console.log(\`start checkout to new branch: \${branchName}\`);
    git().checkoutLocalBranch(branchName).then(() => {
        console.log(\`checkout successfuly for local branch: \${branchName}\`);
    }).catch((err) => {
        console.log(err)
    });
}



exports.commitAndPush = function (tableNameAsKababCase, newOrEdit, addedFiles) {
    const branchName = \`feature-\${newOrEdit}-\${tableNameAsKababCase}\`;
    git().add(addedFiles).then(() => {
        console.log(\`added successfuly for file: \${addedFiles}\`);
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        git().commit(\`initial commit from generator, do not trust commit!!!\`).then(() => {
            console.log(\`commit successfuly\`);
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            git().push('origin', branchName).then(() => {
                console.log(\`push successfuly\`);
            }).catch((err) => {
                console.log(err)
            }).finally(() => {

            });
        });
    });
}
function deleteGeneratorHelperChildProcessAndConfigs() {  
    fs.unlinkSync('GeneratorHelper.js');
    rimraf.sync('config/');
}
      
`;
    return generatorHelperText;
}

exports.generateDefaultConfigFile = function (gitUsername, gitPassword) {
    let generatorHelperText = `{
    "gitConfig":{
        "username": "${gitUsername}",
        "password": "${gitPassword}",
        "gitRepo": "github.com//_server2.git"
    }
}
`;
    return generatorHelperText;
}