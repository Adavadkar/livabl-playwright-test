exports.ListPage = class ListPage{

    constructor(page){
        this.page = page;
        this.propertyListings = page.locator("//div[@class= 'results' ]//li");
        this.propertyCardFirst = page.locator("//div[@class= 'results' ]//li//div[@class = 'details']").first();
        this.propertyName = this.propertyCardFirst.locator("//div[@class = 'name']");
        this.propertyPrice = this.propertyCardFirst.locator("//div[@class = 'price']");
        this.propertyBuilderName = this.propertyCardFirst.locator("//div[@class = 'build']");
        this.propertyAddress =  this.propertyCardFirst.locator("//div[@class = 'address']");
        this.propertySize =  this.propertyCardFirst.locator("//div[@class = 'summaryline']");

        //filter options
        this.priceDropDown = page.locator("//span[@id= 'pricearrow']");
        this.minPrice = page.locator("//input[@class = 'minprice price']");
        this.maxprice = page.locator("//input[@class = 'maxprice price']");
        this.bedroomDropDown = page.locator("//span[@id= 'bdarrow']");
        this.selectBedRoom = page.locator("//input[@type= 'checkbox' and @value = 3 ]");
    }

    async verifyCardDetails(){

       await expect(this.propertyCardFirst).toBeVisible();
         await expect(this.propertyName).not.toBeEmpty();
            await expect(this.propertyPrice).not.toBeEmpty();
            await expect(this.propertyBuilderName).not.toBeEmpty();
            await expect(this.propertyAddress).not.toBeEmpty();
            await expect(this.propertySize).not.toBeEmpty();
            
        }

    async changeFilterOptions(){

        //grab initial count of cards on first page 
        const initialCount = await this.page.locator(this.propertyListings).count();

        //select price range
        await this.priceDropDown.click();
        await this.minPrice.fill(300000);
        await this.maxprice.fill(700000);

        await this.minPrice.press('Tab');
        await this.page.waitForTimeout(3000);

        //select no. of bedrooms
        await this.bedroomDropDown.click();
        const isChecked = await this.selectBedRoom.isChecked();
        if (!isChecked) await this.selectBedRoom.check();

        //wait for listings to update
        await this.page.waitForTimeout(3000);
        //to close the dropdown
        await this.page.mouse.click(10, 10);

        const newCount = await this.page.locator(this.propertyListings).count();
        await expect(newCount).not.toBe(initialCount);

    }

    
}