const fs = require('fs');
const path = './tasks.json';

const readTasks = () => {
  if (!fs.existsSync(path)) fs.writeFileSync(path, '[]');
  const data = fs.readFileSync(path, 'utf8');
  return JSON.parse(data);
};

const writeTasks = (tasks) => {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
};

module.exports = { readTasks, writeTasks };
