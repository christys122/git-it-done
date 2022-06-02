var getUserRepos = function() {
    fetch("curl https://api.github.com/users/octocat/repos");
};

getUserRepos();