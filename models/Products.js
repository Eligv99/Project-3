
module.exports = (sequelize, DataTypes) => {

    var Products = sequelize.define('Product', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.FLOAT
        },
        description: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.FLOAT
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    },
    {
        timeStamps: false
    });

    return Products;
};