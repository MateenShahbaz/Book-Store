import mongoose from "mongoose"

const bookSchema = mongoose.Schema(
    {
        title:{
            type: String,
            // required : [true, "Enter tilte"],
        },
        author: {
            type: String,
            // required: [true, "Enter author name"],
        },
        publishYear: {
            type: Number,
            // required: [true, "Enter publish Year"],
        },
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Cat', bookSchema);