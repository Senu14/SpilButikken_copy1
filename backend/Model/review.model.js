//Dette kode er hvordan tabellen ser ud og indeholder


import { sequelize } from "../Config/db.sequelize.js";
import { Model, DataTypes } from "sequelize";

DataTypes

class reviewModel extends Model { }

reviewModel.init({
    id: {
        type: DataTypes.INTEGER, //ID typen skal være tal
        autoIncrement: true, //Giver automatisk et nyt ID nummer
        allowNull: false, //Tillader ikke at ID feltet kan stå tomt
        primaryKey: true //ID er den primære nøgle og er unik. Intet kan hedde det samme
    },

    user_id: {
        type: DataTypes.BIGINT, //typen skal være tal mellem -9,223,372,036,854,775,808 til 9,223,372,036,854,775,807
        allowNull: false, //Tillader ikke at feltet kan stå tomt
    },

    game_id: {
        type: DataTypes.BIGINT,
        allowNull: false //Tillader ikke at feltet kan stå tomt
    },

    date: {
        type: DataTypes.DATE,
        allowNull: true //Tillader ikke at feltet kan stå tomt
    },

    title: {
        type: DataTypes.TEXT, //Alt kan skrive i feltet
    },

    comment: {
        type: DataTypes.TEXT
    },

    rating: {
        type: DataTypes.BIGINT 
    },

}, {
    underscored: true, //hvis der er nogen af collonerne er med underscore skal dette på 
                        //ellers vil underscoren blive fjerent og det næste ord vil starte 
                       //med stort 
    sequelize,
    modelName: review, //tabel navnet

})

export default reviewModel //ekportere koden