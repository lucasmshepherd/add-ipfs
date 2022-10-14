import React from 'react'
import styles from '../styles/components/splash.module.sass'
import $ from 'jquery'
import Link from 'next/link';

export default class Splash extends React.Component {

  componentDidMount () {

    $('body').removeClass('entered');

    const MESSAGES = [];
    MESSAGES.push({delay:0,    text:"The Anarchist Development DAO is geared toward"});
    MESSAGES.push({delay:1200, text:"the rapid advancement of a more decentralized"});
    MESSAGES.push({delay:2200, text:"society while providing the means to fund projects"});
    MESSAGES.push({delay:3600, text:"without censorship from central authorities."});
    //MESSAGES.push({delay:5200, text:"from central authorities."});

    const $container = $("#introductionWrapper");
    const $message = $("#introduction");
    const $animate = $("#introductionAnimate");
    let $paragraph = null;

    const scramble = function(element, text, options) {

      // Default properties.
      let asc, end, j;
      let i;
      let letter;
      const defaults = {
        probability: 0.2,
        glitches: '-|@*%/\\',
        blank: '',
        duration: text.length * 40,
        ease: 'easeInOutQuad',
        delay: 0.0
      };

      // Convert the element to a jQuery object and build the settings object.
      const $element = $(element);
      const settings = $.extend(defaults, options);

      // Convenience methods.
      const shuffle = function() { if (Math.random() < 0.5) { return 1; } else { return -1; } };
      const wrap = (text, classes) => `<span class="${classes}">${text}</span>`;

      // Glitch values.
      const glitchText = settings.glitches;
      const glitchCharacters = glitchText.split('');
      const glitchLength = glitchCharacters.length;
      const glitchProbability = settings.probability;
      const glitches = ((() => {
        const result = [];
        for (letter of Array.from(glitchCharacters)) {       result.push((wrap(letter, 'glitch')));
        }
        return result;
      })());

      // Ghost values.
      const ghostText = $element.text();
      const ghostCharacters = ghostText.split('');
      const ghostLength = ghostCharacters.length;
      const ghosts = ((() => {
        const result1 = [];
        for (letter of Array.from(ghostCharacters)) {       result1.push((wrap(letter, 'ghost')));
        }
        return result1;
      })());

      // Text values.
      const textCharacters = text.split('');
      const textLength = textCharacters.length;

      // Order and output arrays.
      const order = __range__(0, textLength, false).sort($(this).shuffle);
      const output = [];

      // Build the output array.
      for (j = 0, i = j, end = textLength, asc = 0 <= end; asc ? j < end : j > end; asc ? j++ : j--, i = j) {
        const glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
        const glitchCharacter = glitches[glitchIndex];
        const ghostCharacter = ghosts[i] || settings.blank;
        const addGlitch = Math.random() < glitchProbability;
        const character = addGlitch ? glitchCharacter : ghostCharacter;
        output.push(character);
      }

      // Animate the text.
      const object = {value:0};
      const target = {value:1};
      const parameters = {
        duration:settings.duration,
        ease:settings.ease,
        step() {
          let asc1, end1;
          const progress = Math.floor(object.value * (textLength - 1));
          for (i = 0, end1 = progress, asc1 = 0 <= end1; asc1 ? i <= end1 : i >= end1; asc1 ? i++ : i--) {
            const index = order[i];
            output[index] = textCharacters[index];
          }
          return $element.html(output.join(''));
        },
        complete() {
          return $element.html(text);
        }
      };

      // Animate the text.
      return $(object).delay(settings.delay).animate(target, parameters);
    };

    const animate = function() {
      for (let index = 0; index < MESSAGES.length; index++) {
        const data = MESSAGES[index];
        const element = $paragraph.get(index);
        element.innerText = '';
        const options = {delay: data.delay};
        scramble(element, data.text, options);
      }
    };

    const initialise = function() {
      $animate.click(animate);
      for (let index = 0; index < MESSAGES.length; index++) { const text = MESSAGES[index]; $message.append("<p>"); }
      $paragraph = $container.find("p");
      animate();
    };

    initialise();

    function __range__(left, right, inclusive) {
      let range = [];
      let ascending = left < right;
      let end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
      }
      return range;
    }
  }

  render () {
    return (
      <>
        <div id="splash">
          <video className={styles.videobg} autoPlay muted loop preload="auto">
            <source src="/assets/video/bg-video2-opt2.mp4" type="video/mp4"/>
            <source src="/assets/video/bg-video2-opt2.webm" type="video/webm"/>
            <source src="/assets/video/bg-video2-opt2.ogg" type="video/ogg"/>
            Your browser does not support the video tag.
          </video>

          <div className={styles.wrapper} id="introductionWrapper">
            <div className={styles.introduction} id="introduction">

            </div>
            <Link href="/welcome"><div className="button close-splash">Press Enter</div></Link>
          </div>
        </div>
      </>
    )
  }
}