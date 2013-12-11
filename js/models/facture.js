var Facture = DS.Model.extend({
	ref: DS.attr("number"),
	montant: DS.attr("number"),
	name: DS.attr("string"),
	payed: DS.attr("boolean"),
	date: DS.attr("date"),
	client: DS.belongsTo('App.Client')
});

Facture.FIXTURES = [{
	id: 1,
	ref: 293945,
	montant: 650,
	name: "Fenetre blanches",
	payed: false,
	date: new Date(2013,10,23),
	client: 1
},{
	id: 2,
	ref: 293322,
	montant: 1250,
	name: "Fenetre noires",
	payed: false,
	date: new Date(2013,3,13),
	client: 1
},{
	id: 3,
	ref: 302934,
	montant: 349,
	name: 'fenetre voiture',
	payed: true,
	date: new Date(2012,5,3),
	client: 2
}]

module.exports = Facture;

