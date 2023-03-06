const languages = {
  'en': {
    'name': 'Fedartsou Viachaslau',
    'profession': 'Front-End Developer',
    'contacts': 'Contacts',
    'about': 'About Me',    
    'about-text': "My main goal is to get a job as a Frontend developer and become a highly qualified specialist in this field. My key skills are teamwork and quick learning. I am constantly learning new programming skills and developing my English language skills. I hope to become part of a dynamic team.",    
    'education': 'Education & Courses',
    'education-date1': 'Sep 2003 - May 2004',
    'education-date2': 'Jun 2019 - Sep 2019',
    'education-date3': 'May 2020 - Aug 2020',
    'education-date4': 'Sep 2020 - Aug 2021',
    'education-date5': 'Oct 2021 - Feb 2022',
    'education-date6': 'Dec 2022 - Feb 2023',
    'pty': 'Gomel state professional lyceum of builders',
    'pty-profession': 'Finishing construction works',    
    'it-academy': 'IT-ACADEMY',
    'academy-profession1': 'Website development with HTML, CSS & JavaScript',
    'academy-profession2': 'Web application development with JavaScript',
    'skillbox-profession': 'Web developer',
    'epam-profession': 'Front-End Development',
    'rs-profession': 'JavaScript/Front-end. Stage 0',
    'skills': 'Skills',
    'work-experience': 'Work experience',
    'code-example': 'Code example',
    'languages': 'Languages',
    'en': 'English (Pre-Intermediate)',
    'ru': 'Russian (Fluent)',
    'by': 'Belarusian (Native)',
  },
  
  'ru': {
    'name': 'Федорцов Вячеслав',
    'profession': 'Фронтенд-разработчик',
    'contacts': 'Контакты',
    'about': 'Обо мне',    
    'about-text': 'Моя главная цель - устроиться на работу Frontend-разработчиком и стать высококвалифицированным специалистом в этой области. Мои ключевые навыки - это командная работа и быстрая обучаемость. Я постоянно осваиваю новые навыки программирования и развиваю свои знания английского языка. Я надеюсь стать частью динамичной команды.',    
    'education': 'Образование и Курсы',
    'education-date1': 'сент. 2003 - май 2004',
    'education-date2': 'июнь 2019 - сент. 2019',
    'education-date3': 'май 2020 - авг. 2020г',
    'education-date4': 'сент. 2020 - авг. 2021',
    'education-date5': 'окт. 2021 - февр. 2022',
    'education-date6': 'дек. 2022 - февр. 2023',
    'pty': 'Гомельский государственный профессиональный лицей строителей',
    'pty-profession': 'Отделочные строительные работы',
    'it-academy': 'IT-Академия',
    'academy-profession1': 'Разработка веб-сайтов с использованием HTML, CSS и JavaScript',
    'academy-profession2': 'Разработка веб-приложений с помощью JavaScript',
    'skillbox-profession': 'Веб-разработчик',
    'epam-profession': 'Фронтенд-разработчик',
    'rs-profession': 'JavaScript/Фронтенд. Этап 0',
    'skills': 'Навыки и умения',
    'work-experience': 'Опыт работы',
    'code-example': 'Пример кода',
    'languages': 'Языки',
    'en': 'Английский (слабый средний)',
    'ru': 'Русский (свободно)',
    'by': 'Белорусский (родной)',
  }
}

const changeLanguage = () => {
  const buttons = document.querySelectorAll('.translation__buuton');
  const elemets = document.querySelectorAll('.lang');
    
    buttons.forEach(el => {
      el.addEventListener('click', (event) => {   
        event.preventDefault();     

        const lang = event.currentTarget.getAttribute('id');

        elemets.forEach(el => el.textContent = languages[lang][el.getAttribute('data-key')]);              
      });      
    });
  }

changeLanguage();