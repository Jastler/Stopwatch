import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import './App.css';


function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0)

  useEffect(() => {
    const stream$ = new Observable(observer => {
      setInterval(() => {
        observer.next(second + 1)
        console.log(second) 
      }, 1000);
      setTimeout(() => {
        observer.complete(); 
      }, 5000);
    })

    stream$
    .subscribe((el) => {
      setSecond(el)
    });
  }, [second]);
  
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div>
        <span>
        {minute < 10 ? (
            `0${minute}`
          ) : (
            minute
          )}
          {' : '}
          {second < 10 ? (
            `0${second}`
          ) : (
            second
          )}
        </span>
      </div>
    </div>
  );
}

export default App;
