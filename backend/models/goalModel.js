const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,   //the timestamps: true option automatically adds two fields to the schema: createdAt and updatedAt. These fields are used to track when a document is created and last updated.
  }
);

module.exports = mongoose.model('Goal', goalSchema);