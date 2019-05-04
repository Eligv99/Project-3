
module.exports = (sequelize, DataTypes) => {
    
    var OrderDetails = sequelize.define("OrderDetails", {

        DetailId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        DetailOrderId: {
            type: DataTypes.INTEGER
        },
        DetailProductId: {
            type: DataTypes.INTEGER
        },
        DetailsName: {
            type: DataTypes.STRING
        },
        DetailPice: {
            type: DataTypes.FLOAT
        },
        DetailStock: {
            type: DataTypes.INTEGER
        },

    });

    return OrderDetails;

};