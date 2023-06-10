import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
import mongoConverter from "../service/mongoConverter";
import { Promise } from "bluebird";
import * as _ from "lodash";

const taskSchema = new mongoose.Schema(
    {
        // id: {type: String},
        title: { type: String },
        important: {type: Boolean},
        text: {type: String},
        date_end: {type: Date},
        archive: {type: Boolean}
    },
    {
        collection: "tasks",
    }
);

taskSchema.plugin(mongooseUniqueValidator);

const TaskModel = mongoose.model("tasks", taskSchema );

const queryAllTasks = async () => {
    const result = await TaskModel.find();
    if (result) {
      return mongoConverter(result);
    }
  };


async function get(id) {
    return TaskModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new TaskModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return TaskModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    });
    
}
async function deleteTask(id) {
    return TaskModel.findByIdAndRemove(id).then(result =>{
        if (result){
            return result;
        }
        });
  }

export default {
    queryAllTasks,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    deleteTask: deleteTask,

    model: TaskModel,
};