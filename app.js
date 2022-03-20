const html = ['https://www.canva.com/design/DAD_9IHjhoA/AHwPKMAV_CfJqbQ07e0UWA/view?utm_content=DAD_9IHjhoA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton','https://www.canva.com/design/DAD_iyaMlo0/D7fFpe_8KscXAyTeiT5wDg/view?utm_content=DAD_iyaMlo0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton','https://www.canva.com/design/DAD_jDY4JRU/s0o8o0ayV7FaoLyidgqb_g/view?utm_content=DAD_jDY4JRU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'];
const htmlnames = ['BASIC ESSENTIALS','SOME MORE HTML 5','FORMS AND TABLES']
const css = [];
const cssnames = [];
const js =['https://www.canva.com/design/DAEC74eC_C4/AnBnMzE-z2dayjdMmVmuSg/view?utm_content=DAEC74eC_C4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'];
const jsnames = ['DOM'];

const htmlcontainer = document.querySelector('#html1')


for(let i=0;i<html.length;i++){
    //console.log('fine');
    li = document.createElement('Li');
    link  = document.createElement('a');
    li.appendChild(link);
    link.href = html[i];
    link.target='_blank';
    link.rel = 'noopener noreferrer';
    htmlcontainer.append(li);
    link.innerHTML = htmlnames[i];
    
}


const htmlcontainer2 = document.querySelector('#newjs')


for(let i=0;i<js.length;i++){
    //console.log('fine');
    li = document.createElement('Li');
    link  = document.createElement('a');
    li.appendChild(link);
    link.href = js[i];
    link.target='_blank';
    link.rel = 'noopener noreferrer';
    htmlcontainer2.append(li);
    link.innerHTML = jsnames[i];
    
}


const appearalert = document.querySelector('#submit1');
const alert1 = document.querySelector('#alert1');
const input1 = document.querySelector('#input1');
const closealert = document.querySelector('#closealert');

appearalert.addEventListener('click',(e) => {
  e.preventDefault();
  input1.value = "";
    alert1.hidden = false;  

}
 )

 closealert.addEventListener('click', ()=>{
     alert1.hidden = true;
 })