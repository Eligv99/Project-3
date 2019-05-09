var models = require('../models')

module.exports = (sequelize, DataTypes) => {
    
    const Cart = sequelize.define('cart', {
        userId: {
          type: DataTypes.INTEGER,

          references: {
            model: 'User',
            key: 'id'
          },
          unique: 'user_product'
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
        qty: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
      })

    return Cart;

};