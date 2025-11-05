import {test, expect} from '@playwright/test';
import{HomePage} from '../pages/HomePage';
import { ListPage } from '../pages/ListPage';

test('test', async ({page}) => {

    //Home page
   const homeObj = new HomePage(page);
   await homeObj.goToHomePage();
   await homeObj.HomeSearch('Toronto');

   //List page
   const listObj = new ListPage(page);
   try{
    await listObj.verifyCardDetails();
   } catch {

    console.warn('No Listings found for current dataset');
   }

   await listObj.changeFilterOptions();
    
   page.close();
    
});
