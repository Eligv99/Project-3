
module.exports = (sequelize, DataTypes) => {

    var Products = sequelize.define('Product', {

        ProductId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ProductName: {
            type: DataTypes.STRING
        },
        ProductPrice: {
            type: DataTypes.FLOAT
        },
        ProductDescription: {
            type: DataTypes.STRING
        },
        ProductImage: {
            type: DataTypes.STRING
        },
        ProductThumb: {
            type: DataTypes.STRING
        },
        ProductCategoryID: {
            type: DataTypes.INTEGER
        },
        ProductStok: {
            type: DataTypes.FLOAT
        },

    },
    {
        timeStamps: false
    });

    return Products;
};