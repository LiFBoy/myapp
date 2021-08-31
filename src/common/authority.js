export function getAuthority() {
  return localStorage.getItem('future-eyes-authoriry');
}

export function setAuthority(authoriry) {
  return localStorage.setItem('future-eyes-authoriry', authoriry);
}