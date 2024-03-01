const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
        },
        booked:{
            type:Number,
        }
    }
);

const slotData = mongoose.model("slotData", slotSchema);

module.exports = slotData;