import './App.css';

function App() {
  return (
    <>
      <Header text={'This is Header Text'}></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

const Header = (props) => {
  return (
    <>
      <header className='w-full h-10 p-2 bg-slate-500'>{props?.text}</header>
    </>
  );
};

const Main = () => {
  return (
    <>
      <main className='w-full h-screen p-2 bg-blue-200'>
        this is main section
      </main>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer className='w-full h-10 bg-slate-500 p-2'>
        footer copy - 2023
      </footer>
    </>
  );
};

export default App;
