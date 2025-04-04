<script>
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            const nav = document.querySelector('nav ul');
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.backgroundColor = '#fff';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    </script>