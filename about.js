function toggleAdditionalInfo() {
    const additionalInfo = document.getElementById('additionalInfo');
    const button = document.querySelector('button');

    if (additionalInfo.style.display === 'none') {
        additionalInfo.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        additionalInfo.style.display = 'none';
        button.textContent = 'Show More';
    }
}
