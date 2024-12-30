import '../css/About.css'

export default function About() {

  return (
    <>
      <div className="about-container">
        
        <h1>Anna Pawlukiewicz</h1>
        <p>A recent graduate from Linnaeus University
          <br />with a Bachelor Degree in Computer Science 
          <br />specializing in <span className="text-highlighted">Software Technology</span></p>
        <p>Planning to further pursue education <br />in the form of a Master Degree</p>

        <h2>IT skills</h2>
        <ul>
          <li>comfortable with <span className="text-highlighted">Java</span>,
            <span className="text-highlighted"> Python</span>, 
            and <span className="text-highlighted">web development</span>
            <div className='about-icon-box about-li-box'>
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/76dcb1a821ff8d9e574560a36133a9bf05f91778/src/assets/icons/icon_python.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/76dcb1a821ff8d9e574560a36133a9bf05f91778/src/assets/icons/icon_numpy.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/76dcb1a821ff8d9e574560a36133a9bf05f91778/src/assets/icons/icon_java.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/76dcb1a821ff8d9e574560a36133a9bf05f91778/src/assets/icons/icon%20gradle.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/76dcb1a821ff8d9e574560a36133a9bf05f91778/src/assets/icons/icon_html.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/5430c6d019ef38b4db361c828f663450b50b7406/src/assets/icons/icon_css.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/5430c6d019ef38b4db361c828f663450b50b7406/src/assets/icons/icon_js.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/23a982a76af50d4b845b69cb5374e7ef7fcbc4e0/src/assets/icons/icon_nodejs.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/23a982a76af50d4b845b69cb5374e7ef7fcbc4e0/src/assets/icons/icon_vite.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/23a982a76af50d4b845b69cb5374e7ef7fcbc4e0/src/assets/icons/icon_react.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/23a982a76af50d4b845b69cb5374e7ef7fcbc4e0/src/assets/icons/icon_express.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/76dcb1a821ff8d9e574560a36133a9bf05f91778/src/assets/icons/icon_mongodb.svg' />
              <img className='inline-icon' src='https://raw.githubusercontent.com/pvlkvc/personal-website/76dcb1a821ff8d9e574560a36133a9bf05f91778/src/assets/icons/icon_mysql.svg' />
            </div>
          </li> 
          <li>basic databases, networks, and machine learning knowledge
            <div className='about-li-box'>I can intergrate those into code with no issue.</div>
          </li>
          <li>software design and architecture
            <div className='about-li-box'>I know the importance of planning out and documenting the software before jumping straight into code.</div>
          </li>
        </ul>

        <h2>Other meaningful skills</h2>
        <ul>

          <li>learning and understanding new things pretty fast
            <div className='about-li-box'>
              I genuinely think that&apos;s my quality. It&apos;s not just namecalling.
            </div>
          </li>

          <li><span className='text-highlighted'>critical thinking</span>
            <div className='about-li-box'>
              Or as I like to call it: &quot;simplifying things&quot;. So far it has been most useful for stuff like presentations, explaining, or taking notes. Hopefully I can utilize it in a more professional situation.
            </div>
          </li>

          <li>surprisingly good <span className="text-highlighted">leadership</span> and <span className="text-highlighted">management</span> skills
            <div className='about-li-box'>
              I often give other people a chance to take the lead first but will absolutely take over myself if things are going messy.
            </div>
          </li>
        </ul>

        <h2>My personality</h2>
        <ul>

          <li>an introvert
            <div className='about-li-box'>
              I score 99% introvert on those personality tests. Will stay mostly quiet when there&apos;s a crowd but will also talk a lot in smaller groups.
            </div>
          </li>

          <li>honest and straightforward type
            <div className='about-li-box'>
              Sometimes I just think out loud. I also think that lying is, simply speaking, troublesome...
            </div>
          </li>

          <li>&quot;positively crazy&quot;
            <div className='about-li-box'>
              Whatever that means. I don&apos;t know but that&apos;s what I&apos;ve been called a few times before. Not sure if it&apos;s good or bad. Depends, maybe?
            </div>
          </li>
          <li>hobbies include video games, webtoons, and coffee
            <div className='about-li-box'>
              I like coffee enough to call it a hobby. I even make cute <span className='doodles-word'><span className='text-hoverable-indicator'>doodles</span>
              <img className='doodles-image' src='https://github.com/pvlkvc/personal-website/blob/main/src/assets/mitch_face.png?raw=true'/></span> in my lattes.
            </div>
          </li>

        </ul>

        <p>This entire website is meant to serve as my portfolio. Check out this section here to see some of the things that I can do!</p>
      </div>
    </>
  )
}
