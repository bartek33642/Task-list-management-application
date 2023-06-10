import taskDAO from "../DAO/taskDAO";

function create(context) {
    async function query(){
        let result = taskDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
    	let result = await taskDAO.get(id);
    	if (result) {
        	return result;
    	}
	}

    async function createNewOrUpdate(data) {
    	let result = await taskDAO.createNewOrUpdate(data);
    	if (result) {
        	return result;
    	}
	}

    return {
    	query: query,
    	get: get,
    	createNewOrUpdate: createNewOrUpdate,
	};
}

export default {
 create:create
};