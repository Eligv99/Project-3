var models = require('../models')

module.exports = (sequelize, DataTypes) => {
    
    const Cart = sequelize.define('cart', {
        userId: {
          type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        quantity: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
      })

    return Cart;

};