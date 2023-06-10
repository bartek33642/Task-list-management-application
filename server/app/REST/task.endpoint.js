import business from "../business/business.container";

const taskEndpoint =  (router) => {
    router.get("api/tasks", async (request, response, next) => {
        try {
             const result = await business.getTaskManager().query();
             response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }

    });
    router.get('/api/task/:id', async (request, response, next) => {
        try {
            const id = request.params.id;
            let result = await business.getTaskManager().get(id);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
    
    router.post('/api/task', async (request, response, next) => {
        try {
            const data = request.body;
            let result = await business.getTaskManager().createNewOrUpdate(data);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
    };

export default taskEndpoint;