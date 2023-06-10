import taskManager from './task.manager';
import userManager from './user.manager';

function getter(manager, request) {
 return function () {
   return manager.create(request, this);
 };
}

export default {
   getUserManager: getter(userManager),
   getTaskManager: getter(taskManager)
};