# What is the assignment repo?

This has two roles: 
* A place for your code (such as project(s)) to live and evolve
* A place where I can send in new assignments or comment on the work

## How do I use it?

### Interacting with the repo itself
#### How to get assignments

Do a `git checkout master; git pull` frequently - you should get emails when it is needed.  This will bring all the new material and changes to you.

All documents telling you of specific work to do will start with "work-" in the filename.

#### How to do work on your side
Create a feature branch to hold your new work `git checkout -b cool-branch-name`
You can add/commit whatever as much as you want, it's all on your machine so far, but keep it out of your master until done
When you want to submit the work, merge master into that feature-branch (`get checkout cool-branch-name; git merge master`)    
Then do a `git push origin cool-branch-name` which will create a cool-branch-name branch on the remote repo (origin) 
Then go to github.com and create a pull request to merge cool-branch-name into master (use the big green button)
Once I approve and complete the merge, the feature-branch changes will be in master on origin.
### Interacting with the materials
Each section will have its own details, but here are some starting point:

* If there is a `server.js` file, you should try `node server.js`.  That usually starts a webserver that will have webpages for you to interact with.
* Other .js files are for you to use with your coding, to execute, and/or to fix as part of an assignment - check any .md files in that or it's parent directories. 
* If there is a `package.json`, that means you can run some additional node work there
* .md files are "markdown" format, which makes formatted documents easier to write.  Which means theses are intended for you to read.
* The files might informational, or they might be assignments.  Be sure to pay attention to `pull`ing frequently.

There will be additions to this list as class progresses

