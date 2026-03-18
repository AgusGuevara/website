import profile from "@/assets/images/itsame.webp";

const ProfilePicture: () => JSX.Element = () => {
  return (
    <div className="w-28 h-28 rounded-full overflow-hidden">
      <img
        src={profile}
        className="grayscale w-full h-full object-cover"
        alt="aguevara-pfp"
      />
    </div>
  );
};

export default ProfilePicture;
