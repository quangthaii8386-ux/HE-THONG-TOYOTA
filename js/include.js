async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  for (const el of elements) {
    const file = el.getAttribute('data-include');
    if (file) {
      try {
        const res = await fetch(file);
        const text = await res.text();
        el.innerHTML = text;
      } catch (err) {
        console.error('Không thể tải file:', file, err);
      }
    }
  }
}
window.addEventListener('DOMContentLoaded', includeHTML);
