document.getElementById("tweet").disabled = true;

document.getElementById("input").addEventListener("input", function (event) {
    let content = document.getElementById("input").value;
    if (content !== null && content !== '' && content !== '\n') {
        document.getElementById("tweet").disabled = false;
    }
    else {
        document.getElementById("tweet").disabled = true;
    }
});

document.getElementById("input").addEventListener("input", function (event) {
    if (document.forms[0].data.value.length > 140) {
        document.getElementById("tweet").disabled = true;
    }
});

document.getElementById("input").addEventListener("input", function (event) {
    let counting = document.getElementById('counting');
    if (document.forms[0].data.value.length > 130) {
        counting.style.color = "red";
    } else if (document.forms[0].data.value.length > 120) {
        counting.style.color = "blue";
    } else { counting.style.color = "black" }
});

tweet.addEventListener('click', function (event) { event.preventDefault(); });
tweet.addEventListener('click', tweetResult);

function count() {
    document.forms[0].characters.value = 140 - document.forms[0].data.value.length
}

function autoResize() {
    input.style.cssText = 'height:auto; padding:0';
    input.style.cssText = 'height:' + input.scrollHeight + 'px';
}

function tweetResult() {
    let newTweet = document.createElement('p');
    newTweet.innerHTML = "@amandajfm- " + input.value + "<br>" + moment().format('HH:mm');
    writtenTweet.prepend(newTweet);
    input.value = '';
    document.getElementById("tweet").disabled = true;
    document.forms[0].characters.value = 140;
}