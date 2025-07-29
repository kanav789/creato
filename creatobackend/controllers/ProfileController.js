import UserProfile from "../models/UserProfile.js";

export const CreateProfile = async (req, res) => {
  try {
    const { username, bio, importantLinks, skills, experiences, projects } =
      req.body;
    const user = req.user;

    if (!user || !user._id) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user found in request" });
    }

    if (!username || !bio) {
      return res.status(400).json({ message: "Username and bio are required" });
    }

    // Optional: Prevent duplicate profiles
    const existingProfile = await UserProfile.findOne({ userId: user._id });
    if (existingProfile) {
      return res.status(400).json({ message: "Profile already exists" });
    }

    const newProfile = new UserProfile({
      userId: user._id,
      username,
      bio,
      importantLinks,
      skills,
      experiences,
      projects,
    });

    await newProfile.save();

    res.status(201).json({
      message: "Profile created successfully",
      newProfile,
    });
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const ProfileUpdate = async (req, res) => {
  try {
    const body = req.body;
    const { id, username, bio, importantLinks, skills, experiences, projects } =
      body;
    const user = req.user;
    if (!user || !user._id) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user found in request" });
    }

    if (!id) {
      return res.status(400).json({ message: "Profile ID is required" });
    }
    const profile = await UserProfile.findOneAndUpdate(
      { _id: id, userId: user._id },
      {
        username,
        bio,
        importantLinks,
        skills,
        experiences,
        projects,
      },
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      profile,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
// create The whole profile controller

export const DeleteProfile =async(req,res)=>{
try {
  const user =req.user;
  const body = req.body;
  const {id} = body;
  if(!id){
    return res.status(400).json({message:"Profile ID is required"});
  }
  if(!user || !user._id){
    return res.status(401).json({message:"Unauthorized: No user found in request"});
  }
  const profile =await UserProfile.findOneAndDelete({_id:id,userId:user._id});
  if(!profile){
    return res.status(404).json({message:"Profile not found"});
  }

  res.status(200).json({
    message:"Profile deleted successfully",
  });




} catch (error) {
  
}
 


}




