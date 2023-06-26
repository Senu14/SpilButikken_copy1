//Dette kode er hvordan tabellen ser ud og indeholder

import { sequelize } from "../Config/db.sequelize.js";
import { Model, DataTypes } from "sequelize";

class developerModel extends Model {}

developerModel.init({
    id: {
        type: DataTypes.BIGINT, //ID typen skal være tal
        allowNull: false, //må ikke efterlades tom
        primaryKey: true //ID er den primære nøgle og er unik. Intet kan hedde det samme
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'developer',
    freezeTableName: false,
    underscored: true,
    timestamps: false
})

export default developerModel