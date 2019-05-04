
module.exports = (sequelize, DataTypes) => {

    var Config = sequelize.define('Config', {
        
       
        config_path: {
            type: DataTypes.STRING
        },
        config_path_value: {
            type: DataTypes.STRING
        }

    },
    {
        timeStamps: false
    });
    
    return Config;

};

