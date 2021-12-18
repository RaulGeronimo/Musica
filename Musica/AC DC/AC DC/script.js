var holding = false;
var track = document.getElementById('track');
var progress = document.getElementById('progress');
var play = document.getElementById('play');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var art = document.getElementById('art');
var current_track = 0;
var song, audio, duration;
var playing = false;
var songs = [{
        title: 'Are You Ready',
        artist: 'AC/DC',
        url: '../Canciones/Are You Ready.mp3',
        art: '../assets/The Razors Edge.png'
    },
    {
        title: 'Back In Black',
        artist: 'AC/DC',
        url: '../Canciones/Back In Black.mp3',
        art: '../assets/Back in Black.png'
    },
    {
        title: 'Code Red',
        artist: 'AC/DC',
        url: '../Canciones/Code Red.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'Cold Hearted Man',
        artist: 'AC/DC',
        url: '../Canciones/Cold Hearted Man.mp3',
        art: '../assets/Iron Man 2.png'
    },
    {
        title: 'Demon Fire',
        artist: 'AC/DC',
        url: '../Canciones/Demon Fire.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'Dirty Deeds',
        artist: 'AC/DC',
        url: '../Canciones/Dirty Deeds.mp3',
        art: '../assets/Dirty Deeds Done Dirt Cheap.png'
    },
    {
        title: 'Evil Walks',
        artist: 'AC/DC',
        url: '../Canciones/Evil Walks.mp3',
        art: '../assets/For Those About to Rock.png'
    },
    {
        title: 'For Those About to Rock',
        artist: 'AC/DC',
        url: '../Canciones/For Those About To Rock.mp3',
        art: '../assets/For Those About to Rock.png'
    },
    {
        title: 'Guns For Hire',
        artist: 'AC/DC',
        url: '../Canciones/Guns for Hire.mp3',
        art: '../assets/Flick of the Switch.png'
    },
    {
        title: 'Hail Caesar',
        artist: 'AC/DC',
        url: '../Canciones/Hail Caesar.mp3',
        art: '../assets/Ballbreaker.png'
    },
    {
        title: 'Hard As a Rock',
        artist: 'AC/DC',
        url: '../Canciones/Hard as a Rock.mp3',
        art: '../assets/Ballbreaker.png'
    },
    {
        title: 'Have a Drink on Me',
        artist: 'AC/DC',
        url: '../Canciones/Have a Drink on Me.mp3',
        art: '../assets/Back in Black.png'
    },
    {
        title: 'Hell Ain\'t a Bad Place to Be',
        artist: 'AC/DC',
        url: '../Canciones/Hell Ain\'t a Bad Place to Be.mp3',
        art: '../assets/Let There Be Rock.png'
    },
    {
        title: 'Hells Bells',
        artist: 'AC/DC',
        url: '../Canciones/Hells Bells.mp3',
        art: '../assets/Back in Black.png'
    },
    {
        title: 'Highway To Hell',
        artist: 'AC/DC',
        url: '../Canciones/Highway To Hell.mp3',
        art: '../assets/Highway to Hell.png'
    },
    {
        title: 'If You Want Blood (You\'ve Got It)',
        artist: 'AC/DC',
        url: '../Canciones/If You Want Blood (You\'ve Got It).mp3',
        art: '../assets/Highway to Hell.png'
    },
    {
        title: 'Kick You When You\'re Down',
        artist: 'AC/DC',
        url: '../Canciones/Kick You When You\'re Down.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'Let There Be Rock',
        artist: 'AC/DC',
        url: '../Canciones/Let There Be Rock.mp3',
        art: '../assets/Let There Be Rock.png'
    },
    {
        title: 'Money Shot',
        artist: 'AC/DC',
        url: '../Canciones/Money Shot.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'Moneytalks',
        artist: 'AC/DC',
        url: '../Canciones/Moneytalks.mp3',
        art: '../assets/The Razors Edge.png'
    },
    {
        title: 'Play Ball',
        artist: 'AC/DC',
        url: '../Canciones/Play Ball.mp3',
        art: '../assets/Rock or Bust.png'
    },
    {
        title: 'Realize',
        artist: 'AC/DC',
        url: '../Canciones/Realize.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'Rejection',
        artist: 'AC/DC',
        url: '../Canciones/Rejection.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'Rock N\' Roll Damnation',
        artist: 'AC/DC',
        url: '../Canciones/Rock N\' Roll Damnation.mp3',
        art: '../assets/Powerage.png'
    },
    {
        title: 'Rock N\' Roll Train',
        artist: 'AC/DC',
        url: '../Canciones/Rock N\' Roll Train.mp3',
        art: '../assets/Black Ice.png'
    },
    {
        title: 'Rock Or Bust',
        artist: 'AC/DC',
        url: '../Canciones/Rock Or Bust.mp3',
        art: '../assets/Rock or Bust.png'
    },
    {
        title: 'Safe in New York City',
        artist: 'AC/DC',
        url: '../Canciones/Safe in New York City.mp3',
        art: '../assets/Stiff Upper Lip.png'
    },
    {
        title: 'Shoot to Thrill',
        artist: 'AC/DC',
        url: '../Canciones/Shoot to Thrill.mp3',
        art: '../assets/Back in Black.png'
    },
    {
        title: 'Shot Down In Flames',
        artist: 'AC/DC',
        url: '../Canciones/Shot Down In Flames.mp3',
        art: '../assets/Highway to Hell.png'
    },
    {
        title: 'Shot in the Dark',
        artist: 'AC/DC',
        url: '../Canciones/Shot in the Dark.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'Skies on Fire',
        artist: 'AC/DC',
        url: '../Canciones/Skies on Fire.mp3',
        art: '../assets/Black Ice.png'
    },
    {
        title: 'Stiff Upper Lip',
        artist: 'AC/DC',
        url: '../Canciones/Stiff Upper Lip.mp3',
        art: '../assets/Stiff Upper Lip.png'
    },
    {
        title: 'Systems Down',
        artist: 'AC/DC',
        url: '../Canciones/Systems Down.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'T.N.T.',
        artist: 'AC/DC',
        url: '../Canciones/TNT.mp3',
        art: '../assets/High Voltage.png'
    },
    {
        title: 'The Jack',
        artist: 'AC/DC',
        url: '../Canciones/The Jack.mp3',
        art: '../assets/High Voltage.png'
    },
    {
        title: 'The Razors Edge',
        artist: 'AC/DC',
        url: '../Canciones/The Razors Edge.mp3',
        art: '../assets/The Razors Edge.png'
    },
    {
        title: 'Through The Mists Of Time',
        artist: 'AC/DC',
        url: '../Canciones/Through The Mists Of Time.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'Thunderstruck',
        artist: 'AC/DC',
        url: '../Canciones/Thunderstruck.mp3',
        art: '../assets/The Razors Edge.png'
    },
    {
        title: 'Touch Too Much',
        artist: 'AC/DC',
        url: '../Canciones/Touch Too Much.mp3',
        art: '../assets/Highway to Hell.png'
    },
    {
        title: 'Walk All Over You',
        artist: 'AC/DC',
        url: '../Canciones/Walk All Over You.mp3',
        art: '../assets/Highway to Hell.png'
    },
    {
        title: 'War Machine',
        artist: 'AC/DC',
        url: '../Canciones/War Machine.mp3',
        art: '../assets/Black Ice.png'
    },
    {
        title: 'What Do You Do for Money Honey',
        artist: 'AC/DC',
        url: '../Canciones/What Do You Do for Money Honey.mp3',
        art: '../assets/Back in Black.png'
    },
    {
        title: 'Who Made Who',
        artist: 'AC/DC',
        url: '../Canciones/Who Made Who.mp3',
        art: '../assets/Who Made Who.png'
    },
    {
        title: 'Whole Lotta Rosie',
        artist: 'AC/DC',
        url: '../Canciones/Whole Lotta Rosie.mp3',
        art: '../assets/Let There Be Rock.png'
    },
    {
        title: 'Wild Reputation',
        artist: 'AC/DC',
        url: '../Canciones/Wild Reputation.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'Witch\'s Spell',
        artist: 'AC/DC',
        url: '../Canciones/Witch\'s Spell.mp3',
        art: '../assets/Power Up.png'
    },
    {
        title: 'You Shook Me All Night Long',
        artist: 'AC/DC',
        url: '../Canciones/You Shook Me All Night Long.mp3',
        art: '../assets/Back in Black.png'
    },
];

