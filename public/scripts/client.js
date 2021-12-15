/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

const createTweetElement = tweet => {
  let tweetElement = `
  <article>
  <header>
    <div>
      <img src="${tweetData.user.avatars}">
      <p>${tweetData.user.name}</p>
    </div>
    <div>${tweetData.user.handle}</div>
  </header>
  <p id='content'>
  ${tweetData.content.text}
  </p>
  <footer>
  <div>${timeago.format(tweetData.created_at)}</div>
  <div id = 'icon'>
    <i class="fa-solid fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
  </div>
  </footer>
</article>
  `;
  return tweetElement;
};

// Test / driver code (temporary). Eventually will get this from the server.


const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$(document).ready(function() {
  $('.tweet-list').append($tweet);
});
// to add it to the page so we can make sure it's got all the right elements, classes, etc.