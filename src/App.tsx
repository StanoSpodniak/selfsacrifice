import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import AboutProject from './components/AboutProject';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();

  const [quotes, ] = useState([
    { text: "The greatest virtues are those which are most useful to other persons.", author: "Aristotle" },
    { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
    { text: "In law a man is guilty when he violates the rights of others. In ethics he is guilty if he only thinks of doing so.", author: "Immanuel Kant" },
    { text: "A person may cause evil to others not only by his actions but by his inaction, and in either case he is justly accountable to them for the injury.", author: "John Stuart Mill" },
    { text: "One’s life has value so long as one attributes value to the life of others, by means of love, friendship, and compassion.", author: "Simone de Beauvoir" },
    { text: "The superior man is modest in his speech, but exceeds in his actions.", author: "Confucius" },
    { text: "The rules of morality are not the conclusion of our reason.", author: "David Hume" },
    { text: "The purpose of human life is to serve and to show compassion and the will to help others.", author: "Albert Schweitzer" },
    { text: "The essence of optimism is that it takes no account of the present, but it is a source of inspiration, of vitality, and hope where others have resigned; it enables a man to hold his head high, to claim the future for himself, and not to abandon it to his enemy.", author: "Dietrich Bonhoeffer" },
    { text: "The love of our neighbor in all its fullness simply means being able to say, 'What are you going through?'", author: "Simone Weil" },
  ]);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    };

    getRandomQuote();

    const intervalId = setInterval(getRandomQuote, 30000);

    return () => clearInterval(intervalId);
  }, [quotes]);

  const changeLinkColor = () => {
    localStorage.setItem('activeLink', "about");
  };

  return (
    <>
      <Header />
      <div className='homePageBanner'>
        <img src="./Good_Samaritan.jpg" alt="good samaritan" />
        <div className='qouteBanner'>
          <blockquote>"{currentQuote.text}"</blockquote>
          <cite>({currentQuote.author})</cite>
          <a href={localStorage.getItem("i18nextLng") === "en" ? "/about-project" : "/o-projekte"}>
            <button className='aboutProjectButton' onClick={changeLinkColor}>{t('navAboutProject')}</button>
          </a>
        </div>
      </div>
      <h2>{t('homePageTitle')}</h2>
      <AboutProject />
      <Footer />
    </>
  )
}

export default App
