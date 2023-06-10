import taskDAO from "../DAO/taskDAO";
import taskModel from "../DAO/taskDAO";
import { isValidObjectId, Types } from 'mongoose';

function create(context) {
    async function query() {
        let result = taskModel.queryAllTasks();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await taskModel.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await taskModel.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

	async function deleteTask(id){
		let result = await taskDAO.deleteTask(id);
		if(result){
			return result;
		}
	}

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        deleteTask: deleteTask,
    };
}

export default {
    create: create,
};
