
module.exports = (sequelize, DataTypes) => { 
    
    var Categories = sequelize.define('ProductCategories',{

        CategoryId: {
            type: DataTypes.INTEGER
        },
        CatergoryName: {
            type: DataTypes.STRING
        },

    },
    {
        timeStamps: false
    });

    return Categories;
};