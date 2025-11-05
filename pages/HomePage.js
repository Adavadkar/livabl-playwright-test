import { expect } from '@playwright/test';

exports.HomePage = class HomePage{

    constructor(page){
        this.page = page;
        this.HomeLogo =  page.getByAltText('Livabl Logo');
        this.HomeScreenSearch = page.locator("//input[@name= 'SearchTerm']").first();
        this.HomeSearchButton = page.locator("//button[@class= 'submit-search hidden-xs']");
        this.ListPageTitle = page.locator("//span[@id= 'headingTextLocation']");
    }

    async goToHomePage(){
        await this.page.goto('/');
        await expect (this.page).toHaveTitle('Livabl.com | New Construction Homes for Sale & New Home Builders');
    }

    async HomeSearch(searchText){
        await this.HomeScreenSearch.fill(searchText);
        await this.HomeSearchButton.click();
        await expect (this.ListPageTitle).toContainText(searchText);
    }
}