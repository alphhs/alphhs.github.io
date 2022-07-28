import uke from "./images/uke.jpg";
import "./STYLE/About.css";
export const About = () => {
  return (
    <div className="app__about">
      <div className="app__about-title">
        <h1>ABOUT ME</h1>
      </div>
      <div className="app__about-div reading">
        <div className="reading-content">
          <p>
            <span className="reading-content-span">READING</span>
            <br />
            I've been a passionate bookworm, since I was a child. At fist, I
            mostly read fictions, of which I enjoyed the sci-fi ones the most.
            Just pondering about the future possibility of mankind's prosperity
            in the long run made me excited for what future has to offer.
            Emotionally dynamic, complex novels like GodFather taught me
            relations and dynamics between family and societal groups. <br />
            Strangely enough, the book that I fond of the most is a little novel
            called "Jonathan Livingstone The Seagull" by Richard Bach. Despite
            its size of merely hundred somethings pages, it manages to tell a
            beautiful story of hardships and overcoming of an individial that's
            too peculiar to exist in a typical manner. <br />
            Lately I've been reading a lot of non-fictions. Philosophy and
            Psychology have been one of my favorite topics.
          </p>
          <div className="reading-img-wrapper">
            <img
              className="reading-img"
              src="https://images-na.ssl-images-amazon.com/images/I/41JkbgHl6eL.jpg"
              alt="Livingstone book"
            />
          </div>
        </div>
      </div>
      <div className="app__about-div music">
        <div className="reading-content">
          <p>
            <span className="reading-content-span">MUSIC</span>
            <br />
            At first glance, I know, I don't give off "conventional musician"
            vibes, as I grew up super nerdy /being into math and books and
            such/. In spite of all that, music really is a irreplaceable part of
            my life. <br />
            When I was in elementary school, my grandparents made a wise
            decision of making me go to music school, as they thought I was
            lacking hugely in the social department. There I learned how to read
            sheet music, how to play the morin khuur, how to play piano etc.
            Most importanly, I discovered my appreciation for music. <br />
            I've been playing morin khuur for over a decade now. Few years ago,
            I picked up ukulele and guitar and have been playing them ever
            since. I made dozens of covers of my favorite songs and also wrote
            some originals as well. You can check them out{" "}
            <a
              className="reading-content-link"
              href="https://www.facebook.com/media/set/?vanity=alphhs.ariunbileg&set=a.631083644411737"
            >
              here.
            </a>
          </p>
          <div className="reading-img-wrapper">
            <img
              className="reading-img"
              src="https://images.unsplash.com/photo-1531651008558-ed1740375b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Livingstone book"
            />
          </div>
        </div>
      </div>
      <div className="app__about-div cubing">
        <div className="reading-content">
          <p>
            <span className="reading-content-span">CUBING</span>
            <br />
            I've always enjoyed to challenge my intellect in some ways. Among
            them, I found solving rubik's cube to be the most entertaining.{" "}
            <br />
            Regarding that the number of possible permutations of the regular
            3x3x3 cube is higher than the amount of atoms in the universe, the
            idea of some super skilled cubers can solve them under 5 or so
            seconds is mind boggling. <br />
            I've been actively cubing since the beginning of this year, mainly
            because I've managed to invest in a higher quality cube, which made
            the learning/solving process. way easier and more enjoyful
          </p>
          <div className="reading-img-wrapper">
            <img
              className="reading-img"
              src="https://images.unsplash.com/photo-1562975327-29a8cbfd5be6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
              alt="Livingstone book"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
