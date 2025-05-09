import { RestaurantInfo } from '../types';

export const restaurantInfo: RestaurantInfo = {
  name: "China Restaurant Lotus",
  address: "Ernst-Reuter-Str. 28, 95032 HOF",
  phone: "09281/95066",
  hours: [
    { day: "Monday", hours: "Closed (Open on public holidays)" },
    { day: "Tuesday", hours: "11:30 - 14:00, 17:30 - 22:00" },
    { day: "Wednesday", hours: "11:30 - 14:00, 17:30 - 22:00" },
    { day: "Thursday", hours: "11:30 - 14:00, 17:30 - 22:00" },
    { day: "Friday", hours: "11:30 - 14:00, 17:30 - 22:00" },
    { day: "Saturday", hours: "11:30 - 14:00, 17:30 - 22:00" },
    { day: "Sunday", hours: "11:30 - 14:00, 17:30 - 22:00" }
  ]
};