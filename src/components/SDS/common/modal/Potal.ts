import ReactDOM from 'react-dom';

const Potal = ({ children }: { children: React.ReactNode }) => {
  const container = document.getElementById('modal') as Element;
  return ReactDOM.createPortal(children, container);
};

export default Potal;
