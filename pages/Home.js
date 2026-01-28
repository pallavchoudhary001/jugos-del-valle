import { Hero } from '../components/Hero.js';
import { Brands } from '../components/Brands.js';
import { Commitment } from '../components/Commitment.js';
import { Contact } from '../components/Contact.js';

export const Home = () => {
    return `
        <!-- Main Home Wrapper -->
        <div id="front-page" class="full">
            ${Hero()}
            ${Commitment()}
            ${Brands()}
            ${Contact()} 
        </div>
    `;
};
