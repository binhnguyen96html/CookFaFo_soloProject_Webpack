const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Menu = require("../models/menuModel");
const menu = require("../data/menu");
const User = require("../models/userModel");
const user = require("../data/user");
const Product = require("../models/productModel");
const product = require("../data/product");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Menu.deleteMany();
    await Product.deleteMany();

    const createUsers = await User.insertMany(user);
    const adminUser = createUsers[0]._id;

    const sampleMenu = menu.map((menu) => {
      return { ...menu, user: adminUser };
    });
    await Menu.insertMany(sampleMenu);

    const sampleProduct = product.map((pro) => {
      return { ...pro, user: adminUser };
    });
    await Product.insertMany(sampleProduct)


    console.log("Data imported");
    // The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code.
    //If code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set.
    //Node.js will not terminate until all the 'exit' event listeners are called.
    process.exit();
  } catch (error) {
    console.log(`Error for import data`, error);

    //To exit with a 'failure' code:
    //The shell that executed Node.js should see the exit code as 1.
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Menu.deleteMany();
    await Product.deleteMany();

    console.log("destroy data sucessfully");
    process.exit();
  } catch (error) {
    console.log("Cannot destroy data ", error);
    process.exit(1);
  }
};

//The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
