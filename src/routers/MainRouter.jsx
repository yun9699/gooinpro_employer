import {createBrowserRouter} from "react-router-dom";
import IndexPage from "../pages/IndexPage.jsx";
import EmployerRouter from "./EmployerRouter.jsx";
import LoginRouter from "./LoginPageRouter.jsx";
import MainSelectRouter from "./MainSelectRouter.jsx";
import EmployerRegisterRouter from "./EmployerRegisterRouter.jsx";
import PartTimerRouter from "./PartTimerRouter.jsx";


const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />
    },
    EmployerRouter,
    LoginRouter,
    MainSelectRouter,
    EmployerRegisterRouter,
    PartTimerRouter,

])

export default MainRouter;