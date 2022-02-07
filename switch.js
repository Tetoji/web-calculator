const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) 
{
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme == 'dark') 
    {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) 
{
    if (e.target.checked) 
    {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else 
    {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
