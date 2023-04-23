import reactLogo from '@/assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { useObservable } from 'rxjs-hooks';
import { Store } from './store';

function App() {
    const store = useObservable(() => Store, '');

    return (
        <div className="flex items-center justify-center mt-20">
            <span className="test-text">{store}</span>
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
    );
}

export default App;
