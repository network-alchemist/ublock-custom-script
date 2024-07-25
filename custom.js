// custom.js

(function() {
    'use strict';

    // Wait for the DOM to fully load
    document.addEventListener('DOMContentLoaded', function() {
        // Replace ads with related content
        document.querySelectorAll('.ad-slot').forEach(ad => {
            ad.innerHTML = '<div class="related-content">Related Content Here</div>';
        });

        // Apply other dynamic enhancements
        if (document.querySelector('.sticky-nav')) {
            document.querySelector('.sticky-nav').classList.add('enhanced-nav');
        }
    });
})();
