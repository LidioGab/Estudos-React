import { Link } from 'react-router-dom';
import './Index.scss';

function App() {
  return (
    <div className="pagina-inicial">
       <h1>
        Pagina incial

        <Link to='./media'> Pagina Media</Link>
       </h1>
    </div>
  );
}

export default App;
