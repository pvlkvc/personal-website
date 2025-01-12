import "../css/About.css";

export default function About() {
  return (
    <>
      <section id="about" className="column section-container about-container">
        <div className="row">
          <div className="about-picture-container">
            <img
              className="about-picture-image"
              src="src/assets/profile-square.jpg"
            />
          </div>

          <div className="column about-textbox">
            <h2>Who am I?</h2>
            <p>
              A Master's student in computer science at the University of
              Gothenburg. I consider myself to be a quick learner and like a
              good challenge as it can pose an opportunity to learn something
              new.
            </p>
            <p></p>
            <p>
              While I stay busy with various projects, I also try to find some
              free time to recharge and unwind while engaging in my hobbies:
              playing video games, binge-reading webtoons, or experimenting with
              coffee.
            </p>
          </div>
        </div>
        <div>Languages</div>
        <div>Libraries, Frameworks OR front/back</div>
        <div>Other meaningful skills: soft arch, leadership, management</div>
      </section>
    </>
  );
}
