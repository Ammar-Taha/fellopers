import { Schema, model, models, type InferSchemaType } from "mongoose";

const VoteSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    id: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, enum: ["question", "answer"], required: true },
    voteType: { type: String, enum: ["upvote", "downvote"], required: true },
  },
  { timestamps: true, id: false },
);

VoteSchema.index({ author: 1, id: 1, type: 1 }, { unique: true });
VoteSchema.index({ id: 1, type: 1, voteType: 1 });

export type IVote = InferSchemaType<typeof VoteSchema>;

const Vote = models.Vote || model("Vote", VoteSchema);

export default Vote;
