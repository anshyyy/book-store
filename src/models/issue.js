const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the issue schema
const issueSchema = new Schema(
  {
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Closed"],
      default: "Open",
    },
    returnDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

// Define the Issue model
const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;
