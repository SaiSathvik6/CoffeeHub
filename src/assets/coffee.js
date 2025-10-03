import Espresso from './espresso.jpg';
import Latte from './latte.jpg';
import ColdBrew from './cold-brew.jpg';
import Ethiopian from './ethiopian.webp';
import Colombian from './colombian.webp';
import Gautemal from './guatemal.webp'

const products = [
    {
        id: 1,
        title: "Espresso Coffee",
        image: Espresso,
        price: 5.99,
        description: "A strong and bold espresso shot to kickstart your day.",
    },
    {
        id: 2,
        title: "Latte",
        image: Latte,
        price: 6.99,
        description: "A creamy cappuccino with a perfect blend of espresso and milk foam.",
    },
    {
        id: 3,
        title: "Cold Brew",
        image: ColdBrew,
        price: 7.49,
        description: "A smooth and creamy latte made with steamed milk and espresso.",
    },
    {
        id: 4,
        title: "Ethiopian Yirgacheffe",
        description: "Light roast with floral and citrus notes",
        price: 14.99,
        image: Ethiopian,
    },
    {
        id: 5,
        title: "Colombian Dark Roast",
        description: "Full body, chocolate & nutty tones",
        price: 12.49,
        image: Colombian,
    },
    {
        id: 6,
        title: "Guatemala Antigua",
        description: "Balanced, smoky & chocolaty",
        price: 15.00,
        image: Gautemal,
    }
];

export default products;