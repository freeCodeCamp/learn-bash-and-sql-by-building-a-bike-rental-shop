## Contributing

Please read the guidelines in the [contributing docs](https://contribute.freecodecamp.org/#/how-to-work-on-tutorials-that-use-coderoad) before contributing. Contributions to this project need to follow the correct workflow.

# Change Log

Whenever a new version is created, add the new branch name and the changes here

## [v1.0.0]

- Initial soft release with news article

## [v1.0.1]

- Move startup commands to `setup.sh`
- Run `setup.sh` on start, continue and reset
- Move SQL log files out of workspace
- Add `IF EXISTS` to `db.sql` when dropping database to stop warnings
- Terminate only user `freeCodeCamp` from db when resetting

## [v1.0.2]

- fix https://github.com/freeCodeCamp/freeCodeCamp/issues/44795

## [v1.0.3]

- Restructure commits to use new style. Instead of loading a new test file, and commenting out the old one on each commit, this loads all the tests in the `INIT` commit and uses mocha settings to only run tests in a specific file. The commits now just change the test file that should run.
- There was an issue with the last commit not loading after using the reset button in a tutorial. I added a final commit at end that seems to have resolved it.
- Add `exit` flag to mocha so the tests can't hang
- Fix hints on steps 1428 and 1760
