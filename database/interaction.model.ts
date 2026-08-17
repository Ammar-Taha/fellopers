import { Schema, model, models, type InferSchemaType } from "mongoose";

const InteractionSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true },
    actionId: { type: Schema.Types.ObjectId, required: true },
    actionType: { type: String, required: true },
  },
  { timestamps: true },
);

InteractionSchema.index({ user: 1, action: 1, actionId: 1 });
InteractionSchema.index({ actionId: 1, actionType: 1 });

export type IInteraction = InferSchemaType<typeof InteractionSchema>;

const Interaction =
  models.Interaction || model("Interaction", InteractionSchema);

export default Interaction;
