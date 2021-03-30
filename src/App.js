import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import {Logger} from 'logging-library';
// import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';

function App() {
  document.title = 'Tagged Back-Translation Releases'

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quản lý nhóm và tài liệu</h1>
        <ul>
          <li>
            <p>
              Google Drive chứa tài liệu:&nbsp;
              <a
                target="_blank"
                href="https://drive.google.com/drive/folders/1cZSoX1ykN1NtFd03Ruxjwy2oYzUYtqNc?usp=sharing"
              >
                Link
              </a>
            </p>
          </li>

          <li>
            <p>
              Link Trello:&nbsp;
              <a
                target="_blank"
                href="https://trello.com/b/0SnLpOnZ/lu%E1%BA%ADn-v%C4%83n-machine-translation-model"
              >
                Link
              </a>
            </p>
          </li>
        </ul>

        <hr />
        <h1>Nội dung nộp</h1>

        <hr />
        <h1>Cập nhật quá trình</h1>

        <h2>30/03/2021</h2>
        <ul>
          <li>
            <p>
            Đề cương khóa luận:&nbsp;
              <a
                target="_blank"
                href="../documents/CLC_Đề cương KLTN.pdf"
              >
                .pdf
              </a>
              &nbsp;
              <a
                target="_blank"
                href="../documents/CLC_Đề cương KLTN.docx"
              >
                .docx
              </a>
            </p>
          </li>
        </ul>

        <h2>23/01/2021</h2>
        <ul>
          <li>
            <p>
            Hướng dẫn thực hiện luận văn:&nbsp;

              <a
                target="_blank"
                href="../documents/03. Huong Dan Thuc Hien Luan Van.pdf"
              >
                .pdf
              </a>
              &nbsp;
              <a
                target="_blank"
                href="../documents/03. Huong Dan Thuc Hien Luan Van.docx"
              >
                .docx
              </a>
            </p>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default App
