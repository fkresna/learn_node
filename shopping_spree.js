
	function Album (title, first_name, last_name, price, release_date, quantity, tracklisting)
	{
		this.title = title;
		this.artist = first_name + " " + last_name;
		this.price = price;
		this.release_date = release_date;
		this.quantity = quantity;
		this.tracklisting = tracklisting;
	}


Album.prototype.print = function()
{
    console.log ("Title = " + this.title);
    console.log ("Artist = " + this.artist);
    console.log ("Price = $" + this.price);
    console.log ("Release Date = " + this.release_date);
    console.log ("Quantity = " + this.quantity);
    console.log ("Tracklisting = " + this.tracklisting);
};

Album.prototype.printPurchase = function()
{
	console.log(this.title + "-" + this.artist + "-Qty:1");
};

Album.prototype.purchase = function(quantity)
{
	if (this.quantity > 0)
	{
		this.quantity = this.quantity - 1;
	}
};


function Cart()
{
	this.Items = [];
}

Cart.prototype.add = function(x)
{
    this.Items.push(x);
};

Cart.prototype.remove = function(index)
{
    this.Items.splice(index, 1);;
};


module.exports = Album;