import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import styled from 'styled-components';
import usePhotoGallery from './hooks/usePhotoGallery';
import './App.css';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 100vh;
`

function App() {

  const {capturedPhoto, takePhoto} = usePhotoGallery()

  return (
    <div className="App">
      <Content >
        {capturedPhoto && <img src={capturedPhoto} alt="capturedPhoto" />}
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={takePhoto}>
          <PhotoCamera />
        </IconButton>
      </Content>
    </div>
  );
}

export default App;
