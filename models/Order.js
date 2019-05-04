
module.exports = (sequelize, DataTypes) => {

    var Orders = sequelize.define( "Orders" , {

        OrderID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        OrderUserID: {
            type: DataTypes.INTEGER
        },
        OrderAmount: {
            type: DataTypes.FLOAT
        },
        OrderShippingName: {
            type: DataTypes.STRING
        },
        OrderShippingAdress: {
            type: DataTypes.STRING
        },
        OrderShippingAdrress2: {
            type: DataTypes.STRING
        },
        OrderCity: {
            type: DataTypes.STRING
        },
        OrderState: {
            type: DataTypes.STRING
        },
        OrderZip: {
            type: DataTypes.STRING
        },
        OrderCountry: {
            type: DataTypes.STRING
        },
        OrderPhone: {
            type: DataTypes.STRING
        },
        OrderFax: {
            type: DataTypes.STRING
        },
        OrderShipping: {
            type: DataTypes.FLOAT
        },
        OrderTax: {
            type: DataTypes.FLOAT
        },
        OrderEmail: {
            type: DataTypes.STRING
        },
        OrderDate: {
            type: DataTypes.DATE,
        },
        OrderShipped: {
            type: DataTypes.INTEGER
        },
        OrderTrackingNumber: {
            type: DataTypes.STRING
        }

    },
    {
        timeStamps: false
    });

    return Orders;
};