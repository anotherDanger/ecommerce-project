class homeNavigation{
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('translate-x-full');
    }

    getProfilBtn()
    {
        const sidebar = document.getElementById('sidebar');
        const text = sidebar.querySelector('h2')
        text.textContent = 'Profil';
        this.toggleSidebar();
    }
    
    getCartBtn()
    {
        const sidebar = document.getElementById('sidebar');
        const text = sidebar.querySelector('h2')
        text.textContent = 'Cart';
        this.toggleSidebar();
    }
    
}

export {homeNavigation};