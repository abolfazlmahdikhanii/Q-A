const quiz=[
    {
        title:'تعداد حلقه های المپیک؟',
        gozineh:['4','3','1','5'],
        answer:'5'
    },
    {
        title:'تعداد اعضای شورای نگهبان',
        gozineh:['6','8','13','12'],
        answer:'12'
    },
    {
        title:'ارتفاعات سهند در کدام استان قرار دارد؟',
        gozineh:['آذربایجان شرقی','آذربایجان غربی','کردستان','زنجان'],
        answer:'آذربایجان شرقی'
    },
    {
        title:'خرمشهر در کدام عملیات آزاد شد؟',
        gozineh:['بیت المقدس','ثامن الاعمع','فتح المبین','خیبر'],
        answer:'بیت المقدس'
    },
    {
        title:'کدام ورزشکار ایرانی موفق به کسب مدال طلای المپیک 1966 آتلانتا شد؟',
        gozineh:['رسول خادم',' امیررضا خادم',' حسین رضا زاده','عباس جدیدی'],
        answer:'رسول خادم'
    },
    {
        title:' کدام کارگردان رکورد دار دریافت سیمرغ بهترین فیلم و کارگردانی در جشنواره فیلم فجر است؟',
        gozineh:['ابراهیم حاتمی کیا','مجید مجیدی','اصغر فرهادی','داریوش مهرجویی'],
        answer:'ابراهیم حاتمی کیا'
    },
    {
        title:'تابلوی لبخند ژکوند اثر کیست؟',
        gozineh:['ونگوک','داوینچی','پیکاسو','رامبراند'],
        answer:'داوینچی'
    },
    {
        title:'کدام درخت نماد صلح است؟',
        gozineh:['سرو','زیتون','سیب','نارنج'],
        answer:'زیتون '
    },
    {
        title:'گیوتین اختراع کدام کشور است؟',
        gozineh:['هندوستان','فرانسه',' کره شمالی','ترکیه'],
        answer:'فرانسه'
    },
    {
        title:'جنگ صد ساله چند سال طول کشید؟',
        gozineh:['97','100','116','121'],
        answer:'116 '
    },

] // array of question

let current=0 //index of quiz
let res=0 //resualt of answer



const btnReload=document.querySelector('.reload')
const container=document.querySelector('.main')
const quizContainer=document.querySelector('.quiz-show')
const resualtContainer=document.querySelector('.resualt-ans')
const resualtText=document.querySelector('.res-ans')
let randomArr=quiz.sort(item=>Math.floor(Math.random()*quiz.length))


// when click next btn show next question
const next=()=>{
    // check finnishing question if finish show resualt
    if(current<randomArr.length-1){
        current++

        addQuiz(current) //send current question to the addQuiz function
    }
    else{
        quizContainer.classList.add('unvisible')
        resualtContainer.classList.add('visible')
       
        resualtText.textContent=res
    }

    
}




const addQuiz=(curr=0)=>{

// show current question title
  document.querySelector('.qize-txt').innerHTML=`${randomArr[curr].title}`
  container.innerHTML=''
//   show current question choise
let randomChoise=randomArr[curr].gozineh.sort(item=>Math.floor(Math.random()* randomArr[curr].gozineh.length))

randomChoise.forEach((item)=>{
      const div=document.createElement('div')
      div.className='item'
      const label=document.createElement('label')
      const input=document.createElement('input')
      input.setAttribute('type','radio')
      input.setAttribute('name','radio')
      input.setAttribute('data-id',`${item.trim()}`)
      const span=document.createElement('span')
    span.textContent=item
    span.classList='q-txt'
      label.appendChild(input)
      label.appendChild(span)
      div.appendChild(label)
      container.appendChild(div)

      
       
     

    //   check true answer and check change input when enabled btnNext
      input.addEventListener('change',(e)=>{
     
        let id=e.target.getAttribute('data-id')
    
           
        if(id==randomArr[curr].answer.trim()){
            res++
            console.log(res);
           
           
        }
        
            
        
        setTimeout(() => {
            next()
        }, 300);
      })
  })

}

btnReload.addEventListener('click',()=>{
     document.location.reload()
})

document.addEventListener('DOMContentLoaded',()=>{
    addQuiz(current) //show current quiz
    
})