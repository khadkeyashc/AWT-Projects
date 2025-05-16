const repl = require('repl');
const chalk = require('chalk');
const { readTasks, writeTasks } = require('./utils/fileHandler');

console.log(chalk.cyan.bold('\nWelcome to CLI Task Manager!\n'));
console.log(chalk.yellow('Commands: add("task"), del(index), list()\n'));

global.add = (task) => {
  const tasks = readTasks();
  tasks.push(task);
  writeTasks(tasks);
  console.log(chalk.green('✅ Task added!'));
};

global.del = (index) => {
  const tasks = readTasks();
  if (index < 0 || index >= tasks.length) {
    console.log(chalk.red('❌ Invalid task index!'));
    return;
  }
  const removed = tasks.splice(index, 1);
  writeTasks(tasks);
  console.log(chalk.yellow(`🗑️ Removed: "${removed[0]}"`));
};

global.list = () => {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log(chalk.blue('📭 No tasks found.'));
  } else {
    console.log(chalk.magenta('\n📋 Your Tasks:'));
    tasks.forEach((task, idx) =>
      console.log(chalk.white(`${idx}. ${task}`))
    );
  }
};

repl.start('> ');
