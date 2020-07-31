import logo from './pics/jh.png';
import tests from './pics/tests.png';
import news1 from './pics/abcnews.png';
import news2 from './pics/usatoday.png';
import news3 from './pics/mashable.png';
import { checkURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
var mylogo = document.getElementById('jhlogo');
mylogo.src = logo;
var testimg= document.getElementById('testimg');
testimg.src= tests
var nlogo1 = document.getElementById('nlogo1');
nlogo1.src = news1;
var nlogo2 = document.getElementById('nlogo2');
nlogo2.src = news2;
var nlogo3 = document.getElementById('nlogo3');
nlogo3.src = news3;
export {
    checkURL,
    handleSubmit,

}