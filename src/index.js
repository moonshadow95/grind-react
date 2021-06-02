import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import BodyRepository from './service/body_repository';
import DietRepository from './service/diet_repository';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
const bodyRepository = new BodyRepository();
const dietRepository = new DietRepository();

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      bodyRepository={bodyRepository}
      dietRepository={dietRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
