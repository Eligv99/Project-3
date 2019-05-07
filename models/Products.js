
module.exports = (sequelize, DataTypes) => {

    var Products = sequelize.define('Product', {

        productId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productName: {
            type: DataTypes.STRING
        },
        productPrice: {
            type: DataTypes.FLOAT
        },
        productDescription: {
            type: DataTypes.STRING
        },
        productImage: {
            type: DataTypes.STRING
        },
        productThumb: {
            type: DataTypes.STRING
        },
        productCategoryID: {
            type: DataTypes.INTEGER
        },
        productStok: {
            type: DataTypes.FLOAT
        },

    },
    {
        timeStamps: false
    });

    return Products;
};