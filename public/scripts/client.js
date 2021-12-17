/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const addEvents = () => {
  
  // register two events to the tweets area, when mouse over/out, the shadow will on/off;
  const tweet = $('.tweet-list article');
  $(tweet).on('mouseover', function() {
    //console.log(tweet);
    $(this).css("box-shadow", '4px 4px slategrey');
    
  });

  $(tweet).on('mouseout', function() {
    $(this).css("box-shadow", '');
  });

  // register two pair of events to the tweets icon area, when mouse over/out, the color and cursor will change;
  const obj = $(tweet).find('i');
  for (const icon of obj) {
    $(icon).on('mouseover', function() {
      $(this).css("cursor", 'hand');
      $(this).css("color", 'orange');
    });
    $(icon).on('mouseout', function() {
      $(this).css("cursor", 'pointer');
      $(this).css("color", '');
    });
  }
};
//Preventing XSS with Escaping
const escapeF = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

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
  <p class = 'p'>
  ${escapeF(tweetData.content.text)}
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
  for (const tweet in tweets.reverse()) {
  // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweets[tweet]);
    // takes return value and appends it to the tweets container
    $('.tweet-list').append($tweet);
    //addEvents
    addEvents();
  }
};

//call to post tweets
const sentTweets = () => {
  
  $("#form").submit(
    function(event) {
      event.preventDefault();
      const $tweet = $(this).serialize();
      const tweetContent = $tweet.split('=')[1];
      if (tweetContent === '' || tweetContent === null) {
        $(this).parent().find("div.alert.1").show();
        return;
      }
      if (tweetContent.length > 140) {
        $(this).parent().find("div.alert.2").show();
        return;
      }
      //clear page
      const tar = $(this).parent().siblings('.tweet-list');
      $(tar).empty();
      //post data to sever
      const url = '/tweets';
      $.post(url, $tweet, () => {
        loadTweets();//make sure the post done then do the load
      });
      //clear the form input
      $(this).find('#tweet-text').val('');
      //restore the counter
      $(this).find('.counter').val('140');
      //hide error message
      $(this).parent().find("div.alert.1").hide();
      $(this).parent().find("div.alert.2").hide();
    }
  );
  
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
      renderTweets(results);//
    })
    .fail((err) => {
      console.log(`Error: ${err.message}`);
    })
    .always(() => {
      const time = new Date();
      console.log(`request to http://localhost:8080/tweets done${time}`);
    });
};

$(document).ready(function() {

  //call to get and show tweets
  loadTweets();

  //call to post tweets
  sentTweets();

});
