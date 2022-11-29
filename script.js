//Variables
let accountHolder = 'corneliuzediu';

//Arrays
let storys = [
    {
        'author': 'Lenovo Computers',
        'photoAuthor': 'img/lenovo.jpg',
        'storyImg': 'img/lenovo_story.jpg',
    },
    {
        'author': 'Casio Electronics',
        'photoAuthor': 'img/casio.jpg',
        'storyImg': 'img/casio_story.jpg',
    },
    {
        'author': 'Samsung Global',
        'photoAuthor': 'img/samsung.jpg',
        'storyImg': 'img/samsung_story.jpg',
    },
    {
        'author': 'JBL News',
        'photoAuthor': 'img/JBL.jpg',
        'storyImg': 'img/JBL_story.jpg',
    },
    {
        'author': 'Apple Technology',
        'photoAuthor': 'img/apple.jpg',
        'storyImg': 'img/apple_story.jpg',
    },
    {
        'author': 'Dell Computers',
        'photoAuthor': 'img/dell.jpg',
        'storyImg': 'img/dell_story.jpg',
    },
    {
        'author': 'PlayStation News',
        'photoAuthor': 'img/playstation.jpg',
        'storyImg': 'img/playstation_story.jpg',
    },
    {
        'author': 'Xbox News',
        'photoAuthor': 'img/Xbox.jpg',
        'storyImg': 'img/Xbox_story.jpg',
    },
    {
        'author': 'Doggy Dog Dog',
        'photoAuthor': 'img/doggy.jpg',
        'storyImg': 'img/doggy_story.jpg',
    },
]


let posts = [
    {
        'author': 'JBL News',
        'location': 'Los Angeles, California, United States',
        'GPS': 'https://goo.gl/maps/AiZZgd58YPDZxUVU7',
        'image': 'img/JBL.jpg',
        'comments': [
            {
                'nameComment': 'Alexandru',
                'textComment': 'That is so cool ...!',
            },
            {
                'nameComment': 'Xilda',
                'textComment': 'I love it!',
            },
            {
                'nameComment': 'Massimo',
                'textComment': 'Is time for an update!',
            }
        ],
        'showComments': false,
        'likes': 298,
        'showLike': false,
    },
    {
        'author': 'Samsung Global',
        'location': 'Suwon-si, South Korea',
        'GPS': 'https://goo.gl/maps/oUaNkh5MJp9ScShD9',
        'image': 'img/samsung.jpg',
        'comments': [
            {
                'nameComment': 'Maria',
                'textComment': 'My phone is better than yours!',
            },
            {
                'nameComment': 'Elon Musk',
                'textComment': 'I will buy you too!',
            },
            {
                'nameComment': 'Alejandro',
                'textComment': 'Me gusta mucho!',
            }
        ],
        'likes': 498,
        'showLike': false,
    },
    {
        'author': 'Casio Electronics',
        'location': 'Shibuya City, Tokyo, Japan',
        'GPS': 'https://goo.gl/maps/3UVDzG4gpDqLehKK9',
        'image': 'img/casio.jpg',
        'comments': [
            {
                'nameComment': 'Liu',
                'textComment': 'Nice design. I think I would buy one',
            },
            {
                'nameComment': 'Dodoco',
                'textComment': 'Do you have anything similar in SALE?',
            },
            {
                'nameComment': 'Jan',
                'textComment': 'Best product ever! Worth the money.',
            }
        ],
        'showComments': false,
        'likes': 652,
        'showLike': false,
    },
    {
        'author': 'Lenovo Computers',
        'location': 'Quarry Bay, Hong Kong',
        'GPS': 'https://goo.gl/maps/n1ADSSanZTa2G2My8',
        'image': 'img/lenovo.jpg',
        'comments': [
            {
                'nameComment': 'Patrizia',
                'textComment': 'Hello to you too ...!',
            },
            {
                'nameComment': 'Xilda',
                'textComment': 'Hola Hola Chica!',
            },
            {
                'nameComment': 'The Supervisor',
                'textComment': 'Hola. Less chating and more work, please!',
            }
        ],
        'showComments': false,
        'likes': 328,
        'showLike': false,
    },

];


let friendRequests = [
    {
        'name': 'Apple Technology',
        'image': 'img/apple.jpg',
        'follow': true,
    },
    {
        'name': 'Dell Computers',
        'image': 'img/dell.jpg',
        'follow': true,
    },
    {
        'name': 'PlayStation News',
        'image': 'img/playstation.jpg',
        'follow': true,
    },
    {
        'name': 'Xbox News',
        'image': 'img/Xbox.jpg',
        'follow': true,
    },
    {
        'name': 'Doggy Dog Dog',
        'image': 'img/doggy.jpg',
        'follow': true,
    }
]


//Funtions for the Story Area
function showStory() {
    let storyPost = document.getElementById('storyImg');
    storyPost.innerHTML = '';

    for (i = 0; i < storys.length; i++) {
        let index = storys[i];
        let photoAuthor = index['photoAuthor'];
        storyPost.innerHTML += `
        <img onclick="openPhoto(${i})" src="${photoAuthor}">
        `;
    }
}


function sbLeft() {
    var left = document.querySelector(".scroll-storys");
    left.scroll(-400, 0)
}


