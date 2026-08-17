import { Schema, model, models, type InferSchemaType } from "mongoose";

const TagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    questions: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export type ITag = InferSchemaType<typeof TagSchema>;

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
