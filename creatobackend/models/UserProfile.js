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
  importantLinks: {
    type: [String],
    default: [],
  },
  skills: {
    type: [String],
    default: [],
  },
  experiences: {
    type: [
      {
        startDate: Date,
        endDate: Date,
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
