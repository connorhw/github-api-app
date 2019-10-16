'use strict';

function getUserRepos() {
    $('#repo-form').submit(function(event) {
        event.preventDefault();
        $('.repos').empty();
        let user = $('.candidate-entry').val();
        console.log(user);
        fetch('https://github.com/users/:'+ user +'/repos')
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
    $('.repos').append(
        `test..test..test` 
    )
    $('.results').removeClass('hidden');
}

function watchForm() {
    getUserRepos();
};

$(function() {
    console.log('App has loaded!');
    watchForm();
});