import './style.css';
import { TaskPage } from './pages/taskPage';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = '';
  app.appendChild(TaskPage());
}