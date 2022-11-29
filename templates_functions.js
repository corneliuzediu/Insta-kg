//Template for the Storys
function templateStoryPost(i, photoAuthor, author, story) {
    return `<div class="fullsizeStoryBox">
                <button class="sb storyLeft" onclick="previousStory(${i})"><img src="icons/arrow-left-2-32.ico"></button>
                <button class="sb storyRight" onclick="nextStory(${i})"><img src="icons/arrow-right-2-32.ico"></button>
                <div class="storyUpper">
                    <img src="${photoAuthor}">
                    <p> ${author}</p>
                    <p onclick="test()"> ... </p>
                </div>
                <div class="storyMainPhoto">
                    <img src="${story}">
                </div>
                <div class="storyLower">
                    <input type="text" placeholder="Reply ...">
                    <img onclick="test()" width="18px"src="icons/heart-32.ico">
                    <img onclick="test()" width="18px" src="icons/send.png">
                <div>
            </div>`;
}



//Template for Post
function templatePost(post_number, i) {
    return `<div class="postArea">
                <div class="postAuthor">
                    <div class=postpostAuthorData>
                        <div class="postAuthorImg">
                            <img src="${post_number['image']}">
                        </div>
                        <div>
                            <h2>${post_number['author']}</h2>
                            <a class="location" href="${post_number['GPS']}" title="${post_number['GPS']}">
                                <img src="icons/pin-4-32.ico">
                                <p>${post_number['location']}</p>
                            </a>
                        </div>
                    </div>      
                    <div>
                        <button class="postAuthorButton" title="Test function" onclick="test()">...</button>
                    </div>
                </div>
                <div class="postImg_container">
                    <img src="${post_number['image']}">
                </div>
                <div class="optionsPost">   
                    <button title="Like" onclick="addDopamine(${i})"><img id="like-${i}" src="icons/heart-32.ico"></button>
                    <button title="Open Comments" onclick="openComments(${i})"><img src="icons/chat-4-32.ico"></button>
                    <button title="Test only" onclick="test()"><img  width="24px"src="icons/send.png"></button>  
                </div>
                <div id="likeAndCommentID-${i}" class="likeAndComment">
                    <div id="onlyLikes-${i}"class="onlyLikes">
                        <p> Liked by ${post_number['likes']} others.</p>
                    </div>
                    <div id="showCommentsID-${i}" class="showComments d-none"></div>
                    <div id="onlyCommentsID-${i}" class="onlyComments d-none">
                        <textarea required id="commentID-${i}" placeholder="Add a comment ..."></textarea>
                        <button onclick="addComment(${i})">Post</button>
                    </div>
                </div>
            </div>`;
}

//Template for the Comments
function templateComment(i, j, name_Comment, comment_Array, holder) {
    return `<div id="comentaryID-${i}-${j}" class="comentary">
               <div class="fakeComm">
                   <h4>${name_Comment['nameComment']}:</h4>
                   <p>${comment_Array['textComment']}</p>
               </div>
               <button onclick="deleteComment(${holder},${j})" id="deleteCommID-${i}${j}" class="deleteComm-(${j}) d-none">&#10007;</button>
           </div>`;
}


//Template for the Friend Requests
function templateFriendRequest(i, index) {
    return `<div>
                <div class="personRequest">
                    <img src="${index['image']}">
                    <p>${index['name']}</p>
                </div>
                    <button id="followID-${i}" onclick="followUnfollow(${i})">Follow</button>
            </div>`;
}

