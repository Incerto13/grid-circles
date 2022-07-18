
import { SetStateAction, useState } from "react";
import './App.css';
import CategoryButton from "./components/CategoryButton";
import Circle from './components/Circle';
import dataModel from "./models/data_model.json";

function App() {
  const [currBtnCategory, setCurrBtnCategory] = useState('initial');
  const [currCategory, setCurrCategory] = useState('initial');
  const [loading, setLoading] = useState(false);


  const handleCategoryChange = (newCategory: SetStateAction<string>) => {
    if (loading || (newCategory === currBtnCategory)) {
      return
    }
    if (currCategory === 'initial') {
      // skip delay on fresh start, go right into animation
      setCurrBtnCategory(newCategory);
      setCurrCategory(newCategory);
    } else {
      // btn category is separate as btn must appear 'selected' immediately
      setCurrBtnCategory(newCategory);
      setLoading(true);
      setCurrCategory('initial');
      // category for circles is delayed as to allow time for animation
      setTimeout(() => {
        setCurrCategory(newCategory);
        setLoading(false);
      }, 2000);
    }

  }

  return (
    <div className="App">
          <div className="grid-btns">
            <CategoryButton
              btnCategory={'freeSpirit'}
              btnCategoryLabel={'Free spirit'}
              currBtnCategory={currBtnCategory}
              handleClick={handleCategoryChange}
            />
            <CategoryButton
              btnCategory={'achiever'}
              btnCategoryLabel={'Achiever'}
              currBtnCategory={currBtnCategory}
              handleClick={handleCategoryChange}
            />
            <CategoryButton
              btnCategory={'caregiver'}
              btnCategoryLabel={'Caregiver'}
              currBtnCategory={currBtnCategory}
              handleClick={handleCategoryChange}
            />

        </div>
          <div className="grid-body">          
            <Circle
              gridPosition={'achievement'}
              circleLabel={'Achievement'}
              currCategory={currCategory}
              dataModel={dataModel}
              loading={loading}
            />
            <Circle
              gridPosition={'conservation'}
              circleLabel={'Conservation'}
              currCategory={currCategory}
              dataModel={dataModel}
              loading={loading}
            />
            <Circle
              gridPosition={'caring'}
              circleLabel={'Caring'}
              currCategory={currCategory}
              dataModel={dataModel}
              loading={loading}
            />
            <Circle
              gridPosition={'freedom'}
              circleLabel={'Freedom'}
              currCategory={currCategory}
              dataModel={dataModel}
              loading={loading}
            />      
            <Circle
              gridPosition={'respect'}
              circleLabel={'Respect'}
              currCategory={currCategory}
              dataModel={dataModel}
              loading={loading}
            />
            <Circle
              gridPosition={'tradition'}
              circleLabel={'Tradition'}
              currCategory={currCategory}
              dataModel={dataModel}
              loading={loading}
            />
            <Circle
              gridPosition={'enjoyment'}
              circleLabel={'Enjoyment'}
              currCategory={currCategory}
              dataModel={dataModel}
              loading={loading}
            />            
            <Circle
              gridPosition={'stability'}
              circleLabel={'Stability'}
              currCategory={currCategory}
              dataModel={dataModel}
              loading={loading}
            />
            <Circle
              gridPosition={'equalityJustice'}
              circleLabel={'Equality/justice'}
              currCategory={currCategory}
              dataModel={dataModel}
              loading={loading}
            />            
        </div>
    </div>
  );
}

export default App;
