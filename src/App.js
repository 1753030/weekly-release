import logo from './logo.svg'
import './App.css'
// import {Logger} from 'logging-library';
// import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';

function App() {
  document.title = "Tagged Back-Translation Releases";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quản lý nhóm và tài liệu</h1>
        <ul>
          <li>
            <p>
              Google Drive chứa tài liệu:&nbsp;
              <a href="https://drive.google.com/drive/folders/1cZSoX1ykN1NtFd03Ruxjwy2oYzUYtqNc?usp=sharing">
                Link
              </a>
            </p>
          </li> 

          <li>
            <p>
              Link Trello:&nbsp;
              <a href="https://trello.com/b/0SnLpOnZ/lu%E1%BA%ADn-v%C4%83n-machine-translation-model">Link</a>
            </p>
          </li>
        </ul>

        <hr />
        <h1>Nội dung nộp</h1>

        <hr />
        <h1>Cập nhật quá trình</h1>

      </header>
    </div>
  )
}

export default App
