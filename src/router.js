import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
  import App from "./App"
  import Index from "./pages/Index"
  import Show from "./pages/Show"
import { IndexLoader, ShowLoader } from "./loaders";
import { createAction, updateAction, deleteAction } from "./actions";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/posts" element={<Index />} loader={IndexLoader}/>
        <Route path="/:id" element={<Show />} loader={ShowLoader}/>
        <Route path="create" action={createAction}/>
        <Route path="update/:id" action={updateAction} />
        <Route path="delete/:id" action={deleteAction} />
      </Route>
    )
  );
  
  export default router;