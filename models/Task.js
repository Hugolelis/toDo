import { DataTypes } from "sequelize";
import { sequelize as db } from "../db/conn.js";

export const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: true
    },

    description: {
        type: DataTypes.STRING,
        required: true
    },

    done: {
        type: DataTypes.BOOLEAN,
        required: true
    },
})