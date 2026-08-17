import { Schema, model, models, type InferSchemaType } from "mongoose";

const CollectionSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  },
  { timestamps: true },
);

CollectionSchema.index({ author: 1, question: 1 }, { unique: true });
CollectionSchema.index({ question: 1 });

export type ICollection = InferSchemaType<typeof CollectionSchema>;

const Collection = models.Collection || model("Collection", CollectionSchema);

export default Collection;
