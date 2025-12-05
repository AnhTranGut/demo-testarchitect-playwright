// pages/urls.ts
export const PAGE_NAV = {
   HOME: 'Home',
   ABOUT_US: 'About Us',
   SHOP: 'Shop',
   OFFERS: ' Offers',
   BLOG: 'Blog',
   CONTACT_US: 'Contact Us',
   ORDERS: 'Orders',
} as const

export const PRODUCT_LIST = {
  AirPods: 'AirPods',
  BeatsSolo3WirelessOnEar: 'Beats Solo3 Wireless On-Ear',
  CanonISENSYSLBP6030WWithWiFi: 'Canon i-SENSYS LBP6030W with Wi-Fi',
  DJIMavicProCameraDrone: 'DJI Mavic Pro Camera Drone',
  HPLaserJetM127FWWithWiFi: 'HP LaserJet M127fw with Wi-Fi',
} as const;

export const CHOSEN_LIST = [
  "AirPods",
  "Beats Solo3 Wireless On-Ear",
  "Canon i-SENSYS LBP6030W with Wi-Fi",
  "DJI Mavic Pro Camera Drone",
  "HP LaserJet M127fw with Wi-Fi",
]

export const PAYMENT_METHODS = {
  basc: "Direct bank transfer",
  checkPay: "Check payments",
  COD: "Cash on delivery",
} as const;

export const PAYMENT_METHODS_DESCRIPTIONS = {
  basc: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  checkPay: "Please send a check to TestArchitect Sample Store, 1730 S. Amphlett Blvd. Suite 200, San Mateo, CA.",
  COD: "Pay with cash upon delivery.",
} as const;

export const SORTING_OPTIONS = {
  PriceLowToHigh: "Sort by price: low to high",
  PriceHighToLow: "Sort by price: high to low",
  Popularity: "Sort by popularity",
  AverageRating: "Sort by average rating",
  Latest: "Sort by latest",
} as const;