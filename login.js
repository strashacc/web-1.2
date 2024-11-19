  
  window.onload = () => {

    
    const username = localStorage.getItem('username');
    const theme = localStorage.getItem('theme') || 'light';
    const filter = localStorage.getItem('filter') || 'all';
  
    if (username) displayApp(username);
  
    document.body.className = theme;
    document.getElementById('theme-toggle').checked = theme === 'dark';
    document.getElementById('filter-select').value = filter;

  }

  function login() {
    const username = document.getElementById('username').value.trim();
    if (username) {
      localStorage.setItem('username', username);
      displayApp(username);
    }
  }
  
  function logout() {
    localStorage.removeItem('username');
    location.reload();
  }
  
  function displayApp(username) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('app-section').style.display = 'block';
    document.getElementById('user-display').textContent = username;
  }
  
  
  // document.getElementById('theme-toggle').addEventListener('change', function () {
  //   const theme = this.checked ? 'dark' : 'light';
  //   document.body.className = theme;
  //   localStorage.setItem('theme', theme);
  // });
  
  function saveFilter() {
    const filter = document.getElementById('filter-select').value;
    localStorage.setItem('filter', filter);
  }