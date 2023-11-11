

import AddQuestion from './components/AddQuestion';
import Parameters from './components/Parameters';
import Body from './components/body';
import Header from './components/header';
import HeaderBody from './components/headerBody';


function App() {
  return (
    <div className="bg-gray-50 flex flex-col font-lato gap-[23px] items-center justify-start mx-auto pb-[35px] w-full">
      <Header />
      <div className="flex flex-col items-center justify-start max-w-[1196px] mx-auto md:px-5 w-full">
        <HeaderBody />
        <Body />
        <AddQuestion />
        <Parameters/>/
      </div>
    </div>
  );
}

export default App;
