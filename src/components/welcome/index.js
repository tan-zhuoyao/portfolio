import Profile from "../../assets/profile.jpeg";

const Welcome = () => {
  return (
    <div class="h-full text-white">
      <div class="h-16"></div>
      <div class="h-max">
        <img src={Profile} alt="profile" />
      </div>
    </div>
  );
}

export default Welcome;