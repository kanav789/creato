import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  username: {
    type: String,
  },
  bio: {
    type: String,
  },
  github: {
    username: {
      type: String,
    },
    showContribution: {
      type: Boolean,
      default: true,
    },
  },
  whatiamdoing: {
    type: [String],
    default: [],
  },
  importantLinks: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  skills: {
    type: [String],
    default: [],
  },
  experiences: {
    type: [
      {
        startDate: String,
        endDate: String,
        role: String,
        company: String,
        description: String,
      },
    ],
    default: [],
  },
  projects: {
    type: [
      {
        title: String,
        details: String,
        GitHubLink: {
          type: [String],
          default: [],
        },
        liveLink: String,
      },
    ],
    default: [],
  },
});

const UserProfile = mongoose.model("UserProfile", ProfileSchema);

export default UserProfile;