window.addEventListener('load', init(), false);

function init() {
    song = songs[current_track];
    audio = new Audio();
    audio.src = song.url;
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
}


audio.addEventListener('timeupdate', updateTrack, false);
audio.addEventListener('loadedmetadata', function () {
    duration = this.duration;
}, false);
window.onmousemove = function (e) {
    e.preventDefault();
    if (holding) seekTrack(e);
}
window.onmouseup = function (e) {
    holding = false;
    console.log(holding);
}
track.onmousedown = function (e) {
    holding = true;
    seekTrack(e);
    console.log(holding);
}
play.onclick = function () {
    playing ? audio.pause() : audio.play();
}
audio.addEventListener("pause", function () {
    play.innerHTML = '<img class="pad" src="../../../images/iconos/play.svg" />';
    playing = false;
}, false);

audio.addEventListener("playing", function () {
    play.innerHTML = '<img src="../../../images/iconos/pause.svg" />';
    playing = true;
}, false);
next.addEventListener("click", nextTrack, false);
prev.addEventListener("click", prevTrack, false);


function updateTrack() {
    curtime = audio.currentTime;
    percent = Math.round((curtime * 100) / duration);
    progress.style.width = percent + '%';
    handler.style.left = percent + '%';
}

function seekTrack(e) {
    event = e || window.event;
    var x = e.pageX - player.offsetLeft - track.offsetLeft;
    percent = Math.round((x * 100) / track.offsetWidth);
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;
    progress.style.width = percent + '%';
    handler.style.left = percent + '%';
    audio.play();
    audio.currentTime = (percent * duration) / 100
}

function nextTrack() {
    current_track++;
    current_track = current_track % (songs.length);
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function () {
        updateInfo();
    }
}

function prevTrack() {
    current_track--;
    current_track = (current_track == -1 ? (songs.length - 1) : current_track);
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function () {
        updateInfo();
    }
}

function updateInfo() {
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
    art.onload = function () {
        audio.play();
    }
}