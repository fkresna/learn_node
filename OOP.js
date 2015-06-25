var title = "title", 
	first = "first", 
	last = "last", 
	price = 0, 
	quantity = 0, 
	release_date = "date", 
	tracklisting = [],
	money = 1000,
	pay = 0,
	MyAlbum = [],
	MyItems = [],
	choose = 0,
	qty = 0,
	counter = 0;


title = "Album 1";
first = "Elli";
last = "Goulding";
price = 100;
quantity = parseInt(Math.random()*(10-1)+1);
release_date = (new Date()).toString().split(' ').splice(1,3).join(' ');
tracklisting = ["Love Me Like You Do"," Burn"];
var Album1 = new Album (title, first, last, price,  release_date, quantity, tracklisting);

title = "Album 2";
first = "Wiz";
last = "Khalifa";
price = 130;
quantity = parseInt(Math.random()*(10-1)+1);
release_date = (new Date()).toString().split(' ').splice(1,3).join(' ');
tracklisting = ["See You Again"," No Permission"];
var Album2 = new Album (title, first, last, price, release_date, quantity, tracklisting);

title = "Album 3";
first = "Madonna";
last = "";
price = 150;
quantity = parseInt(Math.random()*(10-1)+1);
release_date = (new Date()).toString().split(' ').splice(1,3).join(' ');
tracklisting = ["Living For Love"," Ghosttown"];
var Album3 = new Album (title, first, last, price, release_date, quantity, tracklisting);

title = "Album 4";
first = "Tame";
last = "Impala";
price = 18;
quantity = parseInt(Math.random()*(10-1)+1);
release_date = (new Date()).toString().split(' ').splice(1,3).join(' ');
tracklisting = ["Let It Happen"," Eventually"];
var Album4 = new Album (title, first, last, price, release_date, quantity, tracklisting);

title = "Album 5";
first = "Britney";
last = "Spears";
price = 200;
quantity = parseInt(Math.random()*(10-1)+1);
release_date = (new Date()).toString().split(' ').splice(1,3).join(' ');
tracklisting = ["Pretty Girls"," Baby One More Time"];
var Album5 = new Album (title, first, last, price, release_date, quantity, tracklisting);

MyAlbum = [Album1, Album2, Album3, Album4, Album5];

for (var i = 0; i < MyAlbum.length; i++)
  console.log((i+1) + ". " + MyAlbum[i].print);

MyItems = new Cart();
counter = 1;
console.log("Transaction");
do
{
	choose = parseInt(Math.random()*(4-0)+0);
	
	if (money >= MyAlbum[choose].price)
	{
		qty = parseInt(MyAlbum[choose].quantity.toString());
		if (qty > 0)
		{
			MyItems.add = (MyAlbum[choose]);
			
			console.log(counter + ". " + MyAlbum[choose].printPurchase);
			counter++;
			
			MyAlbum[choose].purchase = parseInt(MyAlbum[choose].quantity.toString());
			pay = pay + parseInt(MyAlbum[choose].price.toString());
			money = money - parseInt(MyAlbum[choose].price.toString());
		}
	}
	else
	{
		break;
	}
} while (1);

console.log("Total price = $ " + pay);
console.log("Pay = $ 1000");
console.log("Change = " + money);

console.log();
console.log("Album remaining stock");
for (var i = 0; i < MyAlbum.length; i++)
  console.log((i+1) + ". " + MyAlbum[i].print);
	

function Album (title, first_name, last_name, price, release_date, quantity, tracklisting)
{
	this.title = title;
	this.artist = first_name + " " + last_name;
	this.price = price;
	this.release_date = release_date;
	this.quantity = quantity;
	this.tracklisting = tracklisting;
}

function Cart()
{
	this.Items = [];
}

Album.prototype.print = function()
{
    return "Title = " + this.title + "<br/>" + 
		"Artist = " + this.artist + "<br/>" + 
		"Price = $" + this.price + "<br/>" + 
		"Releas Date = " + this.release_date + "<br/>" + 
		"Quantity = " + this.quantity + "<br/>"	+ 
		"Tracklisting = " + this.tracklisting;
};

Album.prototype.printPurchase = function()
{
	return this.title + "-" + this.artist + "-Qty:1<br/>";
};

Album.prototype.purchase = function(quantity)
{
	if (this.quantity > 0)
	{
		this.quantity = this.quantity - 1;
	}
};

Cart.prototype.add = function(x)
{
    this.Items.push(x);
};

Cart.prototype.remove = function(index)
{
    this.Items.splice(index, 1);;
};
