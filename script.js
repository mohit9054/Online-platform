// Simple authentication demo
        document.querySelectorAll('.auth-buttons button').forEach(button => {
            button.addEventListener('click', function() {
                const action = this.textContent;
                alert(`${action} functionality would be implemented here with proper authentication.`);
            });
        });

        // CTA button action
        document.querySelector('.cta-button').addEventListener('click', function() {
            alert('Course exploration and signup process would begin here.');
        });