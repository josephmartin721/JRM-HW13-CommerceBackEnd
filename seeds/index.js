const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedCategories();
    await seedProducts();
    await seedTags();
    await seedProductTags();
    process.exit(0);
};
seedAll();