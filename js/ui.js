class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class = 'card card-body mb-3'>
      <div class='row'>
        <div class='col-lg-3'>
          <img class='img-fluid mb-1' src='${user.avatar_url}'>
          <a href='${user.html_url}' class='btn-primary btn-block text-center mb-2'>View Profile</a>
        </div>
        <div class='col-lg-9'>
          <span class='badge badge-primary'>Public Repos: ${user.public_repos}</span>
          <span class='badge badge-secondary'>Public Gists: ${user.public_gists}</span>
          <span class='badge badge-success'>Followers: ${user.followers}</span>
          <span class='badge badge-info'>Following: ${user.following}</span>
          <br>
          <br>
          <ul class='list-group'>
            <li class='list-group-item'>Company: ${user.company}</li>
            <li class='list-group-item'>Website/Blog: ${user.blog}</li>
            <li class='list-group-item'>Location: ${user.location}</li>
            <li class='list-group-item'>Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class='page-heading mb-3'>Latest Repos</h3>
    <div id='repos'></div>
    `;
  }
}
