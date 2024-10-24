class IceCreamFlavor {
    _name: string = ""; 
    _price: number = 0; 
    _isPopular: boolean = false;
    _description?: string = undefined; 
}
const straciatellaItaliaGrande = new IceCreamFlavor();
straciatellaItaliaGrande._name = "straciatelleaItaliaGrande";
straciatellaItaliaGrande._price = 3.50; 
straciatellaItaliaGrande._isPopular = true;
straciatellaItaliaGrande._description = "classic italian sheesh";

const cookiesAndCream = new IceCreamFlavor(); 
cookiesAndCream._name = "cookiesAndCream" 
cookiesAndCream._price = 2.50;
cookiesAndCream._isPopular = true; 

const vanillaShakeCraneberry = new IceCreamFlavor;
vanillaShakeCraneberry._name = "hallyberrymerryme"
vanillaShakeCraneberry._price = 5.50;
vanillaShakeCraneberry._isPopular = false; 

const iceCreamFlavorsArr = [straciatellaItaliaGrande, cookiesAndCream, vanillaShakeCraneberry];

const popularIceCream = iceCreamFlavorsArr.filter((flavor) => 
flavor._isPopular)





export default IceCreamFlavor

