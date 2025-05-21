// Animation for practical cards
document.addEventListener('DOMContentLoaded', () => {
    // Animate practical cards on page load
    const cards = document.querySelectorAll('.practical-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add hover effects for practical cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    });

    // Add click animation for view buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });
});

// Function to navigate to practical pages
function navigateToPractical(number) {
    try {
        const url = `practical${number}.html`;
        // Add a loading animation
        const button = event.target;
        if (button.classList.contains('view-btn')) {
            button.style.opacity = '0.7';
            button.textContent = 'Loading...';
        }
        
        // Navigate to the practical page
        window.location.href = url;
    } catch (error) {
        console.error('Navigation error:', error);
        alert('Error navigating to the practical page. Please try again.');
    }
}

// Animation for code sections
function animateCodeSections() {
    const codeContainers = document.querySelectorAll('.code-container');
    codeContainers.forEach((container, index) => {
        container.style.opacity = '0';
        container.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            container.style.transition = 'all 0.5s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Animation for explanation sections
function animateExplanations() {
    const explanations = document.querySelectorAll('.explanation');
    explanations.forEach((explanation, index) => {
        explanation.style.opacity = '0';
        explanation.style.transform = 'translateY(20px)';
        setTimeout(() => {
            explanation.style.transition = 'all 0.5s ease';
            explanation.style.opacity = '1';
            explanation.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Enhanced copy button animation
function copyCode(button) {
    const codeContainer = button.parentElement;
    const code = codeContainer.querySelector('code').textContent;
    
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    
    // Select and copy the text
    textarea.select();
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(textarea);
    
    // Enhanced animation for copy button
    button.style.transform = 'scale(1.1)';
    button.style.backgroundColor = '#10b981';
    button.textContent = 'Copied!';
    
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    button.appendChild(ripple);
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = '#4f46e5';
        button.textContent = 'Copy Code';
        ripple.remove();
    }, 2000);
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize animations when page loads
window.addEventListener('load', () => {
    animateCodeSections();
    animateExplanations();
}); 