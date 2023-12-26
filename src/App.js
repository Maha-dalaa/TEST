import './App.css';
import Card from './components/Card';
import AddCart from './components/AddCart';

function App() {
  return (
    <div className="container">
      <div className="row pt-5">
        <Card title="product1" desc="lorm ipsum" btnTitle="More info">
          <AddCart title="veiw info" />
          <AddCart title="Add cart" />
        </Card>
        <Card title="product2" className="bg-dark" />
        <Card title="product3" />
      </div>
    </div>
  );
}

export default App;
