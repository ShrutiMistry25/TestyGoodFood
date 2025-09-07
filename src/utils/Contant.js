// Image CDN URL for Restaurant card
export const RESTAURANT_IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Image CDN URL for Restaurant Menu
export const MENU_ITEM_IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

// Swiggy API endpoint to retrieve Restaurant data
export const SWIGGY_RESTAURANT_API_URL =
  "https://testygoodfood-server.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

// Swiggy API endpoint to retrieve Restaurant Menu data
export const SWIGGY_MENU_API_URL =
  "https://testygoodfood-server.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="

// Key for menu items API card type
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";


  export const FAQ = [
    {
      id: 1,
      title: "Can I edit my order?",
      description:
        "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
    },
    {
      id: 2,
      title: "I want to cancel my order",
      description:
        "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
    },
    {
      id: 3,
      title: "Will Insta Food be accountable for quality/quantity? ",
      description:
        "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
    },
    {
      id: 4,
      title: "Is there a minimum order value?",
      description:
        "We have no minimum order value and you can order for any amount. ",
    },
    {
      id: 5,
      title: "Do you charge for delivery?",
      description:
        "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
    },
    {
      id: 6,
      title: "How long do you take to deliver?",
      description:
        "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
    },
    {
      id: 7,
      title: "What are your delivery hours?",
      description:
        "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
    },
    {
      id: 8,
      title: "Is single order from many restaurants possible?",
      description:
        "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
    },
  ];
