/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = tweetData => {
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
<br>
  `;
  return tweetElement;
};


const renderTweets = function(tweets) {
  // loops through tweets
  for (const tweet in tweets) {
  // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweets[tweet]);
    // takes return value and appends it to the tweets container
    $('.tweet-list').append($tweet);
    //console.log($tweet);
  }
};

//call to post tweets
const sentTweets = () => {
  $("#form").submit(function(event) {
    event.preventDefault();
    const $tweet = $(this).serialize();
    const tweetContent = $tweet.split('=')[1];
    if (tweetContent === '' || tweetContent === null) {
      alert('Content is empty!');
      return;
    }
    if (tweetContent.length > 140) {
      alert(`Content is too long`);
      return;
    }
    //post data to sever
    const url = '/tweets';
    $.post(url, $tweet);
    const tar = $(this).parent().siblings('.tweet-list');
    //clear page
    $(tar).empty();
    //reload from database
    loadTweets();
  });
};

//call to get and show tweets
const loadTweets = () => {
  // sending the requet to /tweets
  const url = 'http://localhost:8080/tweets';
  $.ajax({
    url: url,
    method: 'GET',
  })
    .done((results) => {
      console.log(results);
      renderTweets(results);
    })
    .fail((err) => {
      console.log(`Error: ${err.message}`);
    })
    .always(() => {
      console.log('request to http://localhost:8080/tweets done');
    });
};

$(document).ready(function() {
  //call to post tweets
  sentTweets();
  //call to get and show tweets
  loadTweets();
  
});

