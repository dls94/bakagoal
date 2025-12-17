import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    productListReducers,
    productDetailsReducers, 
    productDeleteReducers, 
    productCreateReducers, 
    productUpdateReducers,
    productReviewCreateReducers,
    productTopRatedReducers, 
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { 
    userLoginReducer,
    userRegisterReducer, 
    userDetailsReducer, 
    userUpdateProfileReducer, 
    userListReducer, 
    userDeleteReducer,
    userUpdateReducer 
} from './reducers/userReducers'
import { 
    playerListReducers, 
    playerDetailsReducers, 
    playerDeleteReducers, 
    playerCreateReducers, 
    playerUpdateReducers 
} from './reducers/playerReducers'
import { 
    articleListReducers, 
    articleDetailsReducers, 
    articleDeleteReducers, 
    articleCreateReducers, 
    articleUpdateReducers 
} from './reducers/articleReducers'
import { 
    galleryListReducers, 
    galleryDetailsReducers, 
    galleryDeleteReducers, 
    galleryCreateReducers, 
    galleryUpdateReducers 
} from './reducers/galleryReducers'
import { 
    videoListReducers, 
    videoDetailsReducers, 
    videoDeleteReducers, 
    videoCreateReducers, 
    videoUpdateReducers 
} from './reducers/videoReducers'
import { 
    orderCreateReducer, 
    orderDetailsReducer, 
    orderPayReducer, 
    orderListMyReducer, 
    orderListReducer,
    orderDeliverReducer
 } from './reducers/orderReducers'



const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    productDelete: productDeleteReducers,
    productCreate: productCreateReducers,
    productUpdate: productUpdateReducers,
    productReviewCreate: productReviewCreateReducers,
    productTopRated: productTopRatedReducers,
    
    videoList: videoListReducers, 
    videoDetails: videoDetailsReducers, 
    videoDelete: videoDeleteReducers, 
    videoCreate: videoCreateReducers, 
    videoUpdate: videoUpdateReducers,

    playerList: playerListReducers,
    playerDetails: playerDetailsReducers,
    playerDelete: playerDeleteReducers,
    playerCreate: playerCreateReducers,
    playerUpdate: playerUpdateReducers,

    articleList: articleListReducers,
    articleDetails: articleDetailsReducers,
    articleDelete: articleDeleteReducers,
    articleCreate: articleCreateReducers, 
    articleUpdate: articleUpdateReducers,
    
    galleryList: galleryListReducers,
    galleryDetails: galleryDetailsReducers,
    galleryDelete: galleryDeleteReducers,
    galleryCreate: galleryCreateReducers, 
    galleryUpdate: galleryUpdateReducers,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
    
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: { cartItems: cartItemsFromStorage,
            shippingAddress: shippingAddressFromStorage
          },
    userLogin: { userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store