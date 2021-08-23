import { Button, Card, Navbar } from "react-bootstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useAuth } from "../../contexts/AuthContextProvider";
import MainNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MailContainer from "../Footer/MailContainer";

const Homepage = () => {
  const { handleLogout, user } = useAuth();
  AOS.init();
  let homepageBg = {
    width: "100%",
    height: "auto",
    display: "block",
    border: 0,
    margin: "0",
    outline: "0",
    padding: "0",
    verticalAlign: "baseline",
  };

  let tourSection = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "43.541vw",
    position: "absolute",
    top: "50%",
    right: "3%",
    transform: "translate(0%, -50%)",
    fontSize: "0",
    zIndex: 2,
    background: "transparent",
    border: "none",
  };
  let tourBtnA = {
    display: "block",
    // maxWidth: "11.875vw",
    background: "#EC87B2",
    margin: "0 auto",
    height: "5.104vw",
    lineHeight: "5.104vw",
    textAlign: "center",
    fontSize: "1.302vw",
    letterSpacing: "0.25px",
    boxSizing: "border-box",
    color: "#FFFFFF",
    marginTop: "1.56vw",
    fontFamily: "'Aclonica', sans-serif",
    fontHeight: "normal",
    fontStyle: "normal",
    border: "none",
  };
  let gradient = {
    position: "absolute",
    bottom: "-10%",
    zIndex: "0",
    width: "100%",
    height: "auto",
  };
  let dragonContainer = {
    zIndex: 3,
    position: "relative",
    width: "100%",
    height: "95vh",
    backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/PinkTexture_newsdfisdhfishdifygsdiygfsdi.png"})`,
    // backgroundColor: "rgb(231, 131, 174)",
    position: "relative",
    margin: "-100vh auto",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // minHeight: "100vh",
  };
  let dragonImage = {
    // height: "90%",
    // width: "70%",
    margin: "7vh auto",
    position: "absolute",
    zIndex: "9",
    left: "-15%",
    width: "83%",
    top: "-9.5%",
  };

  let dragonBtnA = {
    display: "block",
    // maxWidth: "11.875vw",
    backgroundColor: "rgb(145, 203, 219)",
    margin: "0 auto",
    height: "5.104vw",
    lineHeight: "5.104vw",
    textAlign: "center",
    fontSize: "1.302vw",
    letterSpacing: "0.25px",
    boxSizing: "border-box",
    color: "#FFFFFF",
    marginTop: "1.56vw",
    fontFamily: "'Aclonica', sans-serif",
    fontHeight: "normal",
    fontStyle: "normal",
    border: "none",
    padding: "3px 10px",
  };

  let merchContainer = {
    zIndex: 2,
    position: "relative",
    background: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/merchbgsoifjosirfjoisgvouggoejirgsoiengofina.jpg"}) 0 0 no-repeat`,
    margin: "100vh auto",
    textAlign: "center",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  let merchWrap = {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  };
  let merchImage = {
    width: "30vw",
    margin: "30vh 3vh",
  };

  let merchImageLast = {
    width: "30vw",
    margin: "15vh 3vh",
  };

  // opacity: 0.5;
  // filter: alpha(opacity=40);

  //   img:hover {
  //     opacity: 1.0;
  //     filter: alpha(opacity=100);
  // }
  let navFont = {
    display: "inline-block",
    verticalAlign: "middle",
    textDecoration: "none",
    lineHeight: 2,
    color: "#fff",
    transition: "all 0.5s ease-in-out",
    fontSize: "1.3vw",
    letterSpacing: "0.09vw",
    fontFamily: "'Gothic A1', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
    marginTop: "5vh",
  };
  let navMid = {
    lineHeight: 2.5,
    display: "inline-block",
    verticalAlign: "middle",
    textDecoration: "none",
    lineHeight: 2,
    color: "#fff",
    transition: "all 0.5s ease-in-out",
    fontSize: "1.3vw",
    letterSpacing: "0.09vw",
    fontFamily: "'Gothic A1', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
    marginTop: "5vh",
  };

  let cliqueChatContainer = {
    background: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/boxbgdesk.jpg"}) 0 0 no-repeat`,
    margin: "-100vh auto",
    textAlign: "center",
    backgroundAttachment: "fixed",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 104%",
    minHeight: "100vh",
    position: "relative",
    display: "-webkit-box",
    padding: "10vh",
  };
  let chatQuote = {
    color: "#fff",
    fontSize: "10vw",
    fontFamily: "'Aclonica', sans-serif",
  };

  let mailContainer = {
    zIndex: 4,
    position: "relative",
    fontSize: 0,
    background: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/bk-21.jpg"}) 0 0 no-repeat`,
    margin: "100vh auto 0",
    textAlign: "center",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "14vh",
  };

  let footerContainer = {
    position: "relative",
    zIndex: 999,
    fontSize: 0,
    background: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/textureftrsdkfjhsdiughsiugh.jpg"}) 0 0 no-repeat`,
    backgroundSize: "cover",
    margin: "0 auto",
    textAlign: "center",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "8vh",
  };
  let footerWrap = {
    textAlign: "center",
  };
  let copyrightWrapper = {
    textTransform: "lowercase",
    color: "#E999B6",
    letterSpacing: 0,
    lineHeight: 1.3,
    fontSize: "0.9vw",
    fontFamily: "'Gothic A1', sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    maxWidth: "40vw",
    margin: "0 auto",
    padding: "1.3vw 0",
  };

  return (
    <>
      <div>
        <div>
          <img
            style={homepageBg}
            src="https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/Desktopnewbg.png"
            alt=""
          />
        </div>

        <Card style={tourSection}>
          <Card.Img
            data-aos="zoom-out"
            data-aos-duration="2000"
            src="https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/tour_banner_0.png"
          />
          <Card.Body>
            <Link to="/tour">
              <Button style={tourBtnA}>VIEW ALL DATES</Button>
            </Link>
          </Card.Body>
        </Card>

        <div style={dragonContainer}>
          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            style={dragonImage}
            src="https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/dragon7aprdijnfdugjsdgsfggf.png"
            alt=""
          />
          <Card style={tourSection}>
            <Card.Img
              data-aos="zoom-out"
              data-aos-duration="2000"
              src="https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/presavetextapr7jfsdhbfhsdbfisdivfsbfv.svg"
            />
            <Card.Body>
              <Link to="/tour">
                <Button style={dragonBtnA}>LEARN MORE</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <img
          style={gradient}
          src="https://www.twentyonepilots.com/sites/g/files/g2000004896/f/202106/Desktop-gradient%403x-1.png"
          alt=""
        />

        <div style={merchContainer}>
          <div data-aos="zoom-in-up" data-aos-duration="3000" style={merchWrap}>
            <Link to="/merch">
              <img
                style={merchImage}
                src="https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/m1fuehfiehffhehohveihv.png"
                alt=""
              />
            </Link>

            <Link to="/merch">
              <img
                style={merchImage}
                src="https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/Merch-27.png"
                alt=""
              />
            </Link>

            <Link to="/merch">
              <img
                style={merchImageLast}
                src="https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/m3efirufheiuvhdousfvhdfv.png"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div style={cliqueChatContainer}>
          <span style={chatQuote}>
            SOMETIMES QUIET IS VIOLENT
            <br />
            <Link to="/chat">
              <Button style={dragonBtnA}>JOIN OUR CHAT</Button>
            </Link>
            <Link to="/mailSubscription">
              <Button style={dragonBtnA}>SUBSCRIBE TO OUR NEWS</Button>
            </Link>
          </span>
        </div>

        <div style={mailContainer}>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <img
              style={{
                width: "5vw",
                height: "5vw",
                cursor: "pointer",
                marginTop: "5vh",
                color: "white",
              }}
              src="https://image.flaticon.com/icons/png/512/220/220211.png"
              alt=""
            />
            <img
              style={{
                width: "5vw",
                height: "5vw",
                cursor: "pointer",
                marginTop: "5vh",
              }}
              src="https://image.flaticon.com/icons/png/512/220/220222.png"
              alt=""
            />
            <img
              style={{
                width: "5vw",
                height: "5vw",
                cursor: "pointer",
                marginTop: "5vh",
              }}
              src="https://image.flaticon.com/icons/png/512/220/220233.png"
              alt=""
            />
            <img
              style={{
                width: "5vw",
                height: "5vw",
                cursor: "pointer",
                marginTop: "5vh",
              }}
              src="https://image.flaticon.com/icons/png/512/220/220200.png"
              alt=""
            />
          </div> */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <a
              style={navFont}
              href="https://www.youtube.com/channel/UCBQZwaNPFfJ1gZ1fLZpAEGw"
              target="_blank"
            >
              YOUTUBE
            </a>
            <a style={navMid}> | </a>
            <a
              style={navFont}
              href="https://www.instagram.com/twentyonepilots/"
              target="_blank"
            >
              INSTAGRAM
            </a>
            <a style={navMid}> | </a>
            <a
              style={navFont}
              href="https://twitter.com/twentyonepilots"
              target="_blank"
            >
              TWITTER
            </a>
            <a style={navMid}> | </a>
            <a
              style={navFont}
              href="https://www.facebook.com/twentyonepilots"
              target="_blank"
            >
              FACEBOOK
            </a>
          </div>

          {/* <a style={navFont} href="#" target="_blank">
            SUBSCRIBE TO OUR NEWS
          </a> */}
        </div>

        <div style={footerContainer}>
          <div style={footerWrap}>
            <div style={copyrightWrapper}>
              <span>© 2021 copyright fbr and tøp</span>
              <br />
              <span>
                terms of use | privacy policy | ad choices | cookies policy | do
                not sell my personal information
              </span>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <MainNavbar handleLogout={handleLogout} />
    </>
  );
};

export default Homepage;
