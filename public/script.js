window.onload = function() {
    fetch('/user-info')
        .then(response => response.json())
        .then(data => {
            document.getElementById('browserInfo').textContent = 'Browser: ' + escapeHTML(data.browser.name) + ' ' + escapeHTML(data.browser.version);
            document.getElementById('engineInfo').textContent = 'Engine: ' + escapeHTML(data.engine.name) + ' ' + escapeHTML(data.engine.version);
            document.getElementById('osInfo').textContent = 'OS: ' + escapeHTML(data.os.name) + ' ' + escapeHTML(data.os.version);
            document.getElementById('cpuInfo').textContent = 'CPU: ' + escapeHTML(data.cpu.architecture);
            document.getElementById('deviceInfo').textContent = 'Device: ' + escapeHTML(data.device.model || 'potato') + ' ' + escapeHTML(data.device.type || 'PC') + ' ' + escapeHTML(data.device.vendor || 'lmao');
            document.getElementById('ipInfo').textContent = 'IP Address: ' + escapeHTML(data.ip);
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });
};

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, function(tag) {
        const charsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        };
        return charsToReplace[tag] || tag;
    });
}