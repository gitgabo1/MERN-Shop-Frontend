import { OrderItem } from './orderitems';
import User from './users';
const Order = {
    
    orderItems: Array<any>,
    Address1:String,
    shippingAddress2: String,
    city:String, 
    zip:String,
    country:String,
    phone:Number,
    status:String,
    totalPrince:Number,
    user:User,
    dateOrdered:Date,

    
};