import React from "react";
import "../../App.css";
import "./AboutUs.css";

function AboutUs() {
  return (
    <main className="content">
      <div className="content__section">
        <p className="content__section content__section-title">
          Intro - wherein I ramble for a moment or three...
        </p>
        <p className="content__section content__section-blurb">
          The workings of the human thought process are an amazingly complex and
          beautiful thing. We can't really describe or comprehend it's inner
          workings to any great extent. Two minds can come to the same
          conclusion by completely different processes; yet those same two can
          also, by using the same exact process (granted, an extreme
          coincidence), come to entirely different end results.
        </p>
        <p className="content__section content__section-blurb">
          Don't let my curmudgeonly tone fool you into thinking that I'm railing
          at or belittling anyone; it's just that I don't think like you other
          humans, at all. I do love my fellow man, but I swear I lose brain
          cells everytime someone asks me to explain what I just said. It can be
          so damn frustrating for me... Deep down I really and truly detest
          having to take the time to rearrange my thoughts in a manner easy for
          others to understand; but I do understand the need.
        </p>
        <p className="content__section content__section-blurb">
          The teachers always complained that I didn't show my work; I doubt
          they would have understood it if I had. I didn't have any of my
          epiphanies or follow any of my more interesting mental tangents in
          anything resembling a 'normal' mental state. I think in a tangential
          manner with everything arranged within a three dimensional construct
          so I can manipulate the data to test for the best course of action.
        </p>
        <p className="content__section content__section-blurb">
          I know, I know... It sounds convoluted and time-consuming; but it
          seems to work well for me. I get things done and then store everything
          I see for use as a future data point in some problem I've set myself
          to solve. With that said, let's get started and hope things don't
          'esplode' all over us...
        </p>
      </div>
      <div className="content__section">
        <p className="content__section content__section-title">
          the Gist - So what exactly is 'a Committee of Lunatics'?
        </p>
        <p className="content__section content__section-blurb">
          Each and every one of us has a 'Committee of Lunatics' within us.
          These are the facets that make us who we are; the voices you hear when
          no one else is speaking (and sometimes when they are). A very few of
          us can actually talk back and forth between each facet, using this
          information to better ourselves and those around us. After all, deep
          down they are all just parts of the whole; just another of those
          glorious things that we humans take for granted.
        </p>
        <p className="content__section content__section-author">
          {">"} Jerry Jackson aka Uncle Tallest
        </p>
      </div>
    </main>
  );
}

export default AboutUs;
