import "../css/About.css";

export default function About() {
  return (
    <>
      <section id="about" className="column-centered section about large-col-1">
        <h2>About me</h2>
        <div className="row-centered xlarge-col-1 large-col-1">
          <div className="row-centered medium-col-025 small-col-1">
            <div className="profile-image"></div>
          </div>
          <div className="column about-textbox xlarge-col-075 large-col-1 medium-col-075 small-col-1">
            <p>
              A Master's student in computer science at the University of
              Gothenburg. I consider myself to be a quick learner and like a
              good challenge as it can usually pose an opportunity to learn
              something new.
            </p>
            <p>
              Being a fresh graduate, I meddle with different techs while
              looking for one to specialize in. Full stack, Java, Python, web,
              databases, networks, etc.
            </p>
            <p>
              While I stay busy with various projects, I also try to find some
              free time to recharge and unwind while engaging in my hobbies:
              playing video games, binge-reading webtoons, or experimenting with
              coffee.
            </p>
            <p>
              You can reach me at{" "}
              <span className="text-highlighted">
                annapawlukiewicz&#8203;.contact&#8203;@gmail.com
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
