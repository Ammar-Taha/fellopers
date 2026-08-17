import { Schema, model, models, type InferSchemaType } from "mongoose";

const AnswerSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    content: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true },
);

AnswerSchema.index({ question: 1, createdAt: -1 });
AnswerSchema.index({ author: 1 });

export type IAnswer = InferSchemaType<typeof AnswerSchema>;

const Answer = models.Answer || model("Answer", AnswerSchema);

export default Answer;
