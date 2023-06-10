import userEndpoint from './user.endpoint';
import taskEndpoint from './task.endpoint';

const routes = function (router)
{
 userEndpoint(router);
 taskEndpoint(router);
};

export default routes;
