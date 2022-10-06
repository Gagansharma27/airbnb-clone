import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="Home">

      <Banner />

      <div className="home__section">
      <Card
        src="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"
        title="Maldives"
        description="activities we can do together"
      />
      <Card
        src="https://a0.muscache.com/im/pictures/fa2ed873-e726-4e6d-ab1a-28bc7c69d805.jpg?im_w=720"
        title="Thailand"
        description="activities we can do together"
      />
      <Card
        src="https://a0.muscache.com/im/pictures/fda8a905-2346-4b5e-8372-191d6c5cba0a.jpg?im_w=720"
        title="Male,Maldives"
        description="activities we can do together"
      />
      </div>
      <div className="home__section">
      <Card
        src="https://a0.muscache.com/im/pictures/75571264/70349025_original.jpg?im_w=720"
        title="Maldives"
        description="activities we can do together"
      />
      <Card
        src="https://a0.muscache.com/im/pictures/8b3e9a21-5c0f-4da5-825e-a229420e4564.jpg?im_w=720"
        title="paleopoli"
        description="activities we can do together"
      />
      <Card
        src="https://a0.muscache.com/im/pictures/miso/Hosting-29788730/original/5f2e7651-000f-476f-9e1a-359f8164a7c4.jpeg?im_w=720"
        title="North Central province"
        description="activities we can do together"
      />
      </div>
    </div>
  );
}

export default Home;
