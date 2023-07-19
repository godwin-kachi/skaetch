const foot = document.getElementById('_year_');
const user__name = document.getElementById('user__name');
const user_password = document.getElementById('user__password')
const login_button = document.getElementById('__login')


const credentials = {
    godwin: 'dsep',
    nkechi: 'loveline',
    shedrack: 'coder',
    nnanna: 'traveler'
}

login_button.addEventListener('click', () => {
    if(user__name.value == '') && (user_password.value == ''){
        
    }
})

const x = new Date().getFullYear();

foot.innerHTML = x;
