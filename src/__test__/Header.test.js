import Header from '../components/Header/'
import { render } from '@testing-library/react';

describe('Test for Header component', ()=>{
    test('Header render', ()=>{
        render(<Header></Header>)
    })

    test('App title is rendered', ()=>{
        const {getByTitle} = render(<Header></Header>);

        const appTitle = getByTitle('app-title');
        expect(appTitle).toBeInTheDocument();
    })

    test('App logo is rendered', ()=>{
        const {getByTitle} = render(<Header></Header>);

        const appLogo = getByTitle('app-logo');
        expect(appLogo).toBeInTheDocument();
    })
})