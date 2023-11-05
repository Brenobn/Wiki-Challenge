import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {
  
const [currentRepo, setCurrentRepo] = useState('');
const [repos, setRepos] = useState([]);

const handleSearchRepo = async () => {
  const {data} = api.get(`repos/${currentRepo}`)

  if(data.id) {
    setRepos(prev => [...prev, data]);
  }
}
 

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
