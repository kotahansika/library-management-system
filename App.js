import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/Header_Footer/HeaderComponent';
import FooterComponent from './components/Header_Footer/FooterComponent';
import Home from './components/Home';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import ListStudentComponent from './components/Student_Crud_Operations/ListStudentComponent';
import CreateStudentComponent from './components/Student_Crud_Operations/CreateStudentComponent';
import ViewStudentComponent from './components/Student_Crud_Operations/ViewStudentComponent';
import BorrowBookComponent from './components/BorrowBookComponent'; // Import the Borrow Book component
import ReturnBooks from './components/ReturnBooks'; // Import the Return Books component

function App() {
  return (
    <div> 
      <Router>
        <HeaderComponent />
        <div className="container">
          <h1>Library Management System</h1>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/students" component={ListStudentComponent}></Route> 
            <Route path="/add-student/:id" component={CreateStudentComponent}></Route>
            <Route path="/view-student/:id" component={ViewStudentComponent}></Route>
            <Route path="/borrow-book" component={BorrowBookComponent}></Route> {/* Route for Borrow Book */}
            <Route path="/return-books" component={ReturnBooks}></Route> {/* New Route for Return Books */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