function sbRight() {
    var right = document.querySelector(".scroll-storys");
    right.scroll(600, 0)
}


//Function for Story Carousel
function showCarousel() {
    document.getElementById('carouselContainerID').classList.remove('d-none');
}


function closeCarousel() {
    document.getElementById('carouselContainerID').classList.add('d-none')
}


function openPhoto(i) {
    showCarousel();
    let storyPost = document.getElementById('fullsizeStoryContaineID');
    let index = storys[i];
    let author = index['author'];
    let photoAuthor = index['photoAuthor'];
    let story = index['storyImg'];

    storyPost.innerHTML = templateStoryPost(i, photoAuthor, author, story);
}



function previousStory(i) {
    if (i <= 0) {
        i = storys.length - 1;
        openPhoto(i);
    } else {
        let x = i - 1;
        openPhoto(x);
    }
}


function nextStory(i) {
    if (i === storys.length - 1) {
        i = -1;
    }
    let x = i + 1;
    openPhoto(x);
}


//Funtions for the Posts
function showPosts() {
    let post = document.getElementById('post_container');
    post.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        let post_number = posts[i];
        post.innerHTML += templatePost(post_number, i);
    }
}


function addDopamine(i) {
    let likes = document.getElementById('like-' + i);
    let showLike = posts[i]['showLike'];
    let likesCounter = posts[i]['likes'];
    if (showLike == false) {
        likes.src = ('icons/heart-32-red.ico');
        posts[i]['showLike'] = true;
        likesCounter++;
        posts[i]['likes'] = likesCounter;
    } else {
        likes.src = ('icons/heart-32.ico');
        posts[i]['showLike'] = false;
        likesCounter--;
        posts[i]['likes'] = likesCounter;
    }
    reloadLikes(i);
}


function reloadLikes(i) {
    let x = document.getElementById('onlyLikes-' + i);
    let y = posts[i]['likes'];
    let showLike = posts[i]['showLike'];
    x.innerHTML = '';
    if (showLike == true) {
        x.innerHTML += `
        <p> Liked by ${y} others and you.</p>`;
    } else {
        x.innerHTML += `
        <p> Liked by ${y} others.</p>`;
    }
}


function openComments(i) {
    let show = posts[i]['showComments'];
    if (show === false) {
        document.getElementById('onlyCommentsID-' + i).classList.remove('d-none');
        document.getElementById('showCommentsID-' + i).classList.remove('d-none');
        posts[i]['showComments'] = true;
        loadComments(i);
        showDeleteButton(i)
    } else {
        document.getElementById('onlyCommentsID-' + i).classList.add('d-none');
        document.getElementById('showCommentsID-' + i).classList.add('d-none');
        posts[i]['showComments'] = false;
    }
}


function loadComments(i) {
    let x = posts[i];
    let comment = document.getElementById('showCommentsID-' + i);
    let commentArray = x['comments']
    comment.innerHTML = '';

    for (let j = 0; j < commentArray.length; j++) {
        let holder = [i];
        let name_Comment = commentArray[j];
        let comment_Array = commentArray[j];
        comment.innerHTML += templateComment(i, j, name_Comment, comment_Array, holder);
    }
    showDeleteButton(i);
}


function addComment(i) {
    let x = posts[i];     // Post number
    let y = x['comments'] // Coment section
    let commentary = {};
    let text = document.getElementById('commentID-' + i).value;
    commentary['nameComment'] = accountHolder;
    commentary['textComment'] = text;
    document.getElementById('commentID-' + i).value = '';
    y.push(commentary)
    loadComments(i);
}


function showDeleteButton(i) {
    let x = posts[i];     // Post number
    let y = x['comments'] // Coment section
    for (let j = 0; j < y.length; j++) {
        let name = y[j]['nameComment'];
        if (name == accountHolder) {
            document.getElementById('deleteCommID-' + i + j).classList.remove('d-none');
        }
    }
}


function deleteComment(i, j) {
    let x = posts[i];
    let y = x['comments'];
    let z = y.indexOf(j);
    y.splice(z, 1);
    loadComments(i);
}


// Functions for the Accounf Owner & Friend-Request Area
function renderAccountOwner() {
    let owner = document.getElementById('ownerID');
    owner.innerHTML = accountHolder;
}


function renderFriendRequest() {
    renderAccountOwner();
    let request = document.getElementById('friendRequestID');
    request.innerHTML = '';

    for (let i = 0; i < friendRequests.length; i++) {
        const index = friendRequests[i];
        request.innerHTML += templateFriendRequest(i, index); 
    }
}


function followUnfollow(i) {
    var follow = document.getElementById('followID-' + i);
    let x = friendRequests[i]['follow'];
    follow.innerHTML = '';
    if (x === true) {
        follow.innerHTML = 'Unfollow';
        friendRequests[i]['follow'] = false;
    } else {
        follow.innerHTML = 'Follow';
        friendRequests[i]['follow'] = true;
    }
}


// Funtion Holder for the onclick-Functions
function test() {
    scrollToTop()
    document.getElementById('clickFeedBack').classList.remove('d-none');
}


function closeTest() {
    document.getElementById('clickFeedBack').classList.add('d-none');
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}