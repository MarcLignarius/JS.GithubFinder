class Github {
  constructor() {
    this.client_id = '6aee1c613c0fd7edbea9';
    this.client_secret = 'c0e97a4d5a6b78cac59d5f7a685522e5b32a8766';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&${this.client_secret}`
    );
    const profile = await profileResponse.json();
    return {
      profile,
    };
  }
}
