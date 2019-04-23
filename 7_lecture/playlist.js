window.onload = init();

function init() {
    loadPlaylist();
}

var button = document.getElementById('addButton');
var ul = document.getElementById('playlist');
var deleteButton = document.getElementById('deleteButton');

button.onclick = function() {
    handleButtonClick();
}

function handleButtonClick() {
    var textInput = document.getElementById('songTextInput');
    var songName = textInput.value;
    if (songName == '') {
        alert('Please enter a song');
    } else {
        alert('Adding ' + songName);
        addSong(songName);
        save(songName);
    }

    textInput.value = '';
}

function addSong(songName) {
    var li = document.createElement('li');
    li.innerHTML = songName;
    ul.appendChild(li);
}

deleteButton.onclick = function() {
    removeJSON();
}
