import { Container } from 'react-bootstrap'
import './App.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import TeamScreen from './screens/TeamScreen'
import PlayerScreen from './screens/PlayerScreen'
import PlayerListScreen from './screens/PlayerListScreen'
import PlayerEditScreen from './screens/PlayerEditScreen'
import GalleryScreen from './screens/GalleryScreen'
import VideoScreen from './screens/VideoScreen'
import VideoListScreen from './screens/VideoListScreen'
import StoreScreen from './screens/StoreScreen'
import ProductScreen from './screens/ProductScreen'
import ArticleScreen from './screens/ArticleScreen'
import ArticleListScreen from './screens/ArticleListScreen'
import ArticleEditScreen from './screens/ArticleEditScreen'
import PhotoScreen from './screens/PhotoScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-5">
      <Route path='/' component={HomeScreen} exact/>
        <Container>
          <Route path='/equipe' component={TeamScreen} exact/>
          <Route path='/photo' component={GalleryScreen} exact/>
          <Route path='/photos/:id' component={PhotoScreen} exact/>
          <Route path='/cavtv' component={VideoListScreen} exact/>
          <Route path='/cavtv/:id' component={VideoScreen} exact/>
          <Route path='/article/:id' component={ArticleScreen} exact/>
          <Route path='/players/:id' component={PlayerScreen} exact/>
          <Route path='/product/:id' component={ProductScreen} exact/>
          <Route path='/login' component={LoginScreen} exact/>
          <Route path='/register' component={RegisterScreen} exact/>
          <Route path='/profile' component={ProfileScreen} exact/>
          <Route path='/shipping' component={ShippingScreen} exact/>
          <Route path='/payment' component={PaymentScreen} exact/>
          <Route path='/boutique' component={StoreScreen} exact/>
          <Route path='/cart/:id?' component={CartScreen} exact/>
          <Route path='/placeorder' component={PlaceOrderScreen} exact/>
          <Route path='/order/:id' component={OrderScreen} exact/>

          <Route path='/admin/articlelist' component={ArticleListScreen} exact/>
          <Route path='/admin/article/:id/edit' component={ArticleEditScreen} exact/>
          
          <Route path='/admin/playerlist' component={PlayerListScreen} exact/>
          <Route path='/admin/player/:id/edit' component={PlayerEditScreen} exact/>

          <Route path='/admin/userlist' component={UserListScreen} exact/>
          <Route path='/admin/user/:id/edit' component={UserEditScreen} exact/>

          <Route path='/admin/productlist' component={ProductListScreen} exact/>
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} exact/>
          
          <Route path='/admin/orderlist' component={OrderListScreen} exact/>
          
        </Container>
      </main>
      <Footer/>
    </Router>
  )
}

export default App;
