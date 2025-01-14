import "../css/About.css";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="column section-container about large-col-1"
      >
        <h2>Who am I?</h2>
        <div className="row xlarge-col-1 large-col-1">
          <div className="column about-textbox xlarge-col-075 large-col-1">
            <p>
              A Master's student in computer science at the University of
              Gothenburg. I consider myself to be a quick learner and like a
              good challenge as it can usually pose an opportunity to learn
              something new.
            </p>
            <p></p>
            <p>
              While I stay busy with various projects, I also try to find some
              free time to recharge and unwind while engaging in my hobbies:
              playing video games, binge-reading webtoons, or experimenting with
              coffee.
            </p>
            <p>
              You can reach me at{" "}
              <span className="text-highlighted">
                annapawlukiewicz.contact@gmail.com
              </span>
            </p>
          </div>
          <div className="favorite-tools-container xlarge-col-025 large-col-1">
            <div>Languages</div>
            <div>Libraries, Frameworks OR front/back</div>
            <div>
              Other meaningful skills: soft arch, leadership, management
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
