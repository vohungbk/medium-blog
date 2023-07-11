const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log('Connect successfully!!!');
  } catch (error) {
    console.log({ error });
  }
}

module.exports = { connect };
