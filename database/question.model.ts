import { Schema, model, models, type InferSchemaType } from "mongoose";

const QuestionSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    views: { type: Number, default: 0 },
    answers: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

QuestionSchema.index({ author: 1, createdAt: -1 });

export type IQuestion = InferSchemaType<typeof QuestionSchema>;

const Question = models.Question || model("Question", QuestionSchema);

export default Question;
