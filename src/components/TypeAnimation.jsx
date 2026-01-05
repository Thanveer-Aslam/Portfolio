import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Developer, Web Designer & UI/UX Designer",
        2000, // wait 2s after typing for every time
        "",   // triggers letter-by-letter deletion
        1000  // wait 1s before restarting
      ]}
      wrapper="span"
      speed={50}           // typing speed
      deletionSpeed={30}   // smooth deletion speed
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block' }}
    />
  );
};

export default TextAnimation;
