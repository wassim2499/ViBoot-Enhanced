document.addEventListener('DOMContentLoaded', function () {
	const loginBtn = document.getElementById('login-btn');
	const logoutBtn = document.getElementById('logout-btn');
	const userInfo = document.getElementById('user-info');

	// Check authentication status
	chrome.storage.sync.get(['token'], (result) => {
		if (result.token) {
			showLoggedInState();
		} else {
			showLoggedOutState();
		}
	});

	// Login functionality
	if (loginBtn) {
		loginBtn.addEventListener('click', () => {
			chrome.runtime.sendMessage({ message: 'login' }, (response) => {
				if (response) {
					showLoggedInState();
				}
			});
		});
	}

	// Logout functionality
	if (logoutBtn) {
		logoutBtn.addEventListener('click', () => {
			chrome.runtime.sendMessage({ message: 'logout' });
			showLoggedOutState();
		});
	}

	function showLoggedInState() {
		if (loginBtn) loginBtn.style.display = 'none';
		if (logoutBtn) logoutBtn.style.display = 'block';
		if (userInfo) userInfo.textContent = 'Signed in with Google';
	}

	function showLoggedOutState() {
		if (loginBtn) loginBtn.style.display = 'block';
		if (logoutBtn) logoutBtn.style.display = 'none';
		if (userInfo)
			userInfo.textContent = 'Sign in to sync with Google Calendar';
	}
});
