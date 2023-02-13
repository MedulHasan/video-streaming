const app = require("./app");
const { connect } = require("./modules/db/mongo");

const PORT = 4000;

const setup = async () => {
    const { updateSchema } = require("./modules/models/video/schema");
    await updateSchema();
};

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    const db = await connect();
    await setup();

    app.use("/", (req, res) => {
        res.send(`Don't match any routes`);
    });

    console.log(`Application setup completed successfully`);
});
