import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          👋 Hi, I'm Vinay Pandey
          <br /><br />
          I'm a passionate full-stack developer and a final-year B.Tech student at IET Lucknow.
          I love building web applications using the MERN stack and solving real-world problems
          with clean, efficient code.
          <br /><br />
          With a strong foundation in Data Structures and Algorithms, I actively sharpen my
          coding skills on platforms like LeetCode and GFG. My current focus is on:
          <br />
          - Developing responsive frontends using ReactJS + Tailwind CSS
          <br />
          - Building robust backends with Node.js & Express
        </p>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <br />
        <ul>
          <li>
            <strong>B.Tech in Electrical Engineering</strong>
            <br />
            Institute of Engineering and Technology (IET), Lucknow
            <br />
            2022 – 2026 (Ongoing)
          </li>
          <br />
          <li>
            <strong>Intermediate (Class 12th)</strong> – PCM
            <br />
            Shree Mahaprabhu Public School
            <br />
            Year: 2021 | Percentage: 93.6%
          </li>
          <br />
          <li>
            <strong>High School (Class 10th)</strong>
            <br />
            Shree Mahaprabhu Public School, Prayagraj
            <br />
            Year: 2019 | Percentage: 89.4%
          </li>
        </ul>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <br />
        <span>
          Comfortable with JavaScript and C++
          <br />
          Familiar with React.js, Node.js, Express.js, MongoDB, HTML, CSS, and Tailwind CSS.
          <br />
          Learning and applying frontend design principles and component-based architecture.
          <br />
          Actively improving in Data Structures and Algorithms (DSA), and enjoy working in collaborative environments.
        </span>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <br />
        <span>
          <ul>
            As a fresher, I’m in the early stages of building my experience through self-learning and hands-on practice.
            I’ve been working on small personal projects to apply what I learn and to gradually develop confidence in
            full-stack web development.
            <br />
            <li>
              Created simple web apps like a chat application, todo manager, and news feed using technologies like React,
              Node.js, and MongoDB.
            </li>
            <li>
              Participated in collaborative coding with peers to strengthen problem-solving and teamwork.
            </li>
            <li>
              Exploring opportunities like internships, freelance tasks, and open-source contributions to gain more
              real-world exposure.
            </li>
          </ul>
        </span>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <br />
        <span>
          <ul>
            <li>Regularly practicing DSA on platforms like LeetCode and GeeksforGeeks.</li>
            <li>Built and deployed a few beginner-level projects using MERN stack.</li>
            <li>Encouraged by peers for having a neat and beginner-friendly portfolio.</li>
          </ul>
        </span>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to keep learning and improving as a developer. I aim to build useful, beginner-friendly
          applications while exploring new tools and concepts. I believe in growing step by step, staying curious,
          and being open to opportunities that help me learn and contribute meaningfully.
        </p>
      </div>
    </div>
  );
}

export default About;
