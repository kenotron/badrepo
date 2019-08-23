const { taskPresets, task, parallel } = require('just-scripts');

taskPresets.lib();

task('build', parallel('ts', 'jest'));
