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
  AIRPODS: 'AirPods',
  BEATS_SSOLO3_WIRELESS_ON_EAR: 'Beats Solo3 Wireless On-Ear',
  CANON_I_SENSYS_LBP6030W_WITH_WIFI: 'Canon i-SENSYS LBP6030W with Wi-Fi',
  DJI_MAVIC_PRO_CAMERA_DRONE: 'DJI Mavic Pro Camera Drone',
  HP_LASERJET_M127FW_WITH_WIFI: 'HP LaserJet M127fw with Wi-Fi',
} as const;

export const CHOSEN_LIST = [
  "AirPods",
  "Beats Solo3 Wireless On-Ear",
  "Canon i-SENSYS LBP6030W with Wi-Fi",
  "DJI Mavic Pro Camera Drone",
  "HP LaserJet M127fw with Wi-Fi",
] as const;

export const PAYMENT_METHODS = {
  BACS: "Direct bank transfer",
  CHEQUE: "Check payments",
  COD: "Cash on delivery",
} as const;

export const PAYMENT_METHODS_DESCRIPTIONS = {
  BACS: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  CHEQUE: "Please send a check to TestArchitect Sample Store, 1730 S. Amphlett Blvd. Suite 200, San Mateo, CA.",
  COD: "Pay with cash upon delivery.",
} as const;