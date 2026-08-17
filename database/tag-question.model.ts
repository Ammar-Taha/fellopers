import { Schema, model, models, type InferSchemaType } from "mongoose";

const TagQuestionSchema = new Schema(
  {
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    tagId: { type: Schema.Types.ObjectId, ref: "Tag", required: true },
  },
  { timestamps: true },
);

TagQuestionSchema.index({ question: 1, tagId: 1 }, { unique: true });
TagQuestionSchema.index({ tagId: 1 });

export type ITagQuestion = InferSchemaType<typeof TagQuestionSchema>;

const TagQuestion =
  models.TagQuestion || model("TagQuestion", TagQuestionSchema);

export default TagQuestion;
