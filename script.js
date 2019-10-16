'use strict';

function getUserRepos() {
    $('#repo-form').submit(function(event) {
        event.preventDefault();
        $('.repos').empty();
        let user = $('.candidate-entry').val();
        console.log(user);
        fetch('https://api.github.com/users/'+ user +'/repos')
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.code === 404) {
                    alert("Try again...");
                  }else{
                    displayResults(responseJson);
                  }
            })
    })
}

function displayResults(responseJson){
    console.log(responseJson);
    for (let i = 0; i < responseJson.length; i++) {
        $('.repos').append(
            `<p>${responseJson.name[i]}</p>` 
        )
    }
    $('.results').removeClass('hidden');
}

function watchForm() {
    getUserRepos();
};

$(function() {
    console.log('App has loaded!');
    watchForm();
});