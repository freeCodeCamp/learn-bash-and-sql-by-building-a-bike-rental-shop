const fs = require('fs');
const util = require('util');
const path = require('path');
const parseCommand = require('shell-quote').parse;
const exec = require('child_process').exec;

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

const getLastCommand = async (dir = process.cwd()) => {
  const pathToBashLogs = path.join(dir, '../../', '.bash_history');
  const bashLogs = await readFile(pathToBashLogs, 'utf8');

  if (!bashLogs) {
    throw new Error(`Could not find ${pathToBashLogs}`);
  }

  const logs = bashLogs.split('\n');
  const lastLog = logs[logs.length - 2];
  const parsedCommand = parseCommand(lastLog);

  return parsedCommand;
};

const getNextCommand = async (dir = process.cwd()) => {
  const pathToNextCommandLogs = path.join(dir, './test', '.next_command');
  const nextCommandLogs = await readFile(pathToNextCommandLogs, 'utf8');

  if (!nextCommandLogs) {
    throw new Error(`Could not find ${pathToNextCommandLogs}`);
  }

  const logs = nextCommandLogs.split('\n');
  const nextCommand = logs[logs.length - 2];
  const parsedCommand = parseCommand(nextCommand);

  return parsedCommand;
};

const getCwd = async (dir = process.cwd()) => {
  const pathToCwdLogs = path.join(dir, './test', '.cwd');
  const cwdLogs = await readFile(pathToCwdLogs, 'utf8');

  if (!cwdLogs) {
    throw new Error(`Could not find ${pathToCwdLogs}`);
  }

  const logs = cwdLogs.split('\n');
  const lastLog = logs[logs.length - 2];

  return lastLog;
};

const getPreviousCwd = async (dir = process.cwd()) => {
  const pathToCwdLogs = path.join(dir, './test', '.cwd');
  const cwdLogs = await readFile(pathToCwdLogs, 'utf8');

  if (!cwdLogs) {
    throw new Error(`Could not find ${pathToCwdLogs}`);
  }

  const logs = cwdLogs.split('\n');
  const previousLog = logs[logs.length - 3];

  return previousLog;
};

const getDirectoryContents = async (dir = process.cwd()) => {
  const directoryContents = await readdir(dir);

  if (!directoryContents) {
    throw new Error(`Could not find folder ${dir}`);
  }

  return directoryContents;
};

const getPgLogs = async (dir = process.cwd()) => {
  const pathToPgLogs = path.join(dir, './test', 'pg.log');
  const pgLogs = await readFile(pathToPgLogs, 'utf8');

  if (!pgLogs) {
    throw new Error(`Could not find ${pathToPgLogs}`);
  }
  return pgLogs;
};

const getLastLog = async (removeWhiteSpace = false, logsBack = 1) => {
  const pathToPgLogs = path.join(process.cwd(), './test', 'pg.log');
  const pgLogs = await readFile(pathToPgLogs, 'utf8');

  if (!pgLogs) {
    throw new Error(`Could not find ${pathToPgLogs}`);
  }

  const logsArray = pgLogs.split('LOG: ');
  const previousLog = logsArray[logsArray.length - logsBack];

  if(removeWhiteSpace) return previousLog.replace(/\s/g, '');
  
  return previousLog;
}

const getLastQueryResult = async () => {
  const pathToQueryResults = path.join(process.cwd(), './test', 'queryResults.log');
  const queryResults = await readFile(pathToQueryResults, 'utf8');

  if (!queryResults) {
    throw new Error(`Could not find ${pathToQueryResults}`);
  }

  const regexSplitter = /\n{2,}/g;
  const resultsArray = queryResults.split(regexSplitter);
  const lastResult = resultsArray[resultsArray.length - 2];

  return lastResult.replace(/\s/g, '');
}

const getFileContents = async (file = process.cwd()) => {
  const fileContents = await readFile(file);

  if (!fileContents) {
    throw new Error(`Could not read file ${file}`);
  }

  return fileContents.toString();
};

const getScriptOutput = async (command) => {
    // console.log(arguments);
    const script = await exec(command);
    const output = [];

    script.stdout.on('data', function (data) { 
        //script.stdin.write('20\n');
        //script.stdin.write('30\n');
        //console.log(data);
        //console.log(output);
        output.push(data.toString());
        return output;
    });

    script.on('error', function (error) {
        console.log('error');
    });
    script.kill();

    // What do I want to return? all the stuff that's echo'd? 
    // Kind of my only option
    // so A test might be the script should read a username and output it
    // so script(filename, tom) should return -[enter your name:, hello, Tom]
}

exports.getLastCommand = getLastCommand;
exports.getNextCommand = getNextCommand;
exports.getCwd = getCwd;
exports.getPreviousCwd = getPreviousCwd;
exports.getDirectoryContents = getDirectoryContents;
exports.getPgLogs = getPgLogs;
exports.getLastLog = getLastLog;
exports.getLastQueryResult = getLastQueryResult;
exports.getFileContents = getFileContents;
exports.getScriptOutput = getScriptOutput;
