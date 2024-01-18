import React from "react";
import "./ConnectUs.css";
import BioBox from "../bioBox/BioBox";
// import { PostCard, Categories, PostWidget } from "../blog";

const posts = [
  {
    title: "Giving Back to Our Furry Friends",
    excerpt:
      "Thrilled to have donated to ASPCA, witnessing firsthand the impact on animal welfare.",
  },
  {
    title: "Fur-ever Love: Join Us in Supporting Animal Rescues",
    excerpt:
      'Embark on a journey of compassion as we unite to support and uplift animal rescues, spreading "fur-ever" love. 🐾💙',
  },
];

const bios = [
  {
    id: 1,
    name: "Judy Chue",
    image: "https://avatars.githubusercontent.com/u/114921268?v=4",
    githubLink: "https://github.com/judychuepursuit",
    aboutMe:
      "Aspiring Full-stack web developer, with 30 + years experience working as a Sr. Designer / Director for Masstige / Prestige consumer products.",
  },

  {
    id: 2,
    name: "Allahvel Salisbury",
    image:
      "https://cdn.discordapp.com/attachments/756738190219673693/1193047587796815872/119988077.jpg?ex=65ab4b26&is=6598d626&hm=9bfcb23d49c98f11cc574b9ac64e107c39da1d96c03c4d8a8a0c40654a9d6358&",
    githubLink: "https://github.com/AllahvelS",
    aboutMe:
      "Full Stack Web Developer interested in improving the relationship between humans and technology.",
  },
  {
    id: 3,
    name: "Angel Tirado",
    image:
      "https://media.discordapp.net/attachments/756738190219673693/1193048897933811742/IMG_0270.jpg?ex=65ab4c5f&is=6598d75f&hm=aa829c8e668e75eca9210db5567c293fc74320058d62ec31e407f614d9c79b0a&=&format=webp&width=610&height=610",
    githubLink: "https://github.com/atiradoGit88",
    aboutMe:
      "A full stack developer with Pursuit working on expanding the horizons of technology and music.",
  },
  {
    id: 5,
    name: "Sabri Mohiuddin",
    image:
      "https://cdn.discordapp.com/attachments/756738190219673693/1193047385723646052/122192203.png?ex=65ab4af6&is=6598d5f6&hm=5b8bbe5b10e03aee35732d9f1c4a082068a33b3878de977880fbf397e7ea61dc&",
    githubLink: "https://github.com/sabrimohiuddin",
    aboutMe:
      "Hello there! I am a Full Stack Software Developer with over 5 years of experience in developing high-quality software applications for various industries.",
  },
  {
    id: 4,
    name: "Kinu Wright",
    image:
      "https://cdn.discordapp.com/attachments/756738190219673693/1193047128830910504/122734380.png?ex=65ab4ab9&is=6598d5b9&hm=ec7a26ada3dc9298341a5e09baa9140b950c98eb161f5f9eddeb467f11bdb7b4&",
    githubLink: "https://github.com/wrightKinu",
    aboutMe:
      "Pursuit Fellow || Full Stack Developer The charismatic and captivating Kinu here, ready to tackle my current journey in becoming a full stack developer.",
  },
];

export default function ConnectUs() {
  return (
    <div className="connect-us">
      <div className="connect-us__header-picture"></div>
      <div className="connect-us__content">
        <div className="connect-us__connect">connect</div>
        <div className="connect-us__personal-mission">
          <p>
            The goal of change 4 change is to bring donating to everyone. our
            app serves to not only create an ease of access for individuals to
            donate to a cause they find personal to them, but also works to
            change the way people view donating by gamifying their experience.
          </p>
        </div>
        {/* <div className="connect-us__blogpage">
          <div className="connect-us__blog">
            {posts.map((post) => (
              <PostCard post={post} key={post.tile}/>
            ))}
          </div>
          <div className="connect-us__blogpost">
            <div className="connect-us__postwidget">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div> */}
        <div className="connect-us__bios">
          {bios.map((bio) => {
            return <BioBox key={bio.id} bio={bio} />;
          })}
        </div>
      </div>
    </div>
  );
}
