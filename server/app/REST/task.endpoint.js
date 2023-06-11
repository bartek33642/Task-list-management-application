import business from "../business/business.container";

const taskEndpoint =  (router) => {
    router.get("/api/tasks", async (request, response, next) => {
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
                response.status(500).send('An error occurred while retrieving the task');

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

    router.delete('/api/task/:id', async (request, response, next) => {
        try {
          const id = request.params.id;
        //   const result = await business.getTaskManager().deleteTask(id);
          
          if (!id) {
            return response.status(400).send('Invalid task ID');
          }
          
        await business.getTaskManager().deleteTask(id);
          
          response.status(200).send('Task deleted successfully');
        } catch (error) {
          console.log(error);
          response.status(500).send('An error occurred while deleting the task');
        }
      });
      
      router.put('/api/task/:id', async (request, response, next) => {
        try {
          const id = request.params.id;
          const data = request.body;
      
          if (!id) {
            return response.status(400).send('Invalid task ID');
          }
      
          const updatedData = Object.assign({ id }, data);
          const result = await business.getTaskManager().createNewOrUpdate(updatedData);
      
          response.status(200).send(result);
        } catch (error) {
          console.log(error);
          response.status(500).send('An error occurred while updating the task');
        }
      });
      

      
    };

export default taskEndpoint;