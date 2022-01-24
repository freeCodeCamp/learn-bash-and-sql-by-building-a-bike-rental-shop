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
