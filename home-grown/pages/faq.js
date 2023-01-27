import styles from '../styles/FAQ.module.css'
import { useState } from 'react'


const lista = [
  {
    question: 'How does Homegrown work?',
    answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.', 
  },
  {
    question: 'Do I need an account to find a plot?',
    answer: 'No! We use emailJS to email your query to them directly, protecting our customers emails from public view. You can browse all our current plots on our public listings page', 
  },
  {
    question: 'How do I post a plot or garden space?',
    answer: 'You need to register with us first to be able to post your plot! Please click the register link on the navbar!', 
  },
  {
    question: 'How do I search for plots?',
    answer: 'You can search for then on the public listings page! You can find this on the navbar under listings, you can search by postcode or by type of crop!', 
  }
  ,
  {
    question: 'How do I reset my password?',
    answer: '  Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.', 
  },
  {
    question: 'Do you have any tips for a beginner looking into growing their own food',
    answer: '  You can find tips and guides in our blog page.', 
  },
  
  
]

export default function FAQ() {

  const [click, setClick] = useState(null)
  
  const Teste = (i) => {

    if(click === i){
      return setClick(null)
   } 

    setClick(i)
  }  

  return(
    <div className={styles['page-container']}>
    <div className={styles['glass-container']}>
    <div className={styles["main"]}>
      <div className={styles['left']}>
      <img className={styles['left-image']}src="illustrations/lady-question.png" alt="lady looking at a question mark"/>    
      </div>

      <div className={styles['right']}>
        <h1 className={styles['title']}>FAQ's</h1>

        {lista.map((item, i) => (
          <div className={click !== i ? styles['content'] : styles['content show']} onClick={() => Teste(i)} key={i}>
            <div className={styles['questions']}>
              {item.question}
              <img src='/icons/down arrow.png' alt='arrow' id={styles["arrow"]}className={click === i ? styles['deg on']: styles['deg off']} />
            </div>
            <div className={styles['answers']}>
              {item.answer}
            </div>
          </div>
        ))}
      
      </div>
    </div>
    </div>
    </div>
  )
} 